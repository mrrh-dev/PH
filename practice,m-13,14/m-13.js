// 2A

/* let result = (value) => {
  if (value >= 30) return 'hot';
  else if (value <= 15) return 'cold';
  else return 'normal';
};
console.log(result(35));
console.log(result(15));
console.log(result(25)); */

// 2B
/* let result = (num) => {
  let str = num.toString();
  return str.split('').reverse().join('');
};
console.log(result(1234));
console.log(result(7)); */

// 3A
/* let result = (value) => {
  let str = value.toString();
  let ans = 1;
  for (let i = 0; i < str.length; i++) {
    ans *= str[i];
  }
  return ans;
};
console.log(result(352));
console.log(result(157));
console.log(result(123));
console.log(result(4040)); */

// 3B

/* let result = (value) => {
  let arr = [];
  for (let i = 1; i <= 10; i++) {
    if (i % 2 !== 0) arr.push(i);
  }
  return arr;
};
console.log(result(10)); */

// 4A
/* let result = (value) => {
  let cnt = 0;
  for (let i = 0; i < value.length; i++) {
    if (
      value[i] === 'a' ||
      value[i] === 'e' ||
      value[i] === 'i' ||
      value[i] === 'o' ||
      value[i] === 'u'
    )
      cnt++;
  }
  return cnt;
};
console.log(result('javascript')); */

// 4B
/* let result = (value) => {
  return value.slice(1, value.length - 1);
};
console.log(result('javascript')); */

// 5A
/* let result = (value) => {
  let ans;
  let i = 0;
  let j = value.length - 1;
  while (i < j) {
    //ans = false;
    if (value[i] === value[j]) {
      ans = true;
    } else {
      ans = false;
      break;
    }
    i++;
    j--;
  }
  return ans;
};
console.log(result('javascript'));
console.log(result('level'));
console.log(result('hello'));
console.log(result('lovel')); */

// 5B
/* let result = (value) => {
  let arr = value.split(' ');
  //let ans;
  //console.log(arr);
  let minlen = arr[0].length;
  let ansind;
  for (let i = 0; i < arr.length; i++) {
    //console.log(minlen);
    if (arr[i].length < minlen) {
      minlen = arr[i].length;
      ansind = i;
    }
  }
  return arr[ansind];
};
console.log(result('javascript is a fun language'));
 */

// 6A

/* let result = (value) => {
  value.sort((a, b) => a - b);
  return value[1];
};
console.log(result([10, 5, 8, 20, 15])); */

// 6B
/* let result = (value) => {
  let cnt = 0;
  for (let i = 0; i < value.length; i++) {
    if (value[i] % 3 === 0) cnt++;
  }
  return cnt;
};
console.log(result([10, 12, 8, 9, 15])); */

// 7A
/* let result = (value) => {
  let sum = 0;
  for (let i = 0; i < value.length; i++) {
    sum += value[i];
  }
  return sum / value.length;
};
console.log(result([10, 20, 30])); */

// 7B
/* let result = (value) => {
  let ans = [];
  for (let i = 0; i < value.length; i++) {
    if (value[i] % 2 === 0) ans.push(value[i]);
  }
  return ans;
};
console.log(result([3, -5, 8, -1, 0])); */

// 8A
/* let result = (value) => {
  return Object.keys(value);
};
console.log(
  result({
    nam: 'mayal',
    profession: 'developer',
    hobby: 'traveling',
    age: 25,
  }),
); */

// 8B
/* let result = (value, hb, defaultValue) => {
  return hb in value ? value[hb] : defaultValue;
};
let person = {
  nam: 'mayal',
  profession: 'developer',
  hobby: 'traveling',
  age: 25,
};
console.log(result(person, 'grade', 'N/A'));
 */

// 9

/* let getWordsLongerThan = (value, ln) => {
  let arr = [];
  for (let i = 0; i < value.length; i++) {
    if (value[i].length > ln) arr.push(value[i]);
  }
  return arr;
};

let outputarray = getWordsLongerThan(['fairy', 'zindagi', 'gulzar', 'hai'], 3);
console.log(outputarray);

let countArray = (value) => {
  return value.length;
};
console.log(countArray(outputarray)); */

// 10A

/* let result = (value) => {
  let v1 = Math.sqrt(value);
  if (Number.isInteger(v1)) return true;
  else return false;
};
let ans = result(25);
console.log(ans);
let ans1 = result(20);
console.log(ans1); */

// 10B
/* let result = (value) => {
  return value.split(' ').reverse().join(' ');
};
let ans = result('hello world');
console.log(ans); */

// 10C
/* let result = (value) => {
  let ans = [];
  for (let i = 0; i < value.length; i++) {
    let have = false;
    for (let j = 0; j < ans.length; j++) {
      if (value[i] === ans[j]) {
        have = true;
        break;
      }
    }
    if (!have) ans.push(value[i]);
  }
  return ans;
};
let ans = result([1, 2, 2, 3, 4, 4, 5]);
console.log(ans); */

// 10D

let result = (value) => {
  let obj = {};
  for (let i in value) {
    obj[value[i]] = i;
  }
  return obj;
};
let person = {
  nam: 'mayal',
  profession: 'developer',
  hobby: 'traveling',
  age: 25,
};
let ans = result(person);
console.log(ans);
