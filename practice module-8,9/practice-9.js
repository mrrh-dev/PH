/* Write a program that:
Loops from 1 to 100.
Skips (continue) any number divisible by 5.
Stops (break) completely once it reaches a number greater than 40.
Prints every number that passes both checks.
 */
/* for (let i = 1; i <= 100; i++) {
  if (i % 5 === 0) continue;
  if (i > 40) break;
  console.log(i);
} */

/* Write the same task — printing numbers 1 to 5 — three times: 
once using for, once using while, and once using do while. 
Compare how the code structure differs for each. */

// for loop version

// while loop version

// do while loop version
/* let i = 1;
do {
  console.log(i);
  i++;
} while (i <= 5);
{
} */
/* Write a while loop that prints numbers from 10 down to 1. */
/* let i = 10;
while (i >= 1) {
  console.log(i);
  i--;
} */

//Write a for loop that counts down from 20 to 1.
/* for (let i = 20; i >= 1; i--) console.log(i); */

/* const numbers = [10, 5, 80, 9];
/* numbers.sort();
console.log(numbers);  // [10, 5, 80, 9] (Incorrect! Alphabetically, "10" comes before "5")

// Correct way to sort numbers numerically
numbers.sort((a, b) => a - b);
console.log(numbers); // [5, 9, 10, 80] (Correct, ascending) */

let i = 0;
while (i <= 5) {
  if (i === 2) {
    i++;
    continue;
  }
  console.log(i);
  i++;
}
