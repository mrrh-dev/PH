/* const studentName = 'rafi';
const studentage = 25;
const studentemail = 'rafi@gmail.com';

const studentName2 = 'hasan';
const studentage2 = 23;
const studentemail2 = 'hasan@gmail.com'; */

/* const rafi = {
  name: 'rafi',
  age: 22,
  email: 'rafi@gmail.com',
};
const hasan = {
  name: 'hasan',
  age: 24,
  email: 'hasan@gmail.com',
}; */

const createStudent = (name: string, age: number, email: string) => {
  const obj = { name, age, email, forget() {} };
  return obj;
};
const rafii = createStudent('rafi', 22, 'rafi@gmail.com');
//rafii.age=0;// easily accessable inside a object
console.log(rafii);

const hasann = createStudent('hasan', 24, 'hasan@gmail.com');
console.log(rafii);

// every time forget() allocates extra memory
