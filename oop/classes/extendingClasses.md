# Extending Existing JavaScript Classes with Custom Methods

JavaScript allows you to extend built-in classes like `Array`, `String`, and `Object` by modifying their prototypes. This means you can define your own custom methods and use them as if they were native to the language.

---

## 📌 Why Extend Built-in Classes?

- To add utility methods that are commonly used in your codebase.
- To encapsulate reusable logic directly on the data types.
- To make your code more expressive and readable.

> ⚠️ **Caution**: Modifying built-in prototypes can lead to conflicts or unexpected behavior in larger applications or with third-party libraries. Use this pattern only when you control the codebase.

---

## ✅ How to Add a Custom Method

You can use `Object.assign()` to safely and clearly extend a prototype:

### Example: Add a `.diandre()` Method to Arrays

```javascript
const center = {
    diandre() {
        const middle = Math.floor(this.length / 2);
        return this[middle];
    }
};

// Add the method to all arrays
Object.assign(Array.prototype, center);

// Use it
const returnMiddleNumber = (arr) => {
    return arr.diandre();
};

console.log('returnMiddleNumber:', returnMiddleNumber([1, 2, 3, 4, 5, 6, 7])); 
// Output: 4
```

🧠 How It Works
	•	Array.prototype is the shared object from which all arrays inherit.
	•	By assigning a method to it, all arrays gain access to that method.
	•	Inside the method, this refers to the array the method was called on.


🔍 Verifying the Method Was Added

You can inspect the prototype to confirm your method exists:
```javascript
console.log(Object.getOwnPropertyNames(Array.prototype));
```

This will include "diandre" alongside standard methods like "push", "pop", etc.

💡 More Examples

Add a reverseWords() method to String:

```javascript
String.prototype.reverseWords = function() {
    return this.split(' ').reverse().join(' ');
};

console.log("hello world from JavaScript".reverseWords());
// Output: "JavaScript from world hello"
```

✅ Best Practices
	•	Prefix your method names uniquely (e.g., diandre, customX) to avoid naming conflicts.
	•	Consider using utility libraries (like Lodash) for shared methods in production apps.
	•	Avoid overwriting or shadowing existing native methods.

    
Custom methods on built-in classes are powerful for learning and prototyping. Just use them wisely in collaborative or production environments.

### Summary
| What You Can Do         | How                                                         |
|--------------------------|--------------------------------------------------------------|
| Add custom array logic   | `Object.assign(Array.prototype, { yourMethod })`             |
| Add custom string logic  | `String.prototype.yourMethod = function() {}`                |
| Verify new methods       | `Object.getOwnPropertyNames(Class.prototype)`                |