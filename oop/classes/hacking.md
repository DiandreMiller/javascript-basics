Alright, here’s a fun (but dangerous) way to hack it:
We’ll manually set a Person’s prototype to Array.prototype!

⸻

Example:

// Your original Person class

```javascript
class Person {
    constructor(name) {
        this.name = name;
    }

    sayName() {
        console.log(`Hello, my name is ${this.name}`);
        return `Hello, my name is ${this.name}`;
    }
}

// Extend Person's prototype manually to Array.prototype
Object.setPrototypeOf(Person.prototype, Array.prototype);

// Now create a person
const Diandre = new Person('Diandre');

// It still works normally:
Diandre.sayName(); // "Hello, my name is Diandre"

// But now you can ALSO call array methods like .last()!
Array.prototype.last = function() {
    return this[this.length - 1];
};

// Let's fake Diandre into being an array:
Diandre.push('Hello');
Diandre.push('World');
console.log(Diandre.last()); // Outputs: "World"
```

😱 What just happened?
	•	We changed Person.prototype’s parent to Array.prototype.
	•	That means any Person instance (like Diandre) can now access array methods, including your .last() method.

BUT:
	•	Diandre is still not a real array deep down (no automatic length tracking, etc).
	•	This kind of mutation can break your app, confuse other developers, and cause bugs.
	•	It’s super bad practice in production code.

⸻

✅ Takeaway:
	•	Yes, you can make Person instances access array methods.
	•	But you should never modify core prototype chains (Array.prototype, Object.prototype, etc) for real apps unless you 1000% know what you’re doing.

Would you like me to also show a better, safer way to give just one Person (not every Person) an extra last() method? 🔥 (no prototype hacking needed)

Awesome — here’s a much safer and better way to do it:
✅ We only give one Person instance (or a few) a .last() method — without touching prototypes at all!

Safer Way:

```javascript
class Person {
    constructor(name) {
        this.name = name;
    }

    sayName() {
        console.log(`Hello, my name is ${this.name}`);
        return `Hello, my name is ${this.name}`;
    }
}

// Create a specific person
const Diandre = new Person('Diandre');

// Add a custom last() method ONLY to Diandre
Diandre.last = function(arr) {
    return arr[arr.length - 1];
};

// Now you can use sayName and last separately
Diandre.sayName();               // "Hello, my name is Diandre"
console.log(Diandre.last([1,2,3,4]));  // Outputs: 4
```

🔥 What’s happening here?
	•	Diandre is a normal Person.
	•	But only Diandre has a .last() method attached.
	•	You did not mess with Person.prototype, Array.prototype, or any global objects.
	•	Other Person instances won’t have .last(), unless you also add it to them.

Example:

```javascript
const Libby = new Person('Libby');
Libby.sayName();
// Libby.last([1,2,3]); ❌ ERROR: Libby.last is not a function
```

✅ Why this is better:
	•	No side effects.
	•	No risk of breaking JavaScript’s core objects.
	•	Only adds behavior where you explicitly want it.

⸻

Would you also like me to show a fancier version where every Person has an optional .last() method (but still safely)? (It would use composition instead of inheritance) 🚀

Perfect — let’s level it up! 🚀
Here’s how to safely give every Person the ability to .last(), without touching Person.prototype or hacking Array.prototype.

We’ll use composition — meaning:
→ Instead of modifying Person directly, we’ll “give” them a helper tool when needed.

⸻

Example: Every Person Gets a Last Helper

// Helper class (separate responsibility)

```javascript
class LastHelper {
    static last(arr) {
        return arr[arr.length - 1];
    }
}

class Person {
    constructor(name) {
        this.name = name;
        this.helper = new LastHelper(); // composition: has-a relationship
    }

    sayName() {
        console.log(`Hello, my name is ${this.name}`);
        return `Hello, my name is ${this.name}`;
    }

    last(arr) {
        return this.helper.constructor.last(arr);
    }
}

// Create Persons
const Diandre = new Person('Diandre');
const Libby = new Person('Libby');

Diandre.sayName();
console.log(Diandre.last([1,2,3,4])); // Outputs 4

Libby.sayName();
console.log(Libby.last(['apple', 'banana', 'cherry'])); // Outputs 'cherry'
```

🔥 Key points:
	•	LastHelper is a separate class whose job is just: “I know how to find the last element of an array.”
	•	Person has-a LastHelper, meaning: it uses its service.
	•	No global modifications at all.
	•	Super clean — and you could easily replace or extend LastHelper later without touching Person.

⸻

🧠 Bonus Tip:

You could even skip making new LastHelper() if you only use static methods!
Like this:

```javascript
this.helper = LastHelper; // no "new", just use the class itself
```

because LastHelper.last() is a static method.