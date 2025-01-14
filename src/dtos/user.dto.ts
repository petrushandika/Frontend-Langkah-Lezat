export type CreateDto = {
  id: number;
  name: string;
  phone?: string;
  email: string;
  role: CreateRoleDto;
  profile?: CreateProfileDto;
  location?: Location;
  createdAt: string;
  updatedAt: string;
};

export type CreateRoleDto = {
  id: number;
  name: "ADMIN" | "CASHIER" | "CUSTOMER";
};

export type CreateProfileDto = {
  id: number;
  image?: string;
};

export type CreateLocationDto = {
  id: number;
  name: string;
  address: string;
  postalCode: number;
  cityDistrict: string;
};
