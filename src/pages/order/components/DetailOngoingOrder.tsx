import { IoMdCall } from "react-icons/io";
import { IoMail } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { useParams } from "react-router";
import { OrderDetail } from "@/types/orderDetail.types";
import { useEffect, useState } from "react";
import API from "@/networks/api";

function DetailNewOrder() {
    const { id } = useParams<{ id: string }>();
    const [orderDetail, setOrderDetail] = useState<OrderDetail | null>(null);

    useEffect(() => {
        if (id) {
            async function GET_DETAIL_ORDER() {
                const detailOrder = await API.ORDER_DETAIL.GET_ONE_BY_ID(Number(id));
                console.log("Fetched Order Detail:", detailOrder);

                if (detailOrder && detailOrder.order) {
                    setOrderDetail(detailOrder);
                }
            }

            GET_DETAIL_ORDER();
        }
    }, [id]);

    if (!orderDetail) {
        return <div>Loading...</div>;
    }

    const { order, quantity, price, menu } = orderDetail;

    // Calculate total based on quantity and price
    const total = price * quantity;

    return (
        <div className="w-full flex flex-col border border-gray-300 overflow-hidden pt-[4.25rem] relative justify-between h-screen">
            <div>
                <div className="flex justify-between bg-quaternary w-full p-4 md:p-6">
                    <div className="flex flex-col text-xs md:text-sm">
                        <p className="font-semibold text-gray-800">{order.user.username}</p>
                        <p className="text-gray-600">
                            Today at <span className="font-medium">12:33 AM</span>
                        </p>
                    </div>
                    <div>
                        <p className="text-gray-800">
                            Order ID: <span className="font-medium">{order.id}</span>
                        </p>
                    </div>
                </div>

                <div className="px-3 py-2">
                    <div className="flex justify-between items-center flex-wrap">
                        <div className="flex items-center gap-x-3 flex-grow max-w-[70%]">
                            <IoMdCall size={20} className="flex-shrink-0 text-primary" />
                            <p className="break-words">{order.user.phone}</p>
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
                            <p className="break-words">{order.user.email}</p>
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
                            <p className="break-words">{order.user.location?.address}</p>
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
                            <tr>
                                <td className="p-2">{menu.name}</td>
                                <td className="p-2 text-center">Qty: {quantity}</td>
                                <td className="p-2 text-right">Rp. {price.toLocaleString() || "0"}</td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="mt-4 text-right font-bold text-gray-800 px-3">
                        Total: Rp. {total.toLocaleString()}
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
