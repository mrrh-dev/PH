// custom type  or type alias -> specially useful for object type define
type Name = 'iphone' | 'samsung' | 'realme';
type Phoneconfig = {
  name: Name;
  type: string;
  price: number;
  color: string;
  storage?: string;
};

let iphone: Phoneconfig = {
  name: 'iphone',
  type: 'smartphone',
  price: 10000,
  color: 'black',
  storage: '128GB',
};

let samsung: Phoneconfig = {
  name: 'samsung',
  type: 'smartphone',
  price: 20000,
  color: 'black',
  storage: '128GB',
};

let realme: Phoneconfig = {
  name: 'realme',
  type: 'smartphone',
  price: 20000,
  color: 'black',
  storage: '128GB',
};

// will not working
/* let readme: phoneconfig = {
  name: 'readme',
  type: 'smartphone',
  price: 20000,
  color: 'black',
  storage: '128GB',
}; */

// array of object
type product = {
  name: Name;
  type: string;
  price: number;
  color: string;
  storage?: string;
};
let products: product[] = [
  {
    name: 'realme',
    type: 'smartphone',
    price: 20000,
    color: 'black',
    storage: '128GB',
  },
  {
    name: 'samsung',
    type: 'smartphone',
    price: 20000,
    color: 'black',
    storage: '128GB',
  },
];

function phone(config: Phoneconfig): void {
  console.log(config);
}
phone({
  name: 'realme',
  type: 'smartphone',
  price: 20000,
  color: 'black',
  storage: '128GB',
});

// interface -> this is also specially useful for object type define.most of the case we will use it
interface Employee {
  name: string;
  id: number;
  department: string;
  salary?: number;
}
let hasan: Employee = {
  name: 'hasan',
  id: 101,
  department: 'cse',
  salary: 7000,
};
let nayeem: Employee = {
  name: 'nayeem',
  id: 101,
  department: 'cse',
  salary: 7000,
};
let rejwan: Employee = {
  name: 'rejwan',
  id: 101,
  department: 'cse',
  salary: 7000,
};

let team: Employee[] = [
  hasan,
  rejwan,
  {
    name: 'masuma',
    id: 101,
    department: 'cse',
  },
  {
    name: 'khadija',
    id: 101,
    department: 'cse',
  },
];

function printemployee(em1: Employee, em2: Employee): void {
  console.log(em1);
  console.log(em2);
}
printemployee(hasan, nayeem);
printemployee(
  { name: 'humayra', id: 201, department: 'ece' },
  { name: 'husama', id: 301, department: 'ece' },
);

// type alias vs interface -> both are almost similar
// type alias use with union operator
type Nameofphone = 'iphone' | 'samsung' | 'realme';
// beside that all case we will use interface
// interface for extending
interface Person {
  name: string;
  id: number;
}
interface Tutor extends Person {
  age: number;
}
let schoolteacher: Person = {
  name: 'rejwan',
  id: 101,
};
let tutor: Tutor = {
  name: 'hasan',
  id: 333,
  age: 33,
};
console.log(schoolteacher, tutor);

// declaration merging
interface User {
  name: string;
}

interface User {
  age: number;
}
let user: User = {
  name: 'kawser',
  age: 20,
};
console.log(user);

// generics -> general type
/* <T> declares a type parameter(variable) for the function. 
That type parameter can then be used 
anywhere inside the function's type 
signature—parameters, return type, etc. */
interface Response<T> {
  data: T;
  status: boolean;
}

let transactionresponse: Response<string> = {
  data: 'successful',
  status: true,
};
console.log(transactionresponse);
let apiresponse: Response<{}> = {
  data: {
    id: 1,
    name: 'haq',
  },
  status: true,
};
console.log(apiresponse);

let apicall: Response<[{}]> = {
  data: [{ id: 201, age: 34 }],
  status: true,
};
console.log(apicall);

// In function

function ab<TT>(value: TT): TT | undefined {
  return value;
}
ab([10, 20]);
ab(10);
ab('hasan');

function ab1<TT>(value: TT, val: TT): [TT, TT] {
  return [value, val];
}
ab1([10, 20], [19]);
ab1(10, 20);
ab1('hasan', 'hs'); //One T can't be both number and string

// more generics
function gen<T>(value: T): [newval: T, (passval: T) => T] {
  let newval = value;
  function updatevalue(passval: T) {
    return (newval = passval);
    //console.log(newval);
    //newval=passval;
  }
  return [newval, updatevalue];
}
/* let infunc=gen<number>(10)
console.log(infunc(20));
gen<string>('hasan'); */

interface Userg {
  name: string;
  id: number;
}
let innfn = gen<Userg>({ name: 'hasan', id: 201 });
let [firstobject, innfucntion] = innfn;
console.log(firstobject);
console.log(innfucntion({ name: 'raja', id: 21 }));

/* 
Do NOT Use Generics When...
Your code depends on the specific properties, methods, or behaviors of 
a certain type.
Math & Logic Operations: If you use +, -, *, <, or >, 
use number.
String Manipulation: If you use .toLowerCase(), .split(), .trim(), or regex, use string.
Domain Data Objects: If the function works on data with highly specific 
real-world meaning (e.g., User, Ticket, CartItem, Product), use an interface or type.

*/

// enum ->is a set of named constants.
// Numeric
// By default, enum members are assigned numeric values starting from 0.
enum Day {
  sat,
  sun,
  mon,
  tues,
  wedn,
  thrus,
  frid,
}
console.log(Day.sun); // 1

//You can also assign your own values:
enum status {
  pending = 1,
  approved = 2,
  rejected = 3,
}
console.log(status.approved); // 2
enum priority {
  low,
  medium,
  high,
}
// string
enum Roles {
  Admin = 'Admin',
  User = 'user',
  Guest = 'Guest',
}
console.log(Roles.Guest);
let hasanabe = {
  name: Roles,
  age: 2,
};
console.log(hasanabe);
//String enums are common because they're easier to debug and work well with APIs.

// Numeric enums support reverse lookup.
enum Color {
  Red,
  Green,
  Blue,
}

console.log(Color.Red); // 0
console.log(Color[0]); // "Red"

// assertion
/* type assertion means:

You tell TypeScript, “I know more about 
this value's type than you currently know.” */
let value: unknown;
let newvalue = value as string;
let upval = newvalue.toUpperCase();

interface User {
  name: string;
  age: number;
}

const data: unknown = {
  name: 'John',
  age: 25,
};
const usera = data as User;

console.log(usera.name);

// as const (act like type literal)-> special kind of type assertion
/* as const tells TypeScript: "Keep this 
value as narrow and readonly as possible." */

const userc = {
  name: 'John',
  age: 25,
} as const;

// now only can read,can't update
/* userc.name = "Mike"; // ❌
userc.age = 30;      // ❌ */

const colors = ['red', 'green', 'blue'] as const;
/* colors.push("yellow"); // ❌
colors[0] = "yellow";  // ❌ */

// function inside object
type addfn = (a: number, b: number) => number;
interface Userf {
  name: string;
  age: number;
  ispassed: boolean;
  printme: () => void;
  //add:(a:number,b:number)=>number
  add: addfn;
}
const userf: Userf = {
  name: 'Rejwan',
  age: 24,
  ispassed: true,
  printme() {},
  add(a: number, b: number): number {
    return 0;
  },
};

/* not many thing have to know in ts
following topics are enough ->
1.how to define type of varibale
2.array type
3.type define in object
4.type define in function
5.union,null,unknown (special type) will beneficiary in many cases as well as null
6.type alias
7.interface
8.generics
9.assertion
10.enums
*/
