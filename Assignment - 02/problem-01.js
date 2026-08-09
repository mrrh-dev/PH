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

let ans = matchWinner(3, 5);
console.log(ans);
