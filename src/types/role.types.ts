import { User } from "./user.types";

export type Role = {
  id: number;
  name: "ADMIN" | "CASHIER" | "CUSTOMER";
  users: User[];
};
