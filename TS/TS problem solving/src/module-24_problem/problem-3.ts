interface User {
  name: string;
  age: number;
  city: string;
}
/* let fahim:User={
    name:'Fahim',
    age:25,
    city:'Sylhet'
} */
function formatUserProfile(user: User): string {
  // write your code here
  return `${user.name} is ${user.age} years old and lives in ${user.city}`;
}
console.log(
  formatUserProfile({
    name: 'Fahim',
    age: 22,
    city: 'Dhaka',
  }),
);
