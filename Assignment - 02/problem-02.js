function isElevatorSafe(weights) {
  // Write your code here

  if (!Array.isArray(weights)) return 'Invalid';

  let sum = 0;

  for (let i = 0; i < weights.length; i++) {
    sum += weights[i];
  }

  if (sum <= 400) return true;
  else return false;
}

let ans = isElevatorSafe([3, 5, 3]);
console.log(ans);
