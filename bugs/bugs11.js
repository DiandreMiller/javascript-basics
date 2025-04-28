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