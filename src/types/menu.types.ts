import { Category } from "./category.types";
import { OrderDetail } from "./orderDetail.types";

export type Menu = {
  id: number;
  name: string;
  price: number;
  offerPrice?: number;
  image?: string;
  categoryId: number;
  category: Category;
  orderDetails: OrderDetail[];
};
