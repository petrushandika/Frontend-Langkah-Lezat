export type CreateOrderDetailDto = {
  price: number;
  quantity: number;
  orderId: number;
  menuId: number;
};

export type UpdateOrderDetailDto = {
  price?: number;
  quantity?: number;
  orderId?: number;
  menuId?: number;
};
