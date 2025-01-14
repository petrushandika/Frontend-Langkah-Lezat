import { Order } from "./order.types";
import { Menu } from "./menu.types";

export type OrderDetail = {
  id: number;
  price: number; // subtotal (quantity x menu.price)
  quantity: number;
  orderId: number;
  order: Order;
  menuId: number;
  menu: Menu;
};
