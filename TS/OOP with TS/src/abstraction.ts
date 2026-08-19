// abstraction -> hide implementation of a code or process
/* abstract class -> contract(condition) between parent and child class
if child class class try to inherit parent class shape,then they must have implement abstract class method*/
// it can't be instantiated,can declare abstract member
abstract class Animal {
  private _name: string;
  constructor(name: string) {
    this._name = name;
  }
  abstract makeSound(): void; // this is an abstract member
}
class Cat extends Animal {
  makeSound(): void {
    console.log('meowwwww');
  }
}
const cat = new Cat('Billu');
console.log(cat);
cat.makeSound();

class Dog extends Animal {
  makeSound(): void {
    console.log('Gewgewgew');
  }
}
//const animal =new Animal() // Cannot create an instance of an abstract class.
const dog = new Dog('dog');
console.log(dog);
dog.makeSound();

// example -2
// there is no implementation of abstract method inside abstract class
// if any class try to inherit class shape,then they must have implement area() method
abstract class Shape {
  abstract area(): number;
  describe() {
    // this not abstract method,so child don't need to implement it
    console.log('this is a shape');
  }
}

class Circle extends Shape {
  radius: number;
  constructor(radius: number) {
    super();
    this.radius = radius;
  }
  area(): number {
    return 3.1416 * this.radius * this.radius;
  }
}
const circle = new Circle(5);
console.log(circle);
console.log(circle.area);

class Rectangle extends Shape {
  height: number;
  width: number;
  constructor(height: number, width: number) {
    super();
    this.height = height;
    this.width = width;
  }
  area(): number {
    return this.height * this.width;
  }
}
const rectangle = new Rectangle(5, 5);
console.log(rectangle);
console.log(rectangle.area());

//class using interface
// interface define type of object property,which method have object
/* An interface is a type that describes the members a value must have, without providing any 
implementation. A class states that it satisfies an interface with implements, and the compiler then 
checks every declared member.  */
// if a class implements an interface then they must implement all of the member inside an interface
interface Deliverable {
  readonly couriername: string;
  accept(parceid: string): string;
  chargeFor(district: string): number;
}
interface Trackable {
  track(code: string): string;
}
class Pathao implements Deliverable, Trackable {
  readonly couriername = 'Pathao';
  accept(parceid: string): string {
    return `PTH ${parceid}`;
  }
  chargeFor(district: string): number {
    return district === 'Dhaka' ? 60 : 100;
  }
  track(code: string): string {
    return `${code}:on a bike`;
  }
}

const pathao = new Pathao();
//console.log(pathao);
//console.log(pathao.chargeFor('Sylhet'));
console.log(pathao, pathao.accept('234'), pathao.chargeFor('Sylhet'));
