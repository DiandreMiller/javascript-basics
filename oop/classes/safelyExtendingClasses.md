# Safely Extending JavaScript Classes Using Inheritance

In the previous lesson, we discussed how you can directly modify built-in prototypes. While JavaScript allows this, it's safer and more maintainable to **extend built-in classes through inheritance**. This avoids the risks of polluting global prototypes or causing conflicts in shared codebases.

---

## 🔐 Why Use Class Inheritance Instead?

- Avoids modifying shared global prototypes.
- Keeps custom logic scoped to your extended class.
- Plays nicely with third-party libraries and frameworks.
- Encourages better OOP practices in modern JavaScript.

---

## ✅ How to Safely Extend Built-in Classes

Instead of extending `Array.prototype`, create a subclass of `Array`:

### Example: CustomArray with a `.diandre()` Method

```javascript
class CustomArray extends Array {
    diandre() {
        const middle = Math.floor(this.length / 2);
        return this[middle];
    }
}

// Use it
const arr = new CustomArray(1, 2, 3, 4, 5, 6, 7);
console.log('returnMiddleNumber:', arr.diandre()); 
// Output: 4
```

If you would like to use this in a function, you can write it this way:

```javascript

function returnMiddleNumber (arr) {
    const customArray = new CustomArray(...arr);
    return arr.middle();
}
// Output: 4
```

## 🧠 How It Works
	•	CustomArray inherits all standard Array behavior.
	•	The .diandre() method is scoped only to CustomArray instances.
	•	No global changes to Array.prototype.

⸻

## 🧮 Safe Extension for Numbers

### ❓ Why Can’t You Extend Primitives Directly?

Primitives in JavaScript — such as:
	•	Number (e.g. 42)
	•	String (e.g. "hello")
	•	Boolean (e.g. true)

— are not objects. They are immutable, atomic values and do not have a prototype chain you can safely extend.

JavaScript temporarily “boxes” these values in wrapper objects (like new Number(42)) when you access methods such as .toString(). However, you cannot subclass the primitive type itself or reliably add custom methods to its prototype.

⚠️ For example, extending Number using class MyNumber extends Number works on the object wrapper, but not on actual primitive values like 42.

⸻

### ✅ Safe Alternative: Use a Utility Wrapper

### Example: Add .isEven() with a Custom Class

Instead of trying to extend a primitive, create a utility class:

```javascript
class SafeNumber {
    constructor(value) {
        this.value = value;
    }

    isEven() {
        return this.value % 2 === 0;
    }
}

// Use it
const myNum = new SafeNumber(10);
console.log(myNum.isEven()); // true
```

How would this look like in a function:

```javascript

class SafeNumber {
    constructor(value) {
        this.value = value;
    }

    isEven() {
        return this.value % 2 === 0;
    }
}

// Function that takes a number and returns whether it's even
const checkIfEven = (num) => {
    const safe = new SafeNumber(num);
    return safe.isEven();
};

// Test it
console.log(checkIfEven(10)); // true
console.log(checkIfEven(7));  // false
```

## 🧠 How It Works
	•	SafeNumber is a wrapper around the primitive number.
	•	isEven() is scoped only to SafeNumber instances.
	•	No global changes to Number.prototype.

⸻

## 🪞 Reverse Words for Strings

Avoid String.prototype.reverseWords = .... Instead, use a utility class:

```javascript
class StringTools {
    static reverseWords(str) {
        return str.split(' ').reverse().join(' ');
    }
}

// Use it
console.log(StringTools.reverseWords("hello world from JavaScript"));
// Output: "JavaScript from world hello"
```

## 🧠 How It Works
	•	StringTools is a static class with a static method.
	•	No need to create an instance of StringTools.
	•	Keeps reverseWords() in one place.

⸻

## 🔍 Verification and Safety

No need to check Object.getOwnPropertyNames() or worry about conflicts. With classes:
	•	Methods are isolated to instances or static scopes.
	•	You can freely name or overload methods without touching shared global behavior.

⸻

## ✅ Best Practices
	•	Use inheritance or wrapper classes instead of modifying prototypes.
	•	Prefer static utility methods for stateless string/number manipulations.
	•	Only subclass built-ins like Array when the new type behaves like the original.

## 📝 Summary

| What You Want to Do       | Safe Alternative                                              |
|---------------------------|--------------------------------------------------------------|
| Add array logic           | `class CustomArray extends Array`                            |
| Add number methods        | `class SafeNumber { constructor(val) }`                      |
| String utilities          | `class StringTools { static yourMethod(str) }`               |
| Avoid prototype issues    | Don’t modify `Class.prototype`, use classes/utilities instead |

⸻
