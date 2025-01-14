import { Menu } from "./menu.types";

export type Category = {
  id: number;
  name: string;
  image?: string;
  type?:
    | "Snacks"
    | "Chinese"
    | "North_Indian"
    | "Special_Meals"
    | "Main_Course"
    | "Bread"
    | "Dessert";
  menu: Menu[];
};
