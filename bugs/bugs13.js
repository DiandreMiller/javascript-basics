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

