function getStockStatus(stock: number): string {
  // write your code here
  if (stock === 0) return 'Out of stock';
  else if (stock >= 1 && stock <= 5) return 'Almost sold out';
  else if (stock >= 6 && stock <= 20) return 'Available';
  else return 'In stock';
}
console.log(getStockStatus(0));
console.log(getStockStatus(3));
console.log(getStockStatus(12));
console.log(getStockStatus(50));
console.log(getStockStatus(5));
console.log(getStockStatus(6));
console.log(getStockStatus(20));
console.log(getStockStatus(21));
