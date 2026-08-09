function countHashtags(caption) {
  // Write your code here…
  if (typeof caption !== 'string') return 'Invalid';
  let arr = caption.split(' ');
  //console.log(arr);
  let hashtagCount = 0;
  let longestTag = '';
  for (let k of arr) {
    //let str = k;

    if (k.startsWith('#')) {
      hashtagCount++;
      //console.log(longestTag);
      let tagtxt = k.slice(1);
      if (tagtxt > longestTag.length) {
        longestTag = tagtxt;
        //console.log(longestTag);
      }
    }
  }
  /*  console.log(hashtagCount);
  console.log(longestTag); */
  return { hashtagCount, longestTag: longestTag };
}

console.log(countHashtags(['#fun']));
