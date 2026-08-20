interface Product {
  name: string;
  price: number;
}
function calculateCartTotal(products: Product[]): number {
  // write your code here
  return products.reduce((acc, item) => {
    return (acc += item.price);
  }, 0);
  //return total;
}
console.log(
  calculateCartTotal([
    { name: 'Book', price: 500 },
    { name: 'Pen', price: 50 },
    { name: 'Bag', price: 1200 },
  ]),
);
