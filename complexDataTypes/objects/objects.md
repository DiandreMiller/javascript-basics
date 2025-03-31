# Objects in JavaScript

## Introduction

In JavaScript, **objects** are collections of **key-value pairs**, used to store and manage structured data. Like arrays, objects are **reference types**, meaning they are stored and passed by reference rather than by value. Objects are fundamental to JavaScript and are used extensively across the language—from data models to configuration options and more.

## Creating Objects

JavaScript provides several ways to create objects:

### Using Object Literals (Recommended)
```javascript
const person = {
  name: "Alice",
  age: 30,
  isStudent: false
};
```

### Using the `Object` Constructor
```javascript
const user = new Object();
user.name = "Bob";
user.age = 25;
```

### Creating an Empty Object
```javascript
const emptyObject = {};
```

## Accessing Properties

Object properties can be accessed using **dot notation** or **bracket notation**.

### Dot Notation
```javascript
console.log(person.name); // "Alice"
```

### Bracket Notation
```javascript
console.log(person["age"]); // 30
```

Bracket notation is useful when property names are dynamic or not valid identifiers.

```javascript
const key = "isStudent";
console.log(person[key]); // false
```

## Modifying Objects

### Adding or Updating Properties
```javascript
person.email = "alice@example.com";
person.age = 31;
```

### Deleting Properties
```javascript
delete person.isStudent;
```

## Checking for Properties

### Using the `in` Operator
```javascript
console.log("name" in person); // true
```

### Using `hasOwnProperty()`
```javascript
console.log(person.hasOwnProperty("age")); // true
```

### Comparing with `undefined`
```javascript
console.log(person.middleName === undefined); // true (if not present)
```

## Iterating Over Objects

### Using `for...in`
```javascript
for (let key in person) {
  console.log(key, person[key]);
}
```

> ⚠ Only enumerable properties are iterated. Use `hasOwnProperty()` inside the loop to exclude inherited properties if needed.

### Using `Object.keys()`, `Object.values()`, and `Object.entries()`

```javascript
console.log(Object.keys(person));   // ["name", "age", "email"]
console.log(Object.values(person)); // ["Alice", 31, "alice@example.com"]
console.log(Object.entries(person)); // [["name", "Alice"], ["age", 31], ["email", "alice@example.com"]]
```

These methods are often used in combination with `forEach()` or other array methods:

```javascript
Object.entries(person).forEach(([key, value]) => {
  console.log(`${key}: ${value}`);
});
```

## Object Methods and `this`

Objects can include functions, known as **methods**:

```javascript
const car = {
  brand: "Toyota",
  start() {
    console.log(`${this.brand} is starting.`);
  }
};

car.start(); // "Toyota is starting."
```

`this` refers to the object calling the method. Arrow functions do **not** bind their own `this`, so they’re not recommended for methods.

## Copying and Merging Objects

### Shallow Copy with Spread Operator
```javascript
const copy = { ...person };
```

### Using `Object.assign()`
```javascript
const clone = Object.assign({}, person);
```

### Merging Objects
```javascript
const address = { city: "New York", zip: "10001" };
const fullProfile = { ...person, ...address };
```

If properties overlap, later properties overwrite earlier ones.

## Nested Objects

Objects can contain other objects:

```javascript
const user = {
  name: "Carol",
  contact: {
    email: "carol@example.com",
    phone: "123-456-7890"
  }
};

console.log(user.contact.email); // "carol@example.com"
```

## Destructuring Objects

JavaScript allows extracting properties into variables:

```javascript
const { name, age } = person;
console.log(name); // "Alice"
```

### Nested Destructuring
```javascript
const { contact: { email } } = user;
console.log(email); // "carol@example.com"
```

## Optional Chaining and Nullish Coalescing

### Optional Chaining (`?.`)
```javascript
console.log(user.contact?.email); // "carol@example.com"
console.log(user.profile?.bio);   // undefined (no error)
```

### Nullish Coalescing (`??`)
```javascript
const nickname = user.nickname ?? "No nickname";
```

Returns right-hand value only if the left is `null` or `undefined`.

## JSON and Object Serialization

Objects can be converted to and from JSON strings for storage or transmission:

### Converting to JSON
```javascript
const jsonString = JSON.stringify(person);
```

### Parsing from JSON
```javascript
const parsed = JSON.parse(jsonString);
```

> ⚠ Limitations: JSON doesn't support functions, `undefined`, `Symbol`, or non-serializable types like `Date`, `Map`, `Set`.

## Shallow vs Deep Copy

Like arrays, copying objects with the spread operator or `Object.assign()` only copies the top level:

### Example of a Shallow Copy
```javascript
const original = {
  name: "Dana",
  nested: {
    score: 100
  }
};

const shallow = { ...original };
shallow.nested.score = 200;

console.log(original.nested.score); // 200
```

### Creating a Deep Copy

#### Using `structuredClone()`
```javascript
const deep = structuredClone(original);
deep.nested.score = 300;
console.log(original.nested.score); // 200
```

#### Using `JSON.parse(JSON.stringify())`
```javascript
const deepCopy = JSON.parse(JSON.stringify(original));
```

> ⚠ This method only works with JSON-safe data.

#### Using `lodash.cloneDeep()`
```javascript
const _ = require("lodash");
const deepCopy2 = _.cloneDeep(original);
```

## Conclusion

Objects in JavaScript are incredibly versatile and fundamental to writing effective code. Mastering how to create, access, iterate, and copy objects will improve your ability to structure and manage data in any application.
