# Object-Oriented Programming (OOP) Principles

Object-Oriented Programming (OOP) is a programming paradigm centered around objects and classes. The four key principles of OOP are:

## 1. Encapsulation

**Definition**: Bundling the data (variables) and the methods (functions) that operate on the data into a single unit (class), while restricting direct access to some of the object's components.

**Purpose**:
- Protect internal object state.
- Only expose a controlled interface to the outside world.

**Example**:
```javascript
class BankAccount {
    constructor(balance) {
        let _balance = balance; // private via closure

        this.getBalance = function() {
            return _balance;
        };

        this.deposit = function(amount) {
            if (amount > 0) _balance += amount;
        };
    }
}

const account = new BankAccount(100);
account.deposit(50);
console.log(account.getBalance()); // 150
```

---

## 2. Inheritance

**Definition**: Mechanism by which one class can inherit properties and methods from another class.

**Purpose**:
- Promote code reuse.
- Establish a natural hierarchy.

**Example**:
```javascript
class Animal {
    move() {
        console.log('Moving...');
    }
}

class Bird extends Animal {
    fly() {
        console.log('Flying...');
    }
}

const bird = new Bird();
bird.move(); // Inherited from Animal
bird.fly();  // Own method
```

---

## 3. Polymorphism

**Definition**: Ability for different classes to be treated as instances of the same parent class through a common interface, typically achieved by method overriding.

**Purpose**:
- Allow objects of different types to be treated uniformly.

**Example**:
```javascript
class Animal {
    speak() {
        console.log('Animal speaks');
    }
}

class Dog extends Animal {
    speak() {
        console.log('Dog barks');
    }
}

class Cat extends Animal {
    speak() {
        console.log('Cat meows');
    }
}

const animals = [new Dog(), new Cat()];
animals.forEach(animal => animal.speak());
// Output:
// Dog barks
// Cat meows
```

---

## 4. Abstraction

**Definition**: Hiding the complex implementation details and showing only the essential features of the object.

**Purpose**:
- Reduce complexity.
- Increase efficiency in interaction with objects.

**Example**:
```javascript
class RemoteControl {
    pressPowerButton() {
        console.log('Power button pressed. Turning TV on/off.');
    }
}

const remote = new RemoteControl();
remote.pressPowerButton(); // Abstracts how the TV turns on internally
```

---

# Summary
| Principle      | Description                                      |
|----------------|--------------------------------------------------|
| Encapsulation  | Hide data and expose only what is necessary.     |
| Inheritance    | Create new classes from existing ones.           |
| Polymorphism   | Same operation, different behavior on instances. |
| Abstraction    | Hide complex realities behind simple interfaces. |

> Mastering these principles leads to more robust, maintainable, and scalable code!

