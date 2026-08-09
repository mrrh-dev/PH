function filterActiveUsers(users) {
  // Write your code here
  //console.log(obj);
  if (!Array.isArray(users) || users.length === 0) return 'Invalid';
  for (let k of users) {
    if (k === null || typeof k !== 'object' || !Object.hasOwn(k, 'isActive'))
      return 'Invalid';
  }
  let filteredarray = users.filter((user) => {
    return user.isActive === true;
  });
  return filteredarray;
}
console.log(filterActiveUsers([{ name: 'A', isActive: true }, null]));
