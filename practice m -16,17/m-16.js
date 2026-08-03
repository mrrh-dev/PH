// Scope Detective
/* let calculateTotal = (items) => {
  if (items === 'let')
    return `can't redeclare,
  can reassign`;
  else if (items === 'const') return `can't redeclare,can't reassign`;
  else if (items === 'var') return `can redeclare,can reassign `;
  else return `Invalid`;
};

let ans = calculateTotal('int');
console.log(ans); */

// Movie Ticket Booking
/* let calculateTotal = (movie, seat = 1, price = 300) => {
  if (typeof movie !== 'string' || seat < 0 || price < 0) return 'invalid';
  let total = seat * price;
  return `${movie}: ${seat} seat(s),total ${total} taka`;
};

let ans = calculateTotal('hfd', 5, 450);
console.log(ans); */

//Receipt Generator
/* let calculateTotal = (name, array, nmbr) => {
  if (!Array.isArray(array) || array.length === 0) return 'invalid';
  return `receipt for ${name} \nItemas: ${array}\n total :${nmbr}`;
};

let ans = calculateTotal('Sadia', ['Milk'], 60);
console.log(ans); */

// BMI Calculator (Arrow Refactor)
/* let calculateTotal = (weight, height) => {
  if (weight === 0 || weight < 0 || height === 0 || height < 0)
    return 'invalid';
  let ans = weight / (height * height);
  return Number(ans.toFixed(2));
 ;
};

let ans = calculateTotal(70, 1.75);
console.log(ans); */

// Inventory Merge & Max Score
/* let calculateTotal = (weight, height = 'highest value') => {
  if (!Array.isArray(weight)) return 'invalid';
  //return [...weight, ...height];
  return Math.max(...weight);
};
//let ans = calculateTotal([3, 5], [9, 4]);
//let ans = calculateTotal([3, 7, 2, 100, 4]);
let ans = calculateTotal('3,7,2');
console.log(ans); */

// User Profile Extractor
/* let calculateTotal = (obj) => {
  //let { ...us } = obj.user;
  //let [...arr] = obj.hobbies; 
  let { user } = obj;
  let [...arr] = obj.hobbies;
  if (arr.length === 0) {
    let add = 'nothing yet';
    return `${us.name} ${us.age} likes ${add}`;
  }
  return `${user.name} ${user.age} likes ${arr[0]}`;
};
//let ans = calculateTotal({ user: { name: 'Rafi', age: 19 }, hobbies: [] });
let ans = calculateTotal({
  user: { name: 'Sadia', age: 22 },
  hobbies: ['reading', 'coding'],
});
console.log(ans); */

// Inventory Object Manager
/* let calculateTotal = (obj, ky) => {
    if(obj !== Object || obj)
  if (ky === 'keys') return Object.keys(obj);
  else if (ky === 'entries') return Object.entries(obj);
  else if (ky === 'values') return Object.values(obj);
  else if (ky === 'delete:c') {
    delete obj.c;
    return obj;
  } else return 'invalid';
};
//let ans = calculateTotal([3, 5], [9, 4]);
//let ans = calculateTotal([3, 7, 2, 100, 4]);
let ans = calculateTotal({ a: 1 }, 'shrink');
console.log(ans);  */

//Object Looper
let calculateTotal = (obj, loptype) => {
  if (loptype === 'forin') {
    let arr = [];
    for (let k in obj) {
      arr.push(`${k} : ${obj[k]}`);
    }
    return arr;
  }
  /*  if (loptype === 'forofentries') {
    let arr = [];
    for (let i of obj) {
      arr.push(Object.entries(obj));
    }
  } */
  if (loptype === 'entriesDestructure') {
    return ({ a, b } = obj);
  }
};
//let ans = calculateTotal([3, 5], [9, 4]);
//let ans = calculateTotal([3, 7, 2, 100, 4]);
let ans = calculateTotal({ fruit: 'Mango', price: 50 }, 'entriesDestructure');
console.log(ans);

// ES5 — refactor this fully to ES6:
/* let calculateTotal = (items) => {
  let total = 0;
  for (let i = 0; i < items.length; i++) {
    //total = total + items[i].price;
    total = items.reduce((acc, items) => acc + items[i].price, 0);
  }
  return `Total: ${total} Taka`;
};

let ans = calculateTotal([{ price: 100 }, { price: 250 }]);
console.log(ans); */
