/* Find and fix every bug. Do not change the function name. */
function generateLeaderboard(students) {
  if (!Array.isArray(students)) {
    // 1 bug
    return 'Invalid';
  }

  if (students.length === 0) {
    //
    // 2,3 bug
    return 'Invalid';
  }
  for (let k of students) {
    if (
      k === null ||
      typeof k !== 'object' ||
      !Object.hasOwn(k, 'name') ||
      !Object.hasOwn(k, 'score') ||
      typeof k.score !== 'number'
    )
      return 'Invalid';
  }

  const qualified = students.filter((student) => {
    return student.score >= 70; // 4,5 bug
  });

  const names = qualified.map(({ name }) => {
    return name.toUpperCase(); // 6 bug
  });

  return names.slice(0, 3); // 7 bug
}

console.log(generateLeaderboard([null]));
