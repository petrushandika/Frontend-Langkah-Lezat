interface ItemDetailProps {
    isOpen: boolean;
    closeModal: () => void;
}

export default function ItemDetail({ isOpen, closeModal }: ItemDetailProps) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
            <div className="bg-white rounded max-w-sm w-full mx-3 relative shadow-lg">
                <button
                    onClick={closeModal}
                    className="absolute top-3 right-3 text-black font-medium hover:text-black"
                >
                    ✕
                </button>
                <div className="flex flex-col items-center">
                    <img
                        className="w-full h-60 object-cover rounded-t"
                        src="https://cablevey.com/wp-content/uploads/2020/11/The-Complete-Guide-on-Snack-Foods.jpg"
                        alt="Deluxe Thali"
                    />
                    <div className="mt-3">
                        <p className="font-medium text-lg px-3">Deluxe Thali</p>
                        <hr className="my-2" />
                        <p className="text-sm text-gray-600 px-3">
                            Shahi Paneer, Mix Veg, Dal Makhani, 3 Roti, Rice, Curd, Salad, Papad & Dessert
                        </p>
                    </div>
                    <div className="flex justify-between gap-x-3 w-full mt-4 p-3">
                        <button className="border border-primary w-1/2 rounded py-2 hover:bg-primary hover:text-white">
                            Edit Item
                        </button>
                        <button className="border border-primary w-1/2 rounded py-2 hover:bg-red-500 hover:text-white">
                            Delete Item
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
