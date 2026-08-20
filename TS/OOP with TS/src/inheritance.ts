// parent class/super class
class User {
  private _name: string;
  private _age: number;
  protected _email: string;
  // consttuctor -> special method(function inside an object/class is called method)
  constructor(name: string, age: number, email: string) {
    this._name = name;
    this._age = age;
    this._email = email;
  }
  // get can't receive any argument,must have to return something
  get age() {
    return this._age;
  }
  // setter can receive only one argument doesn't return anything,just set
  set age(value: number) {
    if (value < 0 || value > 100) throw new Error('Age is not valid');

    this._age = value;
  }
}
// child class/sub class/derived class
class Students extends User {
  private _fee: number;
  constructor(name: string, age: number, email: string, fee: number) {
    super(name, age, email);
    this._fee = fee;
  }
  get email() {
    return this._email; // can access protected member of parent class
  }
  /*   get age(){
    return this._age // can't access because age is private member of parent class
  } */
}
// instantiate
// instance = object
const student = new Students('Rafi', 24, 'rafi@gmail.com', 5000);
student.age = 15;
console.log(student);
