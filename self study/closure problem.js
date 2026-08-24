/* let a = 10;
//console.log(a);
a = 20; // can reassign same variable
let a = 20; // but can't redeclare same variable and assign value not possible
console.log(a); */

/* for (let i = 1; i <= 3; i++) {
  function abc() {
    console.log(i);
  }
  abc();
}
//console.log(i);
//abc();
for (var i = 1; i <= 3; i++) {
  function abc() {
    console.log(i);
  }
}
abc(); */

// print the value from 1 -> 3 after every 1 seconds
/* for (var i = 1; i <= 3; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000 * i);
} */
// it's printing 4 ;now the question is why?And what's the solution of this
// first find the reason why it was not working and what acutally happend?

// how let solve this problem

/* The one-sentence answer for interviews

With var, all callbacks share the same loop variable, so when they 
execute asynchronously they all see its final value (4). With let, 
JavaScript creates a new lexical binding for each iteration, so each 
callback closes over a different variable and prints 1, 2, and 3.

This explanation combines execution context, lexical environments, 
closures, and the event loop, which is exactly what interviewers are 
usually looking for. */

for (var i = 1; i <= 3; i++) {
  function close(x) {
    setTimeout(function () {
      console.log(x);
    }, 1000);
  }
  close(i);
}
