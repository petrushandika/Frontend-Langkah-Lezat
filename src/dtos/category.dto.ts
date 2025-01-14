export type CreateCategoryDto = {
  name: string;
  image?: string;
  type?: string;
};

export type UpdateCategoryDto = {
  name?: string;
  image?: string;
  type?: string;
};
