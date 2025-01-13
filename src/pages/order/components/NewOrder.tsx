import { Link } from "react-router-dom";

function NewOrder() {
    return (
        <div className="w-full flex flex-col justify-between h-screen">
            <div className="border border-gray-300 rounded-lg overflow-hidden">
                <div>
                    <div className="flex justify-between bg-quaternary w-full p-4 md:p-6">
                        <div className="flex flex-col text-xs md:text-sm">
                            <p className="font-semibold text-gray-800">Angel James</p>
                            <p className="text-gray-600">
                                Today at <span className="font-medium">12:33 AM</span>
                            </p>
                        </div>
                        <div className="flex flex-col text-xs md:text-sm text-right">
                            <p className="text-gray-800">
                                Order ID: <span className="font-medium">348</span>
                            </p>
                            <p className="text-gray-800">
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

                    <div className="p-4 md:p-6">
                        <p className="text-gray-500 text-xs md:text-sm mb-4">
                            Message: Hi, Please pack green sauce in my order and please tell your
                            delivery boy that he has to come to the 2nd floor because I'm not at home.
                        </p>
                        <div className="flex flex-wrap gap-2 justify-between md:flex-nowrap">
                            <div className="flex gap-2 w-full md:w-full justify-between">
                                <button className="text-primary border-2 border-primary p-1 text-xs md:text-sm rounded font-normal hover:bg-primary hover:text-white transition w-full md:w-1/4">
                                    Call Customer
                                </button>
                                <Link
                                    to="/detail-new-order"
                                    className="text-primary border-2 border-primary p-1 text-xs md:text-sm rounded font-normal hover:bg-primary hover:text-white transition w-full md:w-1/4 text-center"
                                >
                                    View Details
                                </Link>
                            </div>
                        </div>
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

export default NewOrder;
