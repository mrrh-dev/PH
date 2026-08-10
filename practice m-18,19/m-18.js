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
