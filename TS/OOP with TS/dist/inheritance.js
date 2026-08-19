// parent class/super class
class User {
    _name;
    _age;
    _email;
    // consttuctor -> special method(function inside an object/class is called method)
    constructor(name, age, email) {
        this._name = name;
        this._age = age;
        this._email = email;
    }
    // get can't receive any argument,must have to return something
    get age() {
        return this._age;
    }
    // setter can receive only one argument doesn't return anything,just set
    set age(value) {
        if (value < 0 || value > 100)
            throw new Error('Age is not valid');
        this._age = value;
    }
}
// child class/sub class/derived class
class Students extends User {
    _fee;
    constructor(name, age, email, fee) {
        super(name, age, email);
        this._fee = fee;
    }
}
// instantiate
// instance = object
const student = new Students('Rafi', 24, 'rafi@gmail.com', 5000);
student.age = 15;
console.log(student);
export {};
//# sourceMappingURL=inheritance.js.map