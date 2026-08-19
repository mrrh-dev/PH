class Student {
    name;
    age;
    id;
    // consttuctor -> special method(function inside an object/class is called method)
    constructor(name, age, id) {
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
export {};
//# sourceMappingURL=class%20&%20constructor.js.map