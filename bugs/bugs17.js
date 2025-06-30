// Find the bug
class BuggyGreeter {
    constructor(name) {
      this.name = name;
    }
  
    greet = () => {
      console.log(`Hello, ${this.name}`);
    }
  }
  
  const greeter = new BuggyGreeter('Alex');
  const sayHi = greeter.greet;
  sayHi(); // ❌ What's the bug? (Hint: check this binding)