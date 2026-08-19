// abstraction -> hide implementation of a code or process
/* abstract class -> contract(condition) between parent and child class
if child class class try to inherit parent class shape,then they must have implement abstract class method*/
// it can't be instantiated,can declare abstract member
class Animal {
    _name;
    constructor(name) {
        this._name = name;
    }
}
class Cat extends Animal {
    makeSound() {
        console.log('meowwwww');
    }
}
const cat = new Cat('Billu');
console.log(cat);
cat.makeSound();
class Dog extends Animal {
    makeSound() {
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
class Shape {
    describe() {
        // this not abstract method,so child don't need to implement it
        console.log('this is a shape');
    }
}
class Circle extends Shape {
    radius;
    constructor(radius) {
        super();
        this.radius = radius;
    }
    area() {
        return 3.1416 * this.radius * this.radius;
    }
}
const circle = new Circle(5);
console.log(circle);
console.log(circle.area);
class Rectangle extends Shape {
    height;
    width;
    constructor(height, width) {
        super();
        this.height = height;
        this.width = width;
    }
    area() {
        return this.height * this.width;
    }
}
const rectangle = new Rectangle(5, 5);
console.log(rectangle);
console.log(rectangle.area());
class Pathao {
    couriername = 'Pathao';
    accept(parceid) {
        return `PTH ${parceid}`;
    }
    chargeFor(district) {
        return district === 'Dhaka' ? 60 : 100;
    }
    track(code) {
        return `${code}:on a bike`;
    }
}
const pathao = new Pathao();
//console.log(pathao);
//console.log(pathao.chargeFor('Sylhet'));
console.log(pathao, pathao.accept('234'), pathao.chargeFor('Sylhet'));
export {};
//# sourceMappingURL=abstraction.js.map