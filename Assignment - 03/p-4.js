function bonusScore(scores) {
  // Write your code here
  for (let k of scores) {
    if (typeof k !== 'number') return 'Invalid';
  }
  if (!Array.isArray(scores) || scores.length === 0) return 'Invalid';
  let bonusArray = scores.map((element) => element + 10);
  let totalSum = bonusArray.reduce((acc, elem) => {
    return (acc += elem);
  }, 0);
  return totalSum;
}
console.log(bonusScore([80, '90', 70]));
