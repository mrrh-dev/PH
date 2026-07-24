/* let str = 'hello';
let arr = ['h', 'e', 'l', 'l', 'o'];

console.log(str.length);
console.log(arr.length);

console.log(str[0]);
console.log(arr[0]);

arr.push('k');

console.log(str);
console.log(arr); */

/* Convert the string "JavaScript" into an array of characters.*/
// manually
/* let str = 'JavaScript is fun';
//let arr = [];
/* for (let i = 0; i < str.length; i++) {
  arr.push(str[i]);
}
console.log(arr); 

// method
console.log(str.split('')); 
/* const text = 'JavaScript is fun';
const words = text.split(' ');
console.log(words); */

/* Convert the array ["c", "a", "t"] back into a single string "cat". */
// manually
/* let arr1 = ['c', 'a', 't'];
let str1 = '';
/* for (let i = 0; i < arr1.length; i++) {
  str1 += arr1[i]; // overwrite not swap
}
console.log(str1); 

// method
console.log(arr1.join(str1)); */

/* let name = "JavaScript";
Print the uppercase version.
Print the lowercase version.
Print the string with whitespace trimmed: "   hi there   " → "hi there"
 */
/* let name = 'JavaScript';
console.log(name.toUpperCase());
console.log(name.toLowerCase());
console.log('   hi there   '.trim()); */

/* 
Use .concat() to join "Hello" and "World" into "Hello World". */
//console.log('hello'.concat(' world'));
/*Use + and template literals to do the same thing. Compare all three approaches.*/
/* console.log('hello' + '', 'world');
console.log(`hello world`); */
/* let s = 'hello';
let s1 = 'world';
console.log(`${s} ${s1}`); */

//let book = { title: 'The Hobbit', author: 'Tolkien', pages: 310 };
//Get an array of all keys
/* console.log(Object.keys(book)); */
//Get an array of all
/* console.log(Object.entries(book)); */
//Delete the pages property using delete.
/* delete book.pages;
console.log(book); */

/* let user = {
  username: 'coder123',
  address: {
    city: 'Austin',
    zip: '78701',
  },
}; */

// Log the city using dot notation chaining.
/* console.log(user.address.city); */
//Add a country property inside the address.
/* user.address.country = 'bd';
console.log(user); */
//Delete the zip property from the nested object.
/* delete user.address.zip;
console.log(user); */

/* let scores = { math: 90, science: 85, art: 95 }; */

//Use a for...in loop to log each key and value like: math: 90.
//Calculate the average of all values in the loop.
/* let totalvalue = 0;
let count = 0;
for (let k in scores) {
  console.log(`${k} :`, scores[k]);
  totalvalue += scores[k];
  count++;
}
console.log(totalvalue / count); */

/* let sentence = "Learning JavaScript is fun!";  */
//Get just the word "Learning" using .slice().
//let sentence = 'Learning JavaScript is fun!';
//console.log(sentence.slice(0, 8));

// Get the last 4 characters ("fun!") using .slice() with a negative index.
//console.log(sentence.slice(-4));

/* Write a function reverseString(str) three different ways:
Test all three with "JavaScript" → should return "tpircSavaJ".*/
// Using .split(""), .reverse(), and .join("")
/* function reverseString(str) {
  return str.split('').reverse().join('');
}
console.log(reverseString('JavaScript')); */

//Using a for loop that builds the reversed string character by character
/* function reverseString(str) {
  let ans = ' ';
  for (let i = str.length - 1; i >= 0; i--) {
    ans += str[i];
  }
  return ans;
}
console.log(reverseString('JavaScript')); */
//Using a while loop that builds the reversed string character by character
/* function reverseString(str) {
  let i = str.length - 1;
  let ans = ' ';
  while (i >= 0) {
    ans += str[i];
    i--;
  }
  return ans;
}
console.log(reverseString('JavaScript')); */
/* 
Build a small "contact" system:
let contact = {
  name: "Alex Johnson",
  email: "ALEX@EMAIL.COM",
  phone: "555-1234"
};
*/
let contact = {
  name: 'Alex Johnson',
  email: 'ALEX@EMAIL.COM',
  phone: '555-1234',
};
//Convert the email to lowercase and update the object.
contact.email = contact.email.toLowerCase();
//console.log(contact);
//Loop through the contact object and print each key-value pair.
/* for (let i in contact) {
  console.log(`${i} :`, contact[i]);
} */
//Add a new property favoriteWords: [] (an array) — push 3 words to it.
/* contact.favoriteWords = ['re', 'fj', 'fjdj'];
console.log(contact); */
//Reverse the name string just for fun using one of your three reverse functions from Task 4.1.
/* function reverseString(str) {
  return str.split('').reverse().join('');
}
console.log(reverseString(contact.name)); */

//Check if the email includes "@email.com" (case-insensitive) and log a confirmation message.
if (contact.email.includes('@email.com')) console.log('log successful');
else console.log('invalid email');
