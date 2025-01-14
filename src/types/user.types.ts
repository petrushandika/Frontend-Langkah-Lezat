import { Role } from "./role.types";
import { Profile } from "./profile.types";
import { Location } from "./location.types";

export type User = {
  id: number;
  username: string;
  email: string;
  phone: string | null;
  role: Role;
  profile: Profile | null;
  location: Location | null;
  createdAt: string;
  updatedAt: string;
};
