// this keyword helps function to reuse in different context
// 4 rulse
// implicit binding
// explicit binding
// new binding
// window binding
/* 
remember one rule:

this is determined by how a function is called, not where it is written.

Many beginners think:

"this belongs to the object where the function is defined."

❌ That's wrong.

Instead:

Look at the function call. The way you call it decides what this is.
*/

// implicit binding -> If a function is called through an object, then this refers
// to that object(immeadiate . notaion object).
const hasan = {
  name: 'hasan',
  age: 26,
  printname: function () {
    console.log(this.name); // this refers to hasan object
  },
};

hasan.printname();

// another example
var printstudentname = function (obj) {
  obj.printstudentname = function () {
    console.log(this.name); // this refers rafi or rejwan keyword
  };
};
const rafi = {
  name: 'rafi',
  age: 22,
  email: 'rafi@gmail.com',
};
const rejwan = {
  name: 'rejwan',
  age: 26,
  email: 'rejwan@gmail.com',
};
printstudentname(rafi);
printstudentname(rejwan);
rafi.printstudentname();
rejwan.printstudentname();

// another example

var Person = function (name, age) {
  return {
    name: name,
    age: age,
    printname: function () {
      console.log(this.name);
    },
    father: {
      name: 'XXYXY',
      printname: function () {
        console.log(this.name);
      },
    },
  };
};
var sakib = Person('sakib', 24);
sakib.printname();
sakib.father.printname();
/* 
This is called Implicit Binding because JavaScript automatically ("implicitly") 
binds this to the object.
*/

// explicit binding
/* 
Sometimes we don't want JavaScript to decide.

We want to decide ourselves.

JavaScript provides

call()
apply()
bind()

These let us explicitly choose what this should be.
*/

// example
var printname = function (v1, v2, v3) {
  console.log(this.name, v1, v2, v3); // this refers to hasanahmed object
};

const hasanahmed = {
  name: 'hasan',
  age: 26,
};
var v1 = 'nice';
var v2 = 'guzel';
var v3 = 'cok guzel';

// call()
printname.call(hasanahmed, v1, v2, v3); // means Use hasanahmed as this.

// apply()
let quality = [v1, v2, v3];
printname.apply(hasanahmed, quality); // behave as same as call ;only difference is
// argument can pass through an array

// bind() -> same as call();difference is it doesn't call the function
//           immediately; rather it return it's function instance;then have to call
var newfunc = printname.bind(hasanahmed, v1, v2, v3);
newfunc();

// new binding -> This happens when you use the new keyword.
// (check prototype note on notion,this is the same concept)
function Person1(name, age) {
  /* let person = Object.create(Person.prototype); 
  return person; */
  //let this = Object.create(Person.prototype);// after write new keyword js behind
  // the scene create a new empty object and linked to prototype
  this.name = name;
  this.age = age;
  this.id = 21;
  console.log(this.name, this.age, this.id);
  //return this; // after write new keyword,behind the scene return this indicating object with prototype
}

const mosa = new Person1('mosa', 44);
//console.log(mosa);

// window binding/default binding(in modern js)
// This happens when none of the previous rules apply.
//('use strict'); -> with strict mode -> undefined;without it window/global object
//var name2 = 'hasan';
var printname1 = function () {
  //console.log(this); // this refers to Global object on browser for js,global object for node.js
  console.log(this.name); // undefined
};

printname1();
