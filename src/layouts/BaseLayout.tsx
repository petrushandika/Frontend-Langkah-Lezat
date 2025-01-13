import Header from "./Header";
import { Outlet } from "react-router-dom";
// import Footer from "./Footer";

function Layout() {
    return (
        <div>
            <header className="fixed top-0 left-0 w-full z-50 bg-white">
                <Header />
            </header>

            <main>
                <Outlet />
            </main>

            {/* <Footer /> */}
        </div >
    );
}

export default Layout;
