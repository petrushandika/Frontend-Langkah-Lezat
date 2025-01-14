import Header from "./Header";
import { Outlet, useLocation } from "react-router-dom";
// import Footer from "./Footer";

function Layout() {
    const location = useLocation();
    const hideHeaderPaths = ["/auth/login", "/auth/register"];

    const shouldHideHeader = hideHeaderPaths.includes(location.pathname);

    return (
        <div>
            {!shouldHideHeader && (
                <header className="fixed top-0 left-0 w-full z-50 bg-white">
                    <Header />
                </header>
            )}

            <main>
                <Outlet />
            </main>

            {/* <Footer /> */}
        </div>
    );
}

export default Layout;
