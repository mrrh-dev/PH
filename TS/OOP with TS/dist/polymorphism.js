// creates polymorphism by method overriding
class Animal {
    _name;
    constructor(name) {
        this._name = name;
    }
    makeSound() {
        console.log('Animal makes sound');
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
const dog = new Dog('dog');
console.log(dog);
dog.makeSound();
// example -2
class Shape {
    area() {
        return 0;
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
export {};
//# sourceMappingURL=polymorphism.js.map