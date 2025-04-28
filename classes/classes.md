# JavaScript Classes: A Complete Guide

Classes in JavaScript provide a cleaner and more powerful way to create reusable object blueprints. They are built on top of JavaScript's prototype-based inheritance and offer a more structured, object-oriented syntax.

---

## Table of Contents

- [Introduction](#introduction)
- [Creating Classes](#creating-classes)
- [Adding Methods](#adding-methods)
- [Class Expressions](#class-expressions)
- [Getters and Setters](#getters-and-setters)
- [Inheritance](#inheritance)
- [Static Methods and Properties](#static-methods-and-properties)
- [Private Fields and Methods](#private-fields-and-methods)
- [Class Fields](#class-fields)
- [Extending Built-in Objects](#extending-built-in-objects)
- [Mixing Classes with Objects](#mixing-classes-with-objects)
- [Conclusion](#conclusion)

---

## Introduction

JavaScript classes offer a more familiar syntax for creating constructor functions and managing inheritance. They don't introduce a new object-oriented model — they are syntactical sugar over the existing prototypal system.

---

## Creating Classes

### Basic Class Syntax

```javascript
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}
The constructor method initializes object properties.

You use new to instantiate a class.

Instantiating a Class
javascript
Copy
Edit
const alice = new Person("Alice", 30);

console.log(alice.name); // "Alice"
console.log(alice.age);  // 30
Adding Methods
Methods are added inside the class without using the function keyword.

javascript
Copy
Edit
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hi, my name is ${this.name}.`);
  }
}

const bob = new Person("Bob", 25);
bob.greet(); // "Hi, my name is Bob."
✅ Methods are shared across instances via the prototype, saving memory.

Class Expressions
Classes can also be defined as expressions and assigned to variables.

javascript
Copy
Edit
const Animal = class {
  constructor(species) {
    this.species = species;
  }

  speak() {
    console.log(`${this.species} makes a sound.`);
  }
};

const dog = new Animal("Dog");
dog.speak(); // "Dog makes a sound."
Useful for one-off classes or dynamic class creation.

Getters and Setters
You can define special methods to control property access.

javascript
Copy
Edit
class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  get area() {
    return this.width * this.height;
  }

  set dimensions({ width, height }) {
    this.width = width;
    this.height = height;
  }
}

const rect = new Rectangle(10, 5);
console.log(rect.area); // 50

rect.dimensions = { width: 20, height: 10 };
console.log(rect.area); // 200
get allows you to access computed properties.

set allows custom logic when setting a property.

Inheritance
Classes can extend other classes to inherit their behavior.

Subclassing
javascript
Copy
Edit
class Animal {
  constructor(name) {
    this.name = name;
  }

  move() {
    console.log(`${this.name} moves.`);
  }
}

class Dog extends Animal {
  bark() {
    console.log(`${this.name} barks.`);
  }
}

const dog = new Dog("Buddy");
dog.move(); // "Buddy moves."
dog.bark(); // "Buddy barks."
extends keyword sets up inheritance.

The subclass can define its own methods.

Using super
The super keyword is used to call methods from the parent class.

javascript
Copy
Edit
class Bird extends Animal {
  constructor(name, canFly) {
    super(name);
    this.canFly = canFly;
  }

  fly() {
    if (this.canFly) {
      console.log(`${this.name} is flying!`);
    } else {
      console.log(`${this.name} can't fly.`);
    }
  }
}

const penguin = new Bird("Penguin", false);
penguin.move(); // "Penguin moves."
penguin.fly();  // "Penguin can't fly."
Static Methods and Properties
Static members are called on the class itself, not on instances.

Static Methods
javascript
Copy
Edit
class MathHelper {
  static add(a, b) {
    return a + b;
  }
}

console.log(MathHelper.add(5, 3)); // 8
Static Properties
javascript
Copy
Edit
class Company {
  static companyName = "TechCorp";
}

console.log(Company.companyName); // "TechCorp"
Static methods are often utility functions.

Static properties hold constant data for the class.

Private Fields and Methods
Private members use the # prefix and are inaccessible outside the class.

javascript
Copy
Edit
class BankAccount {
  #balance = 0;

  constructor(owner) {
    this.owner = owner;
  }

  deposit(amount) {
    this.#balance += amount;
    console.log(`Deposited: $${amount}`);
  }

  getBalance() {
    return this.#balance;
  }
}

const account = new BankAccount("Alex");
account.deposit(100);
console.log(account.getBalance()); // 100
// console.log(account.#balance); // SyntaxError
🔒 Private fields ensure true encapsulation.

Class Fields
You can declare properties directly inside the class body without the constructor.

javascript
Copy
Edit
class User {
  name = "Guest";
  isLoggedIn = false;

  login() {
    this.isLoggedIn = true;
  }
}

const user = new User();
console.log(user.name); // "Guest"
user.login();
console.log(user.isLoggedIn); // true
Helps to avoid boilerplate inside constructors.

Extending Built-in Objects
You can create classes that inherit from built-in types like Array, Error, etc.

Custom Error Example
javascript
Copy
Edit
class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = "ValidationError";
  }
}

throw new ValidationError("Invalid input!");
⚡ Extending built-ins makes error handling or data structures more powerful.

Mixing Classes with Objects
You can combine classes with object behaviors using Object.assign().

javascript
Copy
Edit
const behaviors = {
  speak() {
    console.log(`${this.name} speaks.`);
  }
};

class Cat {
  constructor(name) {
    this.name = name;
  }
}

Object.assign(Cat.prototype, behaviors);

const cat = new Cat("Whiskers");
cat.speak(); // "Whiskers speaks."
Mixins allow sharing behavior without full inheritance.

Conclusion
JavaScript classes offer a modern, cleaner way to work with prototypes, making it easier to model real-world relationships between objects. By mastering classes, inheritance, static properties, and private fields, you can write more organized and scalable applications.