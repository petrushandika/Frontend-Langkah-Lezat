export type CreateLocationDto = {
  name: string;
  address: string;
  postalCode: number;
  cityDistrict: string;
  userId?: number;
  profileId?: number;
};

export type UpdateLocationDto = {
  name?: string;
  address?: string;
  postalCode?: number;
  cityDistrict?: string;
  userId?: number;
  profileId?: number;
};
