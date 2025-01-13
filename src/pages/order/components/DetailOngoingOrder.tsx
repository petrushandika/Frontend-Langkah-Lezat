import { IoMdCall } from "react-icons/io";
import { IoMail } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";

function DetailNewOrder() {
    const orderItems = [
        { name: "Nasi Goreng", quantity: 1, price: 25000 },
        { name: "Babi Panggang", quantity: 1, price: 75000 },
    ];

    const totalPrice = orderItems.reduce((total, item) => total + item.price * item.quantity, 0);

    return (
        <div className="w-full flex flex-col border border-gray-300 overflow-hidden pt-[4.25rem] relative justify-between h-screen">
            <div>
                <div className="flex justify-between bg-quaternary w-full p-4 md:p-6">
                    <div className="flex flex-col text-xs md:text-sm">
                        <p className="font-semibold text-gray-800">Angel James</p>
                        <p className="text-gray-600">
                            Today at <span className="font-medium">12:33 AM</span>
                        </p>
                    </div>
                    <div>
                        <p className="text-gray-800">
                            Order ID: <span className="font-medium">348</span>
                        </p>
                    </div>
                </div>

                <div className="px-3 py-2">
                    <div className="flex justify-between items-center flex-wrap">
                        <div className="flex items-center gap-x-3 flex-grow max-w-[70%]">
                            <IoMdCall size={20} className="flex-shrink-0 text-primary" />
                            <p className="break-words">081573018140</p>
                        </div>
                        <button className="text-primary border-2 border-primary p-1 text-xs md:text-sm rounded font-normal hover:bg-primary hover:text-white transition min-w-[80px]">
                            Call
                        </button>
                    </div>
                </div>
                <hr />

                <div className="px-3 py-2">
                    <div className="flex justify-between items-center flex-wrap">
                        <div className="flex items-center gap-x-3 flex-grow max-w-[70%]">
                            <IoMail size={20} className="flex-shrink-0 text-primary" />
                            <p className="break-words">johndoe@gmail.com</p>
                        </div>
                        <button className="text-primary border-2 border-primary p-1 text-xs md:text-sm rounded font-normal hover:bg-primary hover:text-white transition min-w-[80px]">
                            Email
                        </button>
                    </div>
                </div>
                <hr />

                <div className="px-3 py-2">
                    <div className="flex justify-between items-center flex-wrap">
                        <div className="flex items-center gap-x-3 flex-grow max-w-[70%]">
                            <FaLocationDot size={20} className="flex-shrink-0 text-primary" />
                            <p className="break-words">3322 Sweetwater Spring Blvd, Spring Valley, CA 91977, USA</p>
                        </div>
                        <button className="text-primary border-2 border-primary p-1 text-xs md:text-sm rounded font-normal hover:bg-primary hover:text-white transition min-w-[80px]">
                            Navigate
                        </button>
                    </div>
                </div>
                <hr />

                <div className="px-3 py-2">
                    <p className="text-gray-500 text-xs md:text-sm">
                        Message: Hi, Please pack green sauce in my order and please tell your
                        delivery boy that he has to come to the 2nd floor because I'm not at home.
                    </p>
                </div>
                <hr />

                <div className="p-3 md:p-6">
                    <table className="w-full text-left text-sm">
                        <thead>
                            <tr>
                                <th className="p-2">Items</th>
                                <th className="p-2 text-center">Quantity</th>
                                <th className="p-2 text-right">Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            {orderItems.map((item, index) => (
                                <tr key={index}>
                                    <td className="p-2">{item.name}</td>
                                    <td className="p-2 text-center">Qty: {item.quantity}</td>
                                    <td className="p-2 text-right">Rp. {item.price.toLocaleString()}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <div className="mt-4 text-right font-bold text-gray-800">
                        Total: Rp. {totalPrice.toLocaleString()}
                    </div>
                </div>
            </div>

            <div className="sticky bottom-0 bg-white p-3 md:p-4 flex gap-2 border-t border-gray-300">
                <div className="flex gap-2 items-center text-xs md:text-sm w-2/3">
                    <p className="text-gray-800">Order Status: </p>
                    <select className="text-xs md:text-sm border border-gray-300 rounded p-1">
                        <option value="">Order Dispatched</option>
                        <option value="">Order Preparing</option>
                        <option value="">On The Way</option>
                    </select>
                </div>
                <button className="bg-red-500 text-white p-1 text-xs md:text-sm rounded font-normal hover:bg-red-600 transition w-1/3">
                    Cancel Order
                </button>
            </div>
        </div>
    );
}

export default DetailNewOrder;
