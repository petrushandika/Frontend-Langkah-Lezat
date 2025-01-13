import { useState } from "react";
import { IoSettingsOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

function MenuPage() {
    const [activeCategoryIndex, setActiveCategoryIndex] = useState<number | null>(null);

    const menuCategories = [
        {
            name: "Snacks",
            imageUrl: "https://cablevey.com/wp-content/uploads/2020/11/The-Complete-Guide-on-Snack-Foods.jpg",
        },
        {
            name: "Chinese",
            imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlN3oxcPgm9M6Np5a9k-Plf3GHrGZz5d1Czw&s",
        },
        {
            name: "North Indian",
            imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLlrRH2MomQ5JtG4n329MnHDZgq-IuMBAc-22tIJX_qkVfHgTzk4Op5FcoJ0SIqKw34ns&usqp=CAU",
        },
        {
            name: "Special Meals",
            imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiL5ftZVu47e7Kz5aieFDEdUF9QwTA0O2h0Q&s",
        },
        {
            name: "Main Course",
            imageUrl: "https://www.southernliving.com/thmb/XIHmbOagRrWxoOOrYnQih5VEV9A=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/2548301_QFSHe_646_0_0_0-fbd2a27e126942c8b33dbc3d696b0501.jpg",
        },
        {
            name: "Bread",
            imageUrl: "https://www.seriouseats.com/thmb/_nSWyhg_GmvdjUwMMvX7KG6lYNQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/perfect-quick-easy-french-toast-hero-03-2a9485bbb12b4cf5abcfef53aa9accd9.jpg",
        },
        {
            name: "Dessert",
            imageUrl: "https://images.immediate.co.uk/production/volatile/sites/30/2017/11/Vegan-chocolate-tart-with-raspberries-05795f4.jpg?quality=90&resize=556,505",
        },
    ];

    const handleSettingsClick = (index: number) => {
        if (activeCategoryIndex === index) {
            setActiveCategoryIndex(null);
        } else {
            setActiveCategoryIndex(index);
        }
    };

    return (
        <div className="w-full flex flex-col border border-gray-300 overflow-hidden pt-[5rem] relative justify-between h-screen">
            <div className="flex flex-col gap-y-3 px-3">
                {menuCategories.map((category, index: number) => (
                    <div
                        key={index}
                        className={`flex items-center justify-between ${activeCategoryIndex === index ? "bg-white" : ""
                            }`}
                    >
                        <div className="flex items-center gap-x-3">
                            <img
                                className="w-14 h-14 object-cover rounded-full"
                                src={category.imageUrl}
                                alt={category.name}
                            />
                            <p className="font-medium">{category.name}</p>
                        </div>
                        <div className="flex items-center gap-x-3">
                            <IoSettingsOutline
                                size={25}
                                onClick={() => handleSettingsClick(index)}
                            />
                            {activeCategoryIndex === index && (
                                <div className="flex gap-x-2">
                                    <button className="text-blue-600">Edit</button>
                                    <button className="text-red-600">Delete</button>
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
            <div className="sticky bottom-0 bg-white p-3 md:p-4 flex gap-2 border-t border-gray-300">
                <Link
                    to="/add-new-category"
                    className="bg-primary text-white p-2 text-xs md:text-sm rounded font-normal hover:bg-red-600 transition w-1/2 text-center"
                >
                    Add Category
                </Link>
                <Link
                    to="/add-new-item"
                    className="bg-primary text-white p-2 text-xs md:text-sm rounded font-normal hover:bg-green-600 transition w-1/2 text-center"
                >
                    Add Menu Item
                </Link>
            </div>
        </div>
    );
}

export default MenuPage;
