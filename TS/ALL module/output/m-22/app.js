let iphone = {
    name: 'iphone',
    type: 'smartphone',
    price: 10000,
    color: 'black',
    storage: '128GB',
};
let samsung = {
    name: 'samsung',
    type: 'smartphone',
    price: 20000,
    color: 'black',
    storage: '128GB',
};
let realme = {
    name: 'realme',
    type: 'smartphone',
    price: 20000,
    color: 'black',
    storage: '128GB',
};
let products = [
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
function phone(config) {
    console.log(config);
}
phone({
    name: 'realme',
    type: 'smartphone',
    price: 20000,
    color: 'black',
    storage: '128GB',
});
let hasan = {
    name: 'hasan',
    id: 101,
    department: 'cse',
    salary: 7000,
};
let nayeem = {
    name: 'nayeem',
    id: 101,
    department: 'cse',
    salary: 7000,
};
let rejwan = {
    name: 'rejwan',
    id: 101,
    department: 'cse',
    salary: 7000,
};
let team = [
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
function printemployee(em1, em2) {
    console.log(em1);
    console.log(em2);
}
printemployee(hasan, nayeem);
printemployee({ name: 'humayra', id: 201, department: 'ece' }, { name: 'husama', id: 301, department: 'ece' });
let schoolteacher = {
    name: 'rejwan',
    id: 101,
};
let tutor = {
    name: 'hasan',
    id: 333,
    age: 33,
};
console.log(schoolteacher, tutor);
let user = {
    name: 'kawser',
    age: 20,
};
console.log(user);
let transactionresponse = {
    data: 'successful',
    status: true,
};
console.log(transactionresponse);
let apiresponse = {
    data: {
        id: 1,
        name: 'haq',
    },
    status: true,
};
console.log(apiresponse);
let apicall = {
    data: [{ id: 201, age: 34 }],
    status: true,
};
console.log(apicall);
// In function
function ab(value) {
    return value;
}
ab([10, 20]);
ab(10);
ab('hasan');
function ab1(value, val) {
    return [value, val];
}
ab1([10, 20], [19]);
ab1(10, 20);
ab1('hasan', 'hs'); //One T can't be both number and string
// more generics
function gen(value) {
    let newval = value;
    function updatevalue(passval) {
        return (newval = passval);
        //console.log(newval);
        //newval=passval;
    }
    return [newval, updatevalue];
}
let innfn = gen({ name: 'hasan', id: 201 });
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
var Day;
(function (Day) {
    Day[Day["sat"] = 0] = "sat";
    Day[Day["sun"] = 1] = "sun";
    Day[Day["mon"] = 2] = "mon";
    Day[Day["tues"] = 3] = "tues";
    Day[Day["wedn"] = 4] = "wedn";
    Day[Day["thrus"] = 5] = "thrus";
    Day[Day["frid"] = 6] = "frid";
})(Day || (Day = {}));
console.log(Day.sun); // 1
//You can also assign your own values:
var status;
(function (status) {
    status[status["pending"] = 1] = "pending";
    status[status["approved"] = 2] = "approved";
    status[status["rejected"] = 3] = "rejected";
})(status || (status = {}));
console.log(status.approved); // 2
var priority;
(function (priority) {
    priority[priority["low"] = 0] = "low";
    priority[priority["medium"] = 1] = "medium";
    priority[priority["high"] = 2] = "high";
})(priority || (priority = {}));
// string
var Roles;
(function (Roles) {
    Roles["Admin"] = "Admin";
    Roles["User"] = "user";
    Roles["Guest"] = "Guest";
})(Roles || (Roles = {}));
console.log(Roles.Guest);
let hasanabe = {
    name: Roles,
    age: 2,
};
console.log(hasanabe);
//String enums are common because they're easier to debug and work well with APIs.
// Numeric enums support reverse lookup.
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
console.log(Color.Red); // 0
console.log(Color[0]); // "Red"
// assertion
/* type assertion means:

You tell TypeScript, “I know more about
this value's type than you currently know.” */
let value;
let newvalue = value;
let upval = newvalue.toUpperCase();
const data = {
    name: 'John',
    age: 25,
};
const usera = data;
console.log(usera.name);
// as const (act like type literal)-> special kind of type assertion
/* as const tells TypeScript: "Keep this
value as narrow and readonly as possible." */
const userc = {
    name: 'John',
    age: 25,
};
// now only can read,can't update
/* userc.name = "Mike"; // ❌
userc.age = 30;      // ❌ */
const colors = ['red', 'green', 'blue'];
const userf = {
    name: 'Rejwan',
    age: 24,
    ispassed: true,
    printme() { },
    add(a, b) {
        return 0;
    },
};
export {};
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
