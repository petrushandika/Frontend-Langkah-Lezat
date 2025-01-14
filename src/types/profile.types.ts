import { User } from "./user.types";
import { Location } from "./location.types";

export type Profile = {
  id: number;
  image: string | null;
  userId: number;
  user: User;
  location: Location[];
};
