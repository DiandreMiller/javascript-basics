// Find the bug

class Animal {
    speak() {
        console.log(`${this.name} makes a sound.`);
    }
}

class Dog {
    constructor(name) {
        this.name = name;
    }

    bark() {
        console.log(`${this.name} barks.`);
    }
}

const dog = new Dog("Rex");
dog.speak(); // Should print "Rex makes a sound."

// Find the bug

class Calculator {
    static multiply(a, b) {
        return a * b;
    }

    divide(a, b) {
        return a / b;
    }
}

const calc = new Calculator();
console.log(calc.multiply(2, 3)); // Should print 6

// Find the bug

class Timer {
    #seconds = 0;
  
    start() {
      setInterval(function () {
        this.#seconds++;
        console.log(this.#seconds);
      }, 1000);
    }
  }
  
  const timer = new Timer();
  timer.start(); // Throws TypeError: Cannot read private member #seconds from an object whose class did not declare it