/* let obj = { user: { name: 'Rafi', age: 22 } };
let {
  user: { name: username, age = 18 }, // default value set while destructuring
} = obj;
console.log(username, age); */

let arr1 = [10, 20, 30, 40, 50, 10, 30];
//let arr = Array.from(new Set(arr1));
let arr = [...new Set(arr1)];
console.log(arr);

const getGrade = (mark) => {
  // if (typeof mark != "number") {
  //   return "Invalid";
  // }

  // if (mark >= 90) {
  //   return "A+";
  // } else if (mark >= 80) {
  //   return "A";
  // } else if (mark >= 60) {
  //   return "B+";
  // } else {
  //   return "Fail";
  // }

  // Ternary operator -> condition ? true : false
  // Nested ternary operator
  return typeof mark != 'number'
    ? 'invalid'
    : mark >= 90
      ? 'A+'
      : mark >= 80
        ? 'A'
        : mark >= 60
          ? 'B+'
          : 'fail';
  //return typeof mark!= "number" ? "Invalid" : mark >= 90 ? "A+" : mark>=80 ? "A" : mark>= 60 ? "B+" : "Fail"
};
console.log(getGrade(95));
console.log(getGrade(82));
console.log(getGrade(45));
console.log(getGrade('Utsho'));
console.log(getGrade([]));

// swap using destructuring
let a = 5;
let b = 10;
[b, a] = [a, b];
console.log(a, b);

// optional chaining
let user1 = {
  name: 'Rafi',
  age: 22,

  'my-address': 'sylhet', // if hyphen - in property name then '' must use and if
  // wanted to access this property have to use bracket notation
  company: { name: 'softbd', adress: { lcation: 'uttara', street: '10/A' } },
};
// console.log(user1['my-address']);
let user2 = {
  name: 'afif',
  age: 24,

  'my-address': 'khulna', // if hyphen - in property name then '' must use and if
  // wanted to access this property have to use bracket notation
  //company: { name: 'softbd', adress: { lcation: 'uttara', street: '10/A' } },
};
//console.log(user1.company.name, user1.company.adress);
//console.log(user2.company); // give undefined
//console.log(user2.company.name, user2.company.adress); // try to access undefined,will through an error
// for solve this problem here comes optional chaining
console.log(user2?.company?.name, user2?.company?.adress); // will not through an error,rather will give undefined

// 1
/* let practice=() =>{

}
let ans = practice();
console.log(ans); */

/* let practice = (bill, taxrate = 0.05) => {
  return bill * taxrate + bill;
};
let ans = practice(1000, 0.1);
console.log(ans); */

// 2
/* let practice = (obj) => {
  return `${obj.name}\n${obj.title} at ${obj.company}`;
};
let ans = practice({
  name: 'Arif',
  title: 'Developer',
  company: 'Programming Hero',
});
console.log(ans); */

// 3
/* let practice = (array) => {
  return Math.min(...array);
};
let ans = practice([340, 120, 560, 90]);
console.log(ans); */

// 4
/* let practice = (a, b) => {
  return ([a, b] = [b, a]);
};
let ans = practice(5, 10);
console.log(ans);
 */

//5
/* let practice = (obj) => {
  let {
    job: { title, department },
  } = obj;

  return { title, department };
};
let ans = practice({
  name: 'Nadia',
  job: { title: 'PM', department: 'Product' },
});
console.log(ans); */

// 6
/* let practice = (employee, role) => {
  let newemployee = { ...employee };
  newemployee.title = role;
  return newemployee;
};
let orignialobject = { name: 'Rafi', title: 'Junior Dev' };
let ans = practice(orignialobject, 'Senior Dev');
console.log(ans);
console.log(orignialobject); */

// 7
/* let arr4 = [100, 250, 75];
let sum = 0;
for (let k of arr4) sum += k;

console.log(sum); */

// 8

/* let practice = (obj) => {
  return obj?.manager?.name;
};
let ans = practice({ name: 'Mim', manager: { name: 'Tanvir' } });
console.log(ans);
let ans1 = practice({ name: 'Rafi' });
console.log(ans1); */

// 9
/* let practice = (arr) => {
  let [first, ...rest] = arr;
  return { first: first, rest: rest };
};
let ans = practice([10, 20, 30, 40]);
console.log(ans); */

// 10

/* let practice = (arr, index, newValue) => {
  let newarray = [...arr];
  newarray[index] = newValue;
  return newarray;
};
let originalarray = [5, 10, 15];
let ans = practice(originalarray, 1, 99);
console.log(ans);
console.log(originalarray); */

const j = 4;
j = 5;
console.log(j);
