//Find the bug

class Animal {
    constructor(name) {
        this.name = name;
    }
}

class Dog extends Animal {
    constructor(name, breed) {
        this.breed = breed;
        super(name);
    }
}

const dog = new Dog('Buddy', 'Golden Retriever');
console.log(dog.name, dog.breed);


//Find the bug

class Calculator {
    static add(a, b) {
        return a + b;
    }

    multiply(a, b) {
        return a * b;
    }
}

const calc = new Calculator();
console.log(calc.add(2, 3));