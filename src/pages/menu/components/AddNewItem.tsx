import { useState } from "react";

function AddNewItem() {
    const [image, setImage] = useState<string | null>(
        "https://img.freepik.com/premium-photo/close-up-black-paper-texture-background_60487-2124.jpg?semt=ais_hybrid"
    );

    const [categoryName, setCategoryName] = useState("");
    const [categoryType, setCategoryType] = useState("Snacks");

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImage(reader.result as string);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div className="w-full flex flex-col border border-gray-300 overflow-hidden pt-[5rem] relative justify-between h-screen">
            <div className="flex flex-col px-3 gap-y-3 overflow-y-auto max-h-[calc(100vh-10rem)]">
                <div className="flex flex-col gap-y-3 items-center">
                    <img
                        className="rounded w-full h-auto"
                        src={image || ""}
                        alt="Category"
                    />
                    <label
                        className="text-sm md:text-base cursor-pointer text-primary hover:text-primary-dark"
                        htmlFor="image-upload"
                    >
                        Upload Image
                    </label>
                    <input
                        id="image-upload"
                        type="file"
                        accept="image/*"
                        onChange={handleImageChange}
                        className="hidden"
                    />
                </div>

                <div className="flex flex-col gap-y-3">
                    <input
                        className="border border-gray-400 p-3 rounded w-full text-sm md:text-base"
                        type="text"
                        placeholder="Enter category Name"
                        value={categoryName}
                        onChange={(e) => setCategoryName(e.target.value)}
                    />
                    <select
                        className="border border-gray-400 p-3 rounded w-full text-sm md:text-base"
                        value={categoryType}
                        onChange={(e) => setCategoryType(e.target.value)}
                    >
                        <option value="Snacks">Snacks</option>
                        <option value="Chinese">Chinese</option>
                        <option value="North Indian">North Indian</option>
                        <option value="Special Meals">Special Meals</option>
                        <option value="Main Course">Main Course</option>
                        <option value="Bread">Bread</option>
                        <option value="Dessert">Dessert</option>
                    </select>
                </div>

                <div className="flex flex-col gap-y-3">
                    <div className="flex flex-wrap gap-x-3 gap-y-2">
                        <input
                            className="border border-gray-400 p-3 rounded w-full sm:w-[48%] md:w-[48%] lg:w-[48%] text-sm md:text-base"
                            type="text"
                            placeholder="Enter normal price"
                        />
                        <input
                            className="border border-gray-400 p-3 rounded w-full sm:w-[48%] md:w-[48%] lg:w-[48%] text-sm md:text-base"
                            type="text"
                            placeholder="Enter offer price"
                        />
                    </div>
                    <textarea
                        className="border border-gray-400 p-3 rounded w-full text-sm md:text-base"
                        placeholder="Write some description"
                    />
                </div>
            </div>

            <div className="sticky bottom-0 bg-white p-3 md:p-4 flex gap-2 border-t border-gray-300">
                <button className="bg-primary text-white w-full p-2 rounded text-sm md:text-base">
                    Save
                </button>
            </div>
        </div>
    );
}

export default AddNewItem;
