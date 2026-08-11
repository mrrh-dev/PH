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
/* let practice = (arr, nam) => {
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
); */

// 4
/* let practice = (arr) => {
  return arr.reduce((acc, elem) => {
    return (acc += elem.price * elem.stock);
  }, 0);
};
console.log(
  practice([
    { price: 50, stock: 4 },
    { price: 20, stock: 10 },
  ]),
);
 */

// 5
/* let practice = (arr, cat) => {
  let totalprice = arr
    .filter((elem) => elem.category === cat)
    .map((elem) => (elem.price = elem.price - elem.price * 0.1))
    .reduce((acc, elem) => (acc += elem), 0);
  return totalprice;
};
console.log(
  practice(
    [
      { name: 'Pen', category: 'stationery', price: 100 },
      { name: 'Bag', category: 'accessory', price: 500 },
      { name: 'Notebook', category: 'stationery', price: 60 },
    ],
    (category = 'stationery'),
  ),
); */

// 6
/* let practice = () => {
  let id = 1;
  return function inn() {
    return id++;
  };
};
let nextid = practice();
console.log(nextid());
console.log(nextid());
console.log(nextid()); */

// 7
/* let practice = (arr) => {
  let [...arr1] = arr;
  return arr1.sort((a, b) => a.price - b.price);
  //return arr.slice().sort((a, b) => a.price - b.price);
};
console.log(
  practice([
    { name: 'Bag', price: 500 },
    { name: 'Pen', price: 10 },
    { name: 'Notebook', price: 60 },
  ]),
); */

// 8
/* let practice = (arr, bonus) => {
  return arr.map((object) => {
    return { ...object, points: object.points + bonus };
  });
};
console.log(practice([{ name: 'Rafi', points: 20 }], (bonus = 5)));
 */

// 9
/* let practice = (input, target) => {
  if (input === target) return true;
  else return false;
};
console.log(practice(18, 18)); */

// 10
let practice = (arr) => {
  let sumarray = arr.reduce((acc, elem) => {
    /* acc[elem.product] = (acc[elem.product] || 0) + elem.unitsSold;
    return acc; */
    /* return Object.keys(sumarray).reduce((topproduct, nextproduct) => {
    return sumarray[topproduct] > sumarray[nextproduct]
      ? topproduct
      : nextproduct;
  }); */

    let product = elem.product;
    let units = elem.unitsSold;
    //if (!Object.hasOwn(acc, product))
    if (acc[product] === undefined) acc[product] = 0;
    acc[product] += units;
    return acc;
  }, {});
  console.log(sumarray);

  let key = Object.keys(sumarray);
  return key.reduce((top, next) =>
    sumarray[top] > sumarray[next] ? top : next,
  );
};
console.log(
  practice([
    { product: 'Pen', unitsSold: 30 },
    { product: 'Bag', unitsSold: 12 },
    { product: 'Pen', unitsSold: 25 },
  ]),
);
