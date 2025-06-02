//Find the bug
// 1.
class BuggyCounter {
  constructor() {
    this.count = 0;
  }

  increment() {
    this.count++;
  }

  decrement() {
    this.count--;
    return this;
  }

  print() {
    console.log(`Count: ${this.count}`);
    return this;
  }
}

const counter = new BuggyCounter();
counter.increment().decrement().print();

// 2.
class BuggyCalculator {
  constructor() {
    this.total = 0;
  }

  add(num) {
    this.total += num;
    return this.total; 
  }

  subtract(num) {
    this.total -= num;
    return this;
  }

  print() {
    console.log(`Total: ${this.total}`);
    return this;
  }
}

const calc = new BuggyCalculator();
calc.add(10).subtract(5).print();

// 3.

class BuggyBank {
  constructor(name, balance = 0) {
    this.name = name;
    this.balance = balance;
  }

  deposit(amount) {
    this.balance += amount;
  }

  withdraw(amount) {
    this.balance -= amount;
    return this;
  }

  printBalance() {
    console.log(`${this.name}'s balance: $${this.balance}`);
    return this;
  }
}

const account = new BuggyBank('Dana', 100);
account.deposit(50).withdraw(30).printBalance();