import { useState, useEffect, useRef } from "react";
import { LuMenu } from "react-icons/lu";
import { IoIosArrowBack } from "react-icons/io";
import { Link, useLocation } from "react-router-dom";
import clsx from "clsx";

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();
    const menuRef = useRef<HTMLDivElement>(null);

    const toggleMenu = () => setMenuOpen(!menuOpen);

    const noBackArrowPaths = ["/", "/menu", "/history", "/settings"];
    const shouldShowBackArrow = !noBackArrowPaths.includes(location.pathname);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setMenuOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const handleLinkClick = () => {
        setMenuOpen(false);
    };

    return (
        <header className="relative flex justify-between items-center py-5 px-3 bg-primary">
            {shouldShowBackArrow ? (
                <IoIosArrowBack
                    onClick={() => window.history.back()}
                    className="text-2xl cursor-pointer text-white"
                />
            ) : (
                <LuMenu
                    onClick={toggleMenu}
                    className="text-2xl cursor-pointer text-white"
                />
            )}
            <div className="text-center flex-1">
                <p className="text-lg font-semibold text-white">Our Order's</p>
            </div>

            <nav
                ref={menuRef}
                className={clsx(
                    "absolute top-full left-0 w-full bg-white shadow-md z-10 transition-all duration-300 ease-in-out",
                    {
                        "opacity-100 translate-y-0": menuOpen,
                        "opacity-0 translate-y-[-10px] pointer-events-none": !menuOpen,
                    }
                )}
            >
                <ul className="flex flex-col p-4 space-y-2">
                    <li className="hover:bg-gray-200 p-2 rounded">
                        <Link to="/" onClick={handleLinkClick}>Order</Link>
                    </li>
                    <li className="hover:bg-gray-200 p-2 rounded">
                        <Link to="/menu" onClick={handleLinkClick}>Menu</Link>
                    </li>
                    <li className="hover:bg-gray-200 p-2 rounded">
                        <Link to="/daily-offers" onClick={handleLinkClick}>Daily Offers</Link>
                    </li>
                    <li className="hover:bg-gray-200 p-2 rounded">
                        <Link to="/history" onClick={handleLinkClick}>History</Link>
                    </li>
                    <li className="hover:bg-gray-200 p-2 rounded">
                        <Link to="/settings" onClick={handleLinkClick}>Settings</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
