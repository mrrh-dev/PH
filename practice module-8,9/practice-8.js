/* Take two variables price1 and price2, and compare them using all 
comparison operators (==, ===, !=, !==, >, <, >=, <=), printing 
each result with console.log. */
/* let price1 = 20;
let price2 = '20';
//if (price1 !== price2) console.log('not same');
if (price1 != price2) console.log('not same');
else console.log('same'); */

// Guess the result of "5" == 5 and "5" === 5 first,
// then write code to verify your guess.
/* let a = '10';
let b = 5;
console.log(a == b);
console.log(a === b); */

//Create a variable isRaining (true/false). If it is true, print
//"Take an umbrella".
/* let isRaining = false;
if (!isRaining) console.log('take an umbrella'); */

//Take a variable stock. If stock is 0, print "Out of stock"
// (use only if, no else).

/* let stock = 0;
if (stock === 0) console.log('print out of stock'); */

//Take a number variable and check whether it is positive or
// negative (using if-else).

/* let num = -80;
if (num >= 0) console.log('positive');
else console.log('negative'); */

//Take a year variable and check whether it is a leap year
// (hint: year % 4 === 0).
/* let year = 2020;
if (year % 4 === 0 || (year % 400 === 0 && year % 100 !== 100))
  console.log('leap year');
else console.log('not leap year'); */

//Take a speed variable. If speed is greater than 80,
// print "Overspeeding", otherwise print "Normal speed".
/* let speed = 85;
if (speed > 80) console.log('overspedding');
else console.log('normal speed'); */

//Using age and hasTicket, print "Entry allowed" if age is above 18
// AND the person has a ticket (use &&).
/* let age = 20;
let hasticket = true;
if (age > 18 && hasticket) console.log('allowed');
else console.log('not allowed'); */

//Using isWeekend and isHoliday, print "No work today" if either one
// is true (use ||).
/* let isWeekend = true;
let isHoliday = false;
if (isWeekend || isHoliday) console.log('not work today');
else console.log('have work today'); */

//Build a simple login system — print "Login successful" only if
// both username and password are correct.
/* let username = 'hasan';
let password = 'nayeem';
if (username === 'hasan' && password === 'nayeem') console.log('successful');
else console.log('not successful'); */

//Build a grading system using a marks variable (A+, A, B, C, F) — it
// must have at least 5 condition branches.
/* let marks = 70;
if (marks >= 80) console.log('A+');
else if (marks >= 70 && marks < 80) console.log('A'); */

//Using a bmi variable, determine the category — Underweight, Normal,
// Overweight, Obese (use if-else if).

//Using a month number (1-12), determine which season that month falls
// in (Winter, Summer, Monsoon, etc.).
/* let month = 5;
if (month === 5 || month === 3 || month === 4) console.log('summer');
else if (
  month === 12 ||
  month === 9 ||
  month === 10 ||
  month === 11 ||
  month === 1 ||
  month === 2
)
  console.log('winter');
else if (month === 6 || month === 7 || month === 8) console.log('moonsoon'); */

//Using age and hasID, use nested if-else to check whether someone is
// eligible to vote.

//Determine whether a number is even or odd using the ternary operator.
/* let nm = 80;
let result = nm % 2 === 0 ? 'even' : 'odd';
console.log(result); */

//Using age, determine "Adult" or "Minor" using the ternary operator.
/* let age = 25;
console.log(age >= 18 ? 'adult' : 'minor'); */

//If the price is greater than 1000, print "Expensive", otherwise
// "Affordable" — write this using a ternary operator.
/* let price = 1222;
console.log(price > 1000 ? 'expensive' : 'affordable'); */

//Using hasPermission, use the ! operator to print "Access Denied"
// if permission is not granted.
/* let hasPermission = false;
if (!hasPermission) console.log('access denied');
else console.log('access granted'); */

//Using isOnline, use the NOT operator to print "User is offline".
/* let isonline = false;
if (!isonline) console.log('offline'); */

//Build a simple discount system: if cart total is above 1000 AND
// the user is a member, apply a 20% discount; if only above 1000,
// apply a 10% discount; otherwise, no discount — use logical operators
// combined with if-else if.
let carttotal = 1500;
let ismember = true;

if (carttotal > 1000) {
  if (ismember) console.log('cost', carttotal - carttotal * 0.2);
  else console.log('cost', carttotal - carttotal * 0.1);
} else console.log('no discount');
//Build a simple login + role-check system that verifies
// username/password and shows a different message based on admin/user
// role — combine everything from this module (comparison, logical
// operators, if-else, ternary).
/* let username = 'hasan';
let userpass = '1234';

let adminame = 'nayeem';
let adminopass = '4321';

let inputusernme = 'hasan';
let inputuserpass = '1234';

let inputadminnme = 'nayeem';
let inputadminpass = '4321';

let inputusernme1 = 'rejwan';
let inputuserpass1 = '1234';

let inputadminnme1 = 'hoblos';
let inputadminpass1 = '4321';

let inputusernme2 = 'forid';
let inputuserpass2 = '134';

let inputadminnme2 = 'khadija';
let inputadminpass2 = '321';

let message = '';
if (inputusernme === username && inputuserpass === userpass) {
  message = `welcome user ${username}`;
}
if (inputusernme2 === username && inputuserpass1 === userpass) {
  message = `welcome user ${username}`;
}
if (inputadminnme === adminame && inputadminpass === adminopass) {
  message = `welcome admin ${adminame}`;
}
if (inputadminnme1 === adminame && inputadminpass1 === adminopass) {
  message = `welcome admin ${adminame}`;
}

let role = adminame === inputadminnme ? 'adminboard' : 'userboard';

console.log(`${message},${role}`); */
//Using isLoggedIn and isAdmin, build a nested condition — if
// logged in and admin, print "Admin Dashboard"; if logged in but not
// admin, print "User Dashboard"; if not logged in, print "Please Login".
/* let isLoggedIn = true;
let isadmin = false;

if (isLoggedIn) {
  if (isadmin) console.log('admin dashboard');
  else console.log('user dashboard');
} else console.log('please login'); */
