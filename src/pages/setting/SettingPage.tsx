import { IoIosArrowForward } from "react-icons/io";

function SettingPage() {
    return (
        <div className="w-full flex flex-col border border-gray-300 overflow-hidden pt-[4.5rem] relative justify-between h-screen">
            <div className="flex justify-between p-3 border-b border-gray-400">
                <p>Logout</p>
                <IoIosArrowForward />
            </div>
        </div>
    )
}

export default SettingPage