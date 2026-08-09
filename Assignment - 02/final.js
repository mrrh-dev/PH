//Problem-01: Match Winner
function matchWinner(teamAGoals, teamBGoals) {
  // Write your code here...
  if (
    typeof teamAGoals !== 'number' ||
    typeof teamBGoals !== 'number' ||
    isNaN(teamAGoals) ||
    isNaN(teamBGoals)
  )
    return 'Invalid';
  if (teamAGoals > teamBGoals) return 'Team A Won';
  else if (teamAGoals < teamBGoals) return 'Team B Won';
  else return 'Draw';
}

//Problem-02: Elevator Weight Safety Checker
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

//Problem-03: AI Token Cost Calculator
function calculateAiCost(tokensUsed) {
  // Write your code here.
  if (typeof tokensUsed !== 'number' || tokensUsed < 0 || isNaN(tokensUsed))
    return 'Invalid';
  if (tokensUsed <= 500) return 0;

  let subval = tokensUsed - 500;
  let flrval = Math.floor(subval / 100);
  return flrval * 5;
}

//Problem-04: Top Rated Restaurant Finder
function topRatedRestaurant(restaurants) {
  // Write your code here
  if (!Array.isArray(restaurants) || restaurants.length === 0) return 'Invalid';

  let maxrating = restaurants[0].rating;
  let maxind = 0;
  for (let i = 0; i < restaurants.length; i++) {
    if (restaurants[i].rating > maxrating) {
      maxrating = restaurants[i].rating;
      maxind = i;
    }
  }
  return restaurants[maxind].name.toUpperCase();
}

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
