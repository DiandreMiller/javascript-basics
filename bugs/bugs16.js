//Find the bug

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