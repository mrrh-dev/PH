/* 
1.phone
2.balance
3.pin
4.history
*/
// access modifier-> 3 types:public(default),private,protected -> maintains data security
// Encapsulation was implemented by using access modifier
class Bkashaccount {
  phone: string;
  private balance: number;
  private pin: number;
  protected history: any = [];
  constructor(phone: string, balance: number, pin: number) {
    this.phone = phone;
    this.balance = balance;
    this.pin = pin;
  }
  getbalance(pin: number) {
    if (this.pin === pin) return this.balance;
    return 'PIN is wrong';
  }
}

const bkashacc = new Bkashaccount('01234567', 3555, 123);
console.log(bkashacc);
//bkashacc.balance = 0; // account balance becomes 0
//bkashacc.balance = 0;// Property 'balance' is private and only accessible within class 'Bkashaccount'.
//bkashacc.history //Property 'history' is protected and only accessible within class 'Bkashaccount' and its subclasses.
console.log(bkashacc);
console.log(bkashacc.getbalance(12345));
console.log(bkashacc.getbalance(123));
/* Encapsulation is the practice of hiding an object's internal state and exposing 
it only through a controlled interface. An access modifier is the keyword that 
enforces this: public allows access from anywhere, private restricts it to the 
declaring class, and protected allows the declaring class and its subclasses.

In plain words
Decide what stays inside and what you hand out. Balance is public, PIN is private, 
transaction history is protected. Write nothing and you get public by default. */
