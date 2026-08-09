//Problem-05: Debugging Challenge - API Response Time Monitor

/* এই ফাংশনের সব বাগ খুঁজে ঠিক করো — নাম পরিবর্তন করবে না */

function averageResponseTime(times) {
  if (Array.isArray(times) === false) // 1 bug

  {
    return 'Invalid';
  }

  if (times.length === 0) // 2 bug

  {
    return 'Invalid';
  }

  let total = 0;

  for (
    let i = 0;
    i < times.length;
    i++ // 3,4 bug
  ) {
    if (typeof times[i] !== 'number' || isNaN(times[i])) return 'Invalid';
    else total = total + times[i]; //5 byug
  }

  return total / times.length; // 6 bug
}

let ans = averageResponseTime([120, 200, 150]);
console.log(ans);
