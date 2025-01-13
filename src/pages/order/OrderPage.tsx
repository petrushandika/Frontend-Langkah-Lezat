import { useState } from "react";
import NewOrder from "./components/NewOrder";
import OngoingOrder from "./components/OngoingOrder";
import PastOrder from "./components/PastOrder";

function OrderPage() {
    const [activeTab, setActiveTab] = useState("new");

    return (
        <div className="">
            <div className="flex justify-between px-3 border-b-2 border-gray-300">
                <button
                    onClick={() => setActiveTab("new")}
                    className={`focus:outline-none pb-3 ${activeTab === "new"
                        ? "border-b-2 border-primary text-primary"
                        : "text-gray-600"
                        }`}
                >
                    New Orders
                </button>
                <button
                    onClick={() => setActiveTab("ongoing")}
                    className={`focus:outline-none pb-3 ${activeTab === "ongoing"
                        ? "border-b-2 border-primary text-primary"
                        : "text-gray-600"
                        }`}
                >
                    Ongoing Orders
                </button>
                <button
                    onClick={() => setActiveTab("past")}
                    className={`focus:outline-none pb-3 ${activeTab === "past"
                        ? "border-b-2 border-primary text-primary"
                        : "text-gray-600"
                        }`}
                >
                    Past Orders
                </button>
            </div>

            <div className="p-3">
                {activeTab === "new" && <NewOrder />}
                {activeTab === "ongoing" && <OngoingOrder />}
                {activeTab === "past" && <PastOrder />}
            </div>
        </div>
    );
}

export default OrderPage;
