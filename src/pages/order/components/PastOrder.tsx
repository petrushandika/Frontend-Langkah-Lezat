import { Order } from "@/types/order.types";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import API from "@/networks/api";

function PastOrder() {
    const [orderData, setOrderData] = useState<Order[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        async function fetchOrderData() {
            try {
                const response = await API.ORDER.GET_ALL();
                console.log("Fetched order data:", response);
                setOrderData(response);
                setLoading(false);
            } catch (error) {
                console.error("Failed to fetch order data:", error);
                setLoading(false);
            }
        }

        fetchOrderData();
    }, []);

    const statusMap: Record<Order['status'], string> = {
        Order_Dispatched: "Order Dispatched",
        Order_Preparing: "Order Preparing",
        On_The_Way: "On The Way",
        Order_Delivered: "Order Delivered",
        Order_Cancelled: "Order Cancelled",
        Order_Completed: "Order Completed",
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="w-full flex flex-col border border-gray-300 rounded-lg overflow-hidden">
            {orderData.map((order) => (
                <div key={order.id} className="flex flex-col">
                    <div className="flex justify-between bg-quaternary w-full p-4 md:p-6">
                        <div className="flex flex-col text-sm md:text-base">
                            <p className="font-semibold text-gray-800 text-xs md:text-sm">
                                {order.user.username}
                            </p>
                            <p className="text-gray-600 text-xs md:text-sm">
                                {new Date(order.createdAt).toLocaleString()}
                            </p>
                        </div>
                        <div className="flex flex-col text-sm md:text-base text-right">
                            <p className="text-gray-800 text-xs md:text-sm">
                                Order ID: <span className="font-medium">{order.id}</span>
                            </p>
                            <p className="text-gray-800 text-xs md:text-sm">
                                Total: <span className="font-bold text-primary">
                                    Rp.{" "}
                                    {order.orderDetail.reduce(
                                        (total, item) => total + item.price * item.quantity,
                                        0
                                    )}
                                </span>
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col gap-y-2 p-4 md:p-6">
                        {order.orderDetail.map((detail) => (
                            <div key={detail.id} className="flex justify-between text-xs md:text-sm items-center">
                                <p className="flex-1 text-left">{detail.menu.name}</p>
                                <p className="flex justify-center items-center w-20">Qty: {detail.quantity}</p>
                                <p className="font-medium text-gray-700">Rp. {detail.price}</p>
                            </div>
                        ))}
                    </div>

                    <hr />

                    <div className="flex justify-between p-4 md:p-6">
                        <div className="flex gap-2 items-center text-xs md:text-sm">
                            <p className="text-gray-800">Order Status: </p>
                            <p className={order.status === "Order_Completed" ? "text-green-500" : "text-red-500"}>
                                {statusMap[order.status] || "Unknown Status"}
                            </p>
                        </div>
                        <Link
                            // to={
                            //     order.status === "Order_Completed"
                            //         ? `/order/completed/${order.id}`
                            //         : order.status === "Order_Cancelled"
                            //             ? `/order/cancelled/${order.id}`
                            //             : "#"
                            // }
                            to={`/order/completed/${order.id}`}
                            className="text-primary border-2 border-primary p-1 text-xs md:text-base rounded font-normal transition w-1/4 text-center"
                        >
                            View Details
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default PastOrder;
