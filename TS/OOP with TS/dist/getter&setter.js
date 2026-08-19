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
// instantiate
// instance = object
const user = new User('Rafi', 24, 'rafi@gmail.com');
console.log(user);
//user.age = 20 // can't possible normally.have to use method
user.age = 20;
console.log(user.age);
console.log(user);
export {};
//# sourceMappingURL=getter&setter.js.map