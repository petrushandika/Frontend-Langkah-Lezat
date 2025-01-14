import { IoIosArrowForward } from "react-icons/io";
import { useAuth } from "@/context/AuthContext";
import LOCAL_STORAGE from "@/networks/storage";
import { useNavigate } from "react-router-dom";

function SettingPage() {
    const { logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        LOCAL_STORAGE.REMOVE();
        logout();
        navigate("/auth/login");
    };

    return (
        <div className="w-full flex flex-col border border-gray-300 overflow-hidden pt-[4.5rem] relative justify-between h-screen">
            <div
                className="flex justify-between p-3 border-b border-gray-400 cursor-pointer"
                onClick={handleLogout}
            >
                <p>Logout</p>
                <IoIosArrowForward />
            </div>
        </div>
    );
}

export default SettingPage;
