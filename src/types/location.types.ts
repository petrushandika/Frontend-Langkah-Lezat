import { User } from "./user.types";
import { Profile } from "./profile.types";

export type Location = {
  id: number;
  name: string;
  address: string;
  postalCode: number;
  cityDistrict: string;
  userId: number | null;
  profileId: number | null;
  user?: User;
  profile?: Profile;
};
