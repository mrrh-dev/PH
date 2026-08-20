interface Product {
  name: string;
  price: number;
  category: string;
}
function findProducts(products: Product[], category: string): string[] {
  // write your code here
  let filteredproduct = products.filter((item) => {
    if (item.category === category) return item.name;
  });
  return filteredproduct.map((item) => item.name);
}
const products: Product[] = [
  { name: 'iPhone 15', price: 90000, category: 'phone' },
  { name: 'Galaxy S24', price: 85000, category: 'phone' },
  { name: 'MacBook Air', price: 120000, category: 'laptop' },
  { name: 'Dell XPS', price: 110000, category: 'laptop' },
];

console.log(findProducts(products, 'phone'));
console.log(findProducts(products, 'laptop'));
console.log(findProducts(products, 'battery'));
console.log(findProducts(products, 'ipad'));
