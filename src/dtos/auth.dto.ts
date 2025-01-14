export type loginDto = {
  email: string;
  password: string;
};

export type registerDto = {
  role: "ADMIN" | "CASHIER" | "CUSTOMER";
  username: string;
  email: string;
  password: string;
};
