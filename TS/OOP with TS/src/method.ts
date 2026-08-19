/* class Student {
  name: string;
  age: number;
  id: number;
  // consttuctor -> special method(function inside an object/class is called method)
  constructor(name: string, age: number, id: number) {
    this.name = name;
    this.age = age;
    this.id = id;
  }

  getInfo() {
    const info = `Name:${this.name}\n Age:${this.age}`;
    return info;
  }
}

// instantiate
// instance = object
const rafi = new Student('Rafi', 24, 101);
console.log(rafi);
const hasan = new Student('hasan', 22, 45);
console.log(hasan);

console.log(rafi.getInfo());
console.log(hasan.getInfo()); */

// Define an interface for the sold item structure
interface SoldItem {
  name: string;
  price: number;
}

class ChapShop {
  title: string;
  solditems: SoldItem[] = [];
  constructor(title: string) {
    this.title = title;
  }
  buy(name: string, price: number) {
    this.solditems.push({ name, price });
  }
  totalsold() {
    const total = this.solditems.reduce((acc, item) => acc + item.price, 0);
    return total;
  }
}
let shop1 = new ChapShop('Tea shop');
console.log(shop1);
shop1.buy('black tea', 20);
shop1.buy('green tea', 40);
console.log(shop1);
console.log(shop1.totalsold());

/* 
A method is a function defined inside a class, which runs on a particular instance and can reach that 
instance's own fields through this.
In plain words
A function that belongs to the object. shop1.total() asks the order for its own total — nobody has 
to hand the order to anything.
*/
