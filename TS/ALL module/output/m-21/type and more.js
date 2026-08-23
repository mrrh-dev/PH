// premitive type
/* let gpa: number = 5.0;

console.log(gpa);

let name: string = 'hasan nayeem';
console.log(name);

let isvalid: boolean = true;
console.log(isvalid);
gpa = 4.5;
console.log(gpa);
//gpa = 'hasan' // will through error
let box: null = null;
console.log(box);
let box1: undefined = undefined;
console.log(box1); */
// non-primitive
// array
/* let numbers: number[] = [2, 4, 6, 8, 9];
console.log(numbers);
numbers.push(99);
console.log(numbers);
// numbers.push('hr'); // through error
let friend: boolean[] = [true, false, true];
console.log(friend);

let friend1: string[] = ['hasan', 'nayeem'];
console.log(friend1); */
// object
/* let user: {
  name: string;
  age: number;
  ispassed: boolean;
} = {
  name: 'Rejwan',
  age: 24,
  ispassed: true,
};
console.log(user);
user.age = 25;
console.log(user); */
// tuple
/* let location: [String, number] = ['uttara', 10];
console.log(location);
let location1: [number, number] = [45, 10];
console.log(location); */
// optional property
/* let user1: {
  name: String;
  age: Number;
  ispassed?: boolean;
} = {
  name: 'Rejwan',
  age: 24,
  //ispassed: true,
};
console.log(user1); */
// literal
/* let user2: {
  name: 'Rejwan';
  age: number;
  ispassed?: boolean;
} = {
  name: 'Rejwan',
  age: 24,
  //ispassed: true,
};
user2.name = 'Rejwan'; //must have same
//user2.name='hasan';//not working
console.log(user2); */
// function
// for return value
/* function add(a: number, b: number): number {
  return a + b;
}
let ans = add(10, 20);
console.log(ans);
// array return
 function add(a: number, b: number): number[] {
  let total =a+b;
 return [total];
}
let ans = add(10, 20);
console.log(ans);
// object return
function add(a: number, b: number): {} {
  let total =a+b;
 return {total:total};
}
let ans = add(10, 20);
console.log(ans);
*/
//for no return value
/* function add1(a: number, b: number): void {
  console.log(a + b);
}
add1(10, 20); */
//console.log(ans1);
// arrow function
/* let ansarrow = (person1: string, person2: string): string => {
  if (person1.length > person2.length) return person1;
  else return person2;
};
console.log(ansarrow('hasan', 'rejwan')); */
// conditionals
/* let namemy: string = 'hasan nayeem';
if (namemy === 'hasan nayeem') console.log('true');
 */
// loop
/* let letter: string[] = ['a', 'b', 'c', 'd'];
for (let k of letter) {
  console.log(k.toUpperCase());
} */
// map
/* let numbers1: number[] = [2, 4, 6, 8, 9];
let newarray = numbers1.map((elem) => {
  return elem * 2;
});
console.log(newarray); */
// filter
/* let numbers2: number[] = [2, 4, 6, 8, 9];
let newarray1 = numbers2.filter((elem) => {
  if (elem % 2 === 0) return elem;
});
console.log(newarray1); */
// find
/* let numbers3: number[] = [2, 4, 6, 8, 9];
let newarray2 = numbers3.find((elem) => {
  if (elem % 2 === 0) return elem;
});
console.log(newarray2); */
// destructuring
let numbersd = [2, 4, 6, 8, 9];
let [first, second] = numbersd;
first = 0;
second = 10;
console.log(first, second);
let userd = {
    name: 'Rejwan',
    age: 24,
    ispassed: true,
};
let { name, age } = userd;
//let {name:username,age:userage} =user // key rename
name = 'ahmed';
age = 26;
console.log(userd);
// spred operator
let numbersds = [2, 4, 6, 8, 9];
let numbersdsp = [2, 4, 6, 8, 9];
let newcopyarray = [...numbersds, ...numbersdsp];
console.log(newcopyarray);
let userdob = {
    name: 'Rejwan',
    age: 24,
    ispassed: true,
};
let userdobj = {
    username: 'hasan',
    userage: 26,
    ispasseduser: false,
};
let newcopyobj = { ...userdob, ...userdobj };
console.log(newcopyobj);
// rest operator
let numbersdr = [2, 4, 6, 8, 9];
let [firstelem, ...rest] = numbersdr;
console.log(firstelem, rest);
let userdobr = {
    name: 'iphone',
    type: 'smartphone',
    price: 10000,
    color: 'black',
    storage: '128GB',
};
let { name: devicename, ...deviceinfo } = userdobr;
console.log(devicename, deviceinfo);
//any (Special Type)
let value = 5;
value = 'Hello';
value = true;
value = [];
console.log(value);
/* any -> disables type checking.

Use it only when necessary. */
//unknown (Safer Alternative)
let valueu = 'Hello';
if (typeof valueu === 'string') {
    console.log(valueu.toUpperCase());
}
/* Unlike any, you must check the type before
using the value. */
//never
/* Represents a function that never
successfully returns. */
/* function throwError(message: string): never {
  throw new Error(message);
}
console.log(throwError('js')); */
// union
/* A union type means:A variable can hold
one of several specified types.
The | (pipe) symbol means OR. */
/* Syntax:
type1 | type2 | type3

Read it as:
"This value can be type1 or type2 or type3." */
function search(value) {
    console.log(value);
}
search(10); // ✅
search('John'); // ✅
//search(true);    // ❌
function some(value) {
    console.log(value);
}
some(10);
const hasan = {
    name: 'hasan',
    age: 66,
    id: 77,
};
export {};
/* not many thing have to know in ts
following topics are enough ->
1.how to define type of varibale
2.array type
3.type define in function
4.type define in function(most of the case don't needed)
5.union (special type) will beneficiary in many cases as well as null*/
