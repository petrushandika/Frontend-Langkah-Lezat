import { useState } from "react";
import OfferDetail from "./OfferDetail";

function MenuItemList() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isOn, setIsOn] = useState(false);

    const toggleState = () => {
        setIsOn(!isOn);
    };

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="w-full flex flex-col border border-gray-300 overflow-hidden pt-[5rem] relative justify-between h-screen">
            <div className="flex flex-col gap-y-3 px-3">
                <div className="flex items-center justify-between gap-x-3">
                    <div onClick={openModal} className="flex items-center gap-x-3 cursor-pointer">
                        <img
                            className="w-14 h-14 object-cover rounded-full"
                            src="https://cablevey.com/wp-content/uploads/2020/11/The-Complete-Guide-on-Snack-Foods.jpg"
                            alt="Deluxe Thali"
                        />
                        <div className="flex flex-col">
                            <p className="font-medium text-sm md:text-base">Deluxe Thali</p>
                            <p className="text-xs md:text-sm text-gray-600">
                                Shahi Paneer, Mix Veg, Dal Makhani, 3 Roti, Rice, Curd, Salad, Papad & Dessert
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col gap-y-1">
                        <div className="flex">
                            <button
                                onClick={toggleState}
                                className={`border rounded-l w-10 text-sm font-medium ${isOn ? "border-gray-300 text-gray-400" : "border-primary text-primary"}`}
                            >
                                OFF
                            </button>
                            <button
                                onClick={toggleState}
                                className={`rounded-r w-10 text-sm font-medium ${isOn ? "bg-primary text-white" : "bg-gray-300 text-gray-500"}`}
                            >
                                ON
                            </button>
                        </div>
                        <div>
                            <p className="text-xs md:text-base font-semibold text-green-500 text-center">Rp. 25.000</p>
                        </div>
                    </div>
                </div>
            </div>

            <OfferDetail isOpen={isModalOpen} closeModal={closeModal} />
        </div>
    );
}

export default MenuItemList;
