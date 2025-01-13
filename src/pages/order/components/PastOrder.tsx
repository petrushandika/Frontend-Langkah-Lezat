import { Link } from "react-router-dom";

function PastOrder() {
    const orderStatus = "Delivered";

    return (
        <div className="w-full flex flex-col border border-gray-300 rounded-lg overflow-hidden">
            <div className="flex justify-between bg-quaternary w-full p-4 md:p-6">
                <div className="flex flex-col text-sm md:text-base">
                    <p className="font-semibold text-gray-800 text-xs md:text-sm">Angel James</p>
                    <p className="text-gray-600 text-xs md:text-sm">
                        Today at <span className="font-medium">12:33 AM</span>
                    </p>
                </div>
                <div className="flex flex-col text-sm md:text-base text-right">
                    <p className="text-gray-800 text-xs md:text-sm">
                        Order ID: <span className="font-medium">348</span>
                    </p>
                    <p className="text-gray-800 text-xs md:text-sm">
                        Total: <span className="font-bold text-primary">Rp. 100.000</span>
                    </p>
                </div>
            </div>

            <div className="flex flex-col gap-y-2 p-4 md:p-6">
                <div className="flex justify-between text-xs md:text-sm items-center">
                    <p className="flex-1 text-left">Nasi Goreng</p>
                    <p className="flex justify-center items-center w-20">Qty: 1</p>
                    <p className="font-medium text-gray-700">Rp. 25.000</p>
                </div>
                <div className="flex justify-between text-xs md:text-sm items-center">
                    <p className="flex-1 text-left">Babi Panggang</p>
                    <p className="flex justify-center items-center w-20">Qty: 1</p>
                    <p className="font-medium text-gray-700">Rp. 75.000</p>
                </div>
            </div>

            <hr />

            <div className="flex justify-between p-4 md:p-6">
                <div className="flex gap-2 items-center text-xs md:text-sm">
                    <p className="text-gray-800">Order Status: </p>
                    <p className={orderStatus === "Delivered" ? "text-green-500" : "text-red-500"}>
                        {orderStatus === "Delivered" ? "Order Delivered" : "Order Cancelled"}
                    </p>
                </div>
                <Link
                    to="/detail-past-order"
                    className="text-primary border-2 border-primary p-1 text-xs md:text-base rounded font-normal hover:bg-primary hover:text-white transition w-1/4 text-center"
                >
                    View Details
                </Link>
            </div>
        </div>
    );
}

export default PastOrder;
