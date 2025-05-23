# 📚 Method Chaining in JavaScript Classes

**Method chaining** is a design pattern in JavaScript that allows multiple method calls to be chained together in a single statement. This is done by having each method return the object itself (`this`), enabling the next method to be called directly.

---

## 🔗 What Is Method Chaining?

In JavaScript, objects or classes that return themselves from a method allow subsequent calls to be "chained."

### Example (Array chaining):
```javascript
const result = [1, 2, 3, 4, 5]
  .filter(num => num > 2)
  .map(num => num * 2)
  .reduce((acc, num) => acc + num, 0);

console.log(result); // Output: 18

## 🧱 Creating Method Chains in Your Own Classes

To enable method chaining in a class, each method should return the class instance using return this;.

### ✅ Example: Counter class with chaining

```javascript
class Counter {
  constructor() {
    this.count = 0;
  }

  increment() {
    this.count++;
    return this; // Returning instance
  }

  decrement() {
    this.count--;
    return this;
  }

  reset() {
    this.count = 0;
    return this;
  }

  print() {
    console.log(`Current count: ${this.count}`);
    return this;
  }
}

const counter = new Counter();
counter.increment().increment().decrement().print().reset().print();
// Output:
// Current count: 1
// Current count: 0
```

## 🏦 Use Case: Bank Account Class with Chaining

Here’s a practical example using a BankAccount class.

```javascript
class BankAccount {
  constructor(owner, balance = 0) {
    this.owner = owner;
    this.balance = balance;
  }

  deposit(amount) {
    this.balance += amount;
    return this;
  }

  withdraw(amount) {
    this.balance -= amount;
    return this;
  }

  printBalance() {
    console.log(`${this.owner}'s balance: $${this.balance}`);
    return this;
  }
}

const account = new BankAccount('Alice');

account
  .deposit(100)
  .withdraw(25)
  .deposit(50)
  .printBalance(); // Alice's balance: $125
```

## ✨ Benefits of Method Chaining
	•	Fluent interfaces: Makes code more readable and expressive.
	•	Fewer intermediate variables: Reduces clutter.
	•	Streamlined workflows: Performs sequences of operations seamlessly.

## ⚠️ Things to Watch Out For

	•	Always return this when you want to support chaining.
	•	Not all methods should be chainable (e.g., those meant to return a final value like getTotal()).
	•	Don’t chain too much—it can hurt readability if overused.


## ✅ Best Practices

| ✅ Do                                      | ❌ Don’t                                               |
|-------------------------------------------|--------------------------------------------------------|
| Return `this` from state-changing methods | Return a primitive when chaining is expected           |
| Keep methods focused                      | Chain deeply without clarity                           |
| Use chaining for setup/configuration      | Chain methods with side effects unless intentional     |

## 📎 Summary

Method chaining is a powerful technique that can greatly enhance the clarity and fluidity of your JavaScript classes. By simply returning this, you can design objects that support intuitive and expressive sequences of operations.

⸻
