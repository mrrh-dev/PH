/*
  Problem: Filtered Cart Total (Chaining filter -> map -> reduce)
  getExpensiveItemsTotal(cart, minPrice) — from the cart, keep only
  items priced at or above minPrice, then calculate the total cost
  (price * qty) of just those items — all in ONE chained expression.

  Input:
    cart = [
      { name: "Pen", price: 20, qty: 3 },
      { name: "Headphone", price: 800, qty: 1 },
      { name: "Notebook", price: 50, qty: 2 },
      { name: "Watch", price: 1500, qty: 1 },
    ]
    minPrice = 500

  Output:
    2300   (800*1 + 1500*1)

  Build it live, one step at a time (uncomment one block, log, then move on):
    1. filter alone        -> just the expensive items
    2. filter + map        -> price*qty for each expensive item
    3. filter + map + reduce -> single total number
*/

/* let practice = (cart, minprice) => {
  let totalcost = cart
    .filter((eleme) => eleme.price >= minprice)
    .map((filteredelement) => filteredelement.price * filteredelement.qty)
    .reduce((acc, productcost) => (acc += productcost), 0);
  return totalcost;
};
let cart = [
  { name: 'Pen', price: 20, qty: 3 },
  { name: 'Headphone', price: 800, qty: 1 },
  { name: 'Notebook', price: 50, qty: 2 },
  { name: 'Watch', price: 1500, qty: 1 },
];
console.log(practice(cart, 500)); */

// 1
/* let practice = ()=>{

}
console.log(practice()) */
/* let practice = (arr) => {
  let newarr = arr.map((element) => {
    return `$${element.toString()}`;
  });
  return newarr;
};
console.log(practice([100, 250, 75])); */

// 2
/* let practice = (arr) => {
  let newarray = arr.filter((elem) => elem.stock > 0);
  return newarray;
};
console.log(
  practice([
    { name: 'Pen', stock: 5 },
    { name: 'Bag', stock: 0 },
    { name: 'Notebook', stock: 2 },
  ]),
); */

// 3
let practice = (arr, nam) => {
  let matchproduct = arr.find((elem) => elem.name === nam);
  if (typeof matchproduct === 'object') return matchproduct;
  else return 'undefined';
};
console.log(
  practice(
    [
      { name: 'Pen', price: 10 },
      { name: 'Bag', price: 500 },
    ],
    (name = 'Bag'),
  ),
);
