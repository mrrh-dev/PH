// A
/* function sayHi(name) {
  //console.log('Hi,' + name; // find the bug
   // syntax error 
  console.log('Hi,' + name);
}
sayHi('Mira'); */

// B
/* let word = 'hello';
//console.log(word.toUppercase()); // find the bug
console.log(word.toUpperCase()); */

// C
/* function square(num) {
  //return num + num; // find the bug
  // syntax error
  return num * num
}
 
console.log(square(4)); // should be 16 */

// 2
/* function checkScore(score) {
  // logic error
  //if (score > 50)
  if (score >= 50) {
    return 'Pass';
  } else {
    return 'Fail';
  }
}

console.log(checkScore(50)); // Expected: "Pass" (currently wrong)
console.log(checkScore(40)); */ // Expected: "Fail"

// 3
/* function countUpTo(n) {
  let count = 0;
// syntax error no increment i++
  for (let i = 1; i <= n; i++) {
    // something is missing here
    count = count + 1;
  }

  return count;
}

console.log(countUpTo(5)); */ // Expected: 5 (currently freezes/never finishes)

// 4
// Bug: find why this doesn't return the first element

/* function getFirstElement(arr) {
  // return arr[1]; // find the bug
  // logical error
  return arr[0];
}

console.log(getFirstElement([10, 20, 30])); */ // Expected: 10 (currently returns 20)

// 5

// Bug: find why the result comes out negative

/* function subtract(a, b) {
  //return b - a; // find the bug
  // logical error
  return a - b;
}

console.log(subtract(10, 3)); */ // Expected: 7 (currently returns -7)

// 6

// Bug: explain this line out loud — what does str.length actually equal for ""?
// logical error
/* function isEmpty(str) {
    //if (str.length = 0)
  if (str.length === 0) {
    // find the bug
    return true;
  } else {
    return false;
  }
}

console.log(isEmpty('')); // Expected: true
console.log(isEmpty('hi')); */ // Expected: false

//7
// This code has TWO bugs. Fix one, re-run, then find the next.

/* function getOddNumbers(numbers) {
  let odds = [];
// 2.syntax error and 1.logic error
  for (let i = 0; i < numbers.length; i++) {
    // bug #1 is here , should not =
    if (numbers[i] % 2 === 1) {
      // bug #2 is here,should == or === not =
      odds.push(numbers[i]);
    }
  }

  return odds;
}

console.log(getOddNumbers([1, 2, 3, 4, 5, 6, 7]));  */ // Expected: [1, 3, 5]

// 8

// Apply the full debugging process to find this bug

/* function countVowels(str) {
  let vowels = 'aeiou';
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    // find the bug ,should not =; just <
    if (vowels.includes(str[i])) {
      count = count + 1;
    }
  }

  return count;
}

console.log(countVowels('orange')); */ // Expected: 3

// 9A
/* function celsiusToFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32; // find the bug,ligical error; should 32 not just 3
}

console.log(celsiusToFahrenheit(0)); // Expected: 32
console.log(celsiusToFahrenheit(100)); */

// 9B
/* function sumArray(numbers) {
  let total = 0;

  for (let i = 0; i < numbers.length; i++) {
    // find the bug ; logical error;should i = 0;not i=1
    total = total + numbers[i];
  }

  return total;
}

console.log(sumArray([1, 2, 3, 4])); */ // Expected: 10

// 9C
/* function repeatString(str, times) {
  let result = '';

  for (let i = 0; i < times; i++) {
    result += str; // find the bug ;logical error;should +=, not =;
  }

  return result;
}

console.log(repeatString('ab', 3)) */ // Expected: "ababab"

// 9D
function updateAge(person, newAge) {
  person.age = newAge; // find the bug
  return person;
}

console.log(updateAge({ name: 'Lee', age: 20 }, 21));
// Expected: { name: "Lee", age: 21 }
