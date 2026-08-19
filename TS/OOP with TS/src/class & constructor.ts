class Student {
  name: string;
  age: number;
  id: number;
  // consttuctor -> special method(function inside an object/class is called method)
  constructor(name: string, age: number, id: number) {
    this.name = name;
    this.age = age;
    this.id = id;
  }
}

// instantiate
// instance = object
const rafi = new Student('Rafi', 24, 101);
console.log(rafi);
const hasan = new Student('hasan', 22, 45);
console.log(hasan);
