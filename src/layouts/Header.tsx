import { useState } from "react";
import { LuMenu } from "react-icons/lu";
import { Link } from "react-router-dom";
import clsx from "clsx";

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => setMenuOpen(!menuOpen);

    return (
        <header className="relative flex justify-between items-center p-5 bg-primary">
            <LuMenu
                onClick={toggleMenu}
                className="text-2xl cursor-pointer text-white"
            />
            <div className="text-center flex-1">
                <p className="text-lg font-semibold text-white">Our Order's</p>
            </div>

            <nav
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
                        <Link to="/order">Order</Link>
                    </li>
                    <li className="hover:bg-gray-200 p-2 rounded">
                        <Link to="/menu">Menu</Link>
                    </li>
                    <li className="hover:bg-gray-200 p-2 rounded">
                        <Link to="/history">History</Link>
                    </li>
                    <li className="hover:bg-gray-200 p-2 rounded">
                        <Link to="/settings">Settings</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
