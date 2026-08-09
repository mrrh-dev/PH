function calculateAiCost(tokensUsed) {
  // Write your code here.

  if (typeof tokensUsed !== 'number' || tokensUsed < 0 || isNaN(tokensUsed))
    return 'Invalid';

  if (tokensUsed <= 500) return 0;

  let subval = tokensUsed - 500;

  let flrval = Math.floor(subval / 100);

  return flrval * 5;
}
let ans = calculateAiCost(2000);
console.log(ans);
