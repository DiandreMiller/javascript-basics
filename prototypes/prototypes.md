# Prototypes in JavaScript

## Introduction

In JavaScript, prototypes are the foundation of inheritance. Every object has an internal link to another object called its prototype. Objects inherit properties and methods from their prototype.

Prototypes enable efficient memory usage and dynamic inheritance in JavaScript applications.

## What is a Prototype?

Every JavaScript object has a hidden internal property named [[Prototype]], which can be accessed via __proto__ (historically) or set/get using Object.getPrototypeOf and Object.setPrototypeOf.

```javascript
const person = {
  greet() {
    console.log("Hello!");
  }
};

const student = Object.create(person);

student.greet(); // "Hello!"
```
Here, student's prototype is person, allowing student to use the greet method.

## Prototype Chain

If a property or method isn't found on the object itself, JavaScript looks up the prototype chain until it finds it or reaches null.

```javascript
console.log(student.hasOwnProperty('greet')); // false
console.log('greet' in student);               // true
```

hasOwnProperty checks only own properties.

in checks own + inherited properties.

## Constructor Functions and Prototypes

When creating objects via constructor functions, the methods should be defined on the constructor’s .prototype property.

```javascript
function Person(name) {
  this.name = name;
}

Person.prototype.sayHello = function() {
  console.log(`Hi, I'm ${this.name}`);
};

const alice = new Person("Alice");
alice.sayHello(); // "Hi, I'm Alice"
```

Advantages: Methods are shared across all instances, not duplicated.

## Modifying Prototypes

You can dynamically add methods to prototypes even after creating instances.

```javascript
Person.prototype.sayGoodbye = function() {
  console.log(`${this.name} says goodbye.`);
};

alice.sayGoodbye(); // "Alice says goodbye."
```

## Native Prototypes

Built-in objects like Array, Date, and Function have their own prototypes that you can extend (though it's usually discouraged).

Example:

javascript
Array.prototype.first = function() {
  return this[0];
};

const numbers = [1, 2, 3];
console.log(numbers.first()); // 1
⚡ Warning: Modifying built-in prototypes can cause maintenance problems.

##Object.create and Prototypes

Object.create allows you to create a new object with a specific prototype.

javascript
Copy
Edit
const animal = {
  eats: true
};

const rabbit = Object.create(animal);
console.log(rabbit.eats); // true
rabbit has animal as its prototype.

##Prototype vs __proto__ vs prototype


Term	Meaning
prototype	Property of a constructor function (for instance methods)
__proto__	Reference to the object's prototype
[[Prototype]]	Internal link used by JavaScript
Example:

javascript
Copy
Edit
function Car() {}
const myCar = new Car();

console.log(myCar.__proto__ === Car.prototype); // true
console.log(Car.prototype.constructor === Car); // true
##Changing an Object’s Prototype

You can change an existing object’s prototype (not recommended for performance reasons).

javascript
Copy
Edit
const obj = {};
const newProto = { greet() { console.log("Hello!"); } };

Object.setPrototypeOf(obj, newProto);

obj.greet(); // "Hello!"
##Inheritance with Prototypes

You can set up inheritance manually using prototypes:

javascript
Copy
Edit
function Animal(name) {
  this.name = name;
}

Animal.prototype.move = function() {
  console.log(`${this.name} moves`);
};

function Dog(name) {
  Animal.call(this, name);
}

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.bark = function() {
  console.log(`${this.name} barks`);
};

const dog = new Dog("Buddy");
dog.move(); // "Buddy moves"
dog.bark(); // "Buddy barks"
###Steps:

Call parent constructor inside child (Animal.call(this, name)).

Set child's prototype to Object.create(Parent.prototype).

Fix child's constructor property.

## ES6 Classes and Prototypes

Modern class syntax is syntactic sugar over prototype-based inheritance.

javascript
Copy
Edit
class Animal {
  move() {
    console.log("Moving...");
  }
}

class Dog extends Animal {
  bark() {
    console.log("Barking...");
  }
}

const dog = new Dog();
dog.move(); // "Moving..."
dog.bark(); // "Barking..."
Under the hood, classes still use prototypes!

## Summary

Prototypes are objects that other objects inherit properties/methods from.

Prototype chaining allows multiple levels of inheritance.

Constructor functions and class syntax use prototypes.

You can create and link objects manually with Object.create.

Avoid modifying built-in prototypes in production code.

Mastering prototypes is key to understanding JavaScript's true nature! 🚀