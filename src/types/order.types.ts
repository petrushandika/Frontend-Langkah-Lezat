import { User } from "./user.types";
import { OrderDetail } from "./orderDetail.types";

export type Order = {
  id: number;
  status:
    | "Order_Dispatched"
    | "Order_Preparing"
    | "On_The_Way"
    | "Order_Delivered";
  userId: number;
  user: User;
  orderDetail: OrderDetail[];
  createdAt: string;
  updatedAt: string;
};
