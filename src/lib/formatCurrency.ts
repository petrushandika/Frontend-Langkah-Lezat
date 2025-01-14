function formatCurrency(amount: number): string {
  if (typeof amount !== "number") {
    throw new Error("Input harus berupa angka");
  }

  return amount.toLocaleString("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });
}

export default formatCurrency;
