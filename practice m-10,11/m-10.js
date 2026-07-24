/* 1.Given an array of numbers, remove duplicates and log the unique 
values only. */
/*  let arr = [1,2,3,2,3,4];
 let arr1 =[];
 for(let i=0;i<arr.length;i++){
    let have = false;
    for(let j=0;j<arr1.length;j++){
        if(arr[i] === arr1[j]){
            have = true;
            break;
        }
    }
    if(!have) arr1.push(arr[i])
 }
console.log(arr1); */

/* 2. Given an array of mixed values (numbers and strings), separate 
them into two arrays and log both. */
/* let arr = [1, 2, 'dfghf', 'hj'];
let arr1 = [];
let arr2 = [];
for (let i = 0; i < arr.length; i++) {
  if (typeof arr[i] === 'number') {
    arr1.push(arr[i]);
  } else if (typeof arr[i] === 'string') arr2.push(arr[i]);
}
console.log(arr1);
console.log(arr2); */

/* 3. Given an array of numbers, find the largest and smallest value
 without using Math.max or Math.min directly on the whole array
 (use a loop). */
/* let arr = [3, 10, 1, 66, 99, 2];
let min = arr[0];
let max = arr[0];
for (let i = 1; i < arr.length; i++) {
  if (arr[i] < min) {
    min = arr[i];
  }
  if (arr[i] > max) {
    max = arr[i];
  }
}
console.log('smallest', min, 'largest', max); */

/* for (let i = 0; i < arr.length - 1; i++) {
  for (let j = i + 1; j < arr.length; j++) {
    if (arr[i] < arr[j]) {
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
  }
}
console.log(arr[0]);

for (let i = 0; i < arr.length - 1; i++) {
  for (let j = i + 1; j < arr.length; j++) {
    if (arr[i] > arr[j]) {
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
  }
}
console.log(arr[0]); */

/* 4. Flatten a nested array (array containing arrays) into a single flat
 array.Expected: [1,2,3,4,5,6] from something like [1,[2,3],[4,[5,6]]] */
/* let arr = [1, [2, 3], [4, [5, 6]]];
let ans = [];
for (let i = 0; i < arr.length; i++) {
  if (Array.isArray(arr[i])) {
    for (let j = 0; j < arr[i].length; j++) {
      //ans.push(arr[i][j]);
      if (Array.isArray(arr[i][j])) {
        for (let k = 0; k < arr[i][j].length; k++) {
          ans.push(arr[i][j][k]);
        }
      } else ans.push(arr[i][j]);
    }
  } else ans.push(arr[i]);
}
console.log(ans); */

/* 5. Rotate an array left by one position (first item moves to the end).
 Log the result.Expected: [2,3,4,5,1] from [1,2,3,4,5] */
let arr = [1, 2, 3, 4, 5];
let temp = arr[0];
for (let i = 0; i < arr.length - 1; i++) {
  arr[i] = arr[i + 1];
}
arr[arr.length - 1] = temp;
//arr.push(arr.shift());
console.log(arr);
