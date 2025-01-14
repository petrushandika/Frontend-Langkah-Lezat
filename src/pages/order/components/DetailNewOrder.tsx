import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "@/networks/api";
import { OrderDetail } from "@/types/orderDetail.types";
import { IoMdCall } from "react-icons/io";
import { IoMail } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";

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

    const total = price * quantity;

    return (
        <div className="w-full flex flex-col border border-gray-300 overflow-hidden relative h-screen pt-[4.25rem]">
            <div className="flex flex-col h-full">
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

                <div className="p-3 md:p-6 flex-grow">
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
                    <div className="mt-4 px-3 text-right font-bold text-gray-800">
                        Total: Rp. {total.toLocaleString()}
                    </div>
                </div>
            </div>

            <div className="sticky bottom-0 bg-white p-3 md:p-4 flex gap-2 border-t border-gray-300">
                <button className="bg-red-500 text-white p-2 text-xs md:text-sm rounded font-normal hover:bg-red-600 transition w-1/2">
                    Cancel Order
                </button>
                <button className="bg-green-500 text-white p-2 text-xs md:text-sm rounded font-normal hover:bg-green-600 transition w-1/2">
                    Accept Order
                </button>
            </div>
        </div>
    );
}

export default DetailNewOrder;
