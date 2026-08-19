// creates polymorphism by method overriding
class Animal {
  private _name: string;
  constructor(name: string) {
    this._name = name;
  }
  makeSound(): void {
    console.log('Animal makes sound');
  }
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
const dog = new Dog('dog');
console.log(dog);
dog.makeSound();

// example -2
class Shape {
  area(): number {
    return 0;
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
