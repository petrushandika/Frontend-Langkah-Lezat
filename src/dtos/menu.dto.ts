export type CreateMenuDto = {
  name: string;
  price: number;
  offerPrice?: number;
  image?: string;
  categoryId: number;
};

export type UpdateMenuDto = {
  name?: string;
  price?: number;
  offerPrice?: number;
  image?: string;
  categoryId?: number;
};
