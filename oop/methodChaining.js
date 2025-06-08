//run npm install chalk 

// 🔧 1. Create a TodoList class with method chaining

// Build a class to manage a todo list with methods like .addTask(task), 
// .removeTask(index), .clear(), and .printTasks(), all supporting chaining.

// 🔁 2. Design a StringBuilder class

// This class should allow chaining of string manipulations like .append(str), 
// .prepend(str), .toUpperCase(), and .print().

// ⏰ 3. Make a Timer class

// Build a class with .start(), .pause(), .reset(), and .status() methods 
// that support chaining (you can simulate time using simple logs).

// 📊 4. Build a StatsTracker

// Track numerical stats with .add(number), .subtract(number), .multiply(number), 
// and a .getTotal() (note: getTotal() should not be chainable).

// 💵 5. Extend the BankAccount class

// Add .setOwner(name) and .transferTo(otherAccount, amount) methods to your 
// BankAccount class with chaining.

// 📐 6. Create a Rectangle class

// Allow chaining for .setWidth(w), .setHeight(h), .scale(factor), and .printArea().


// 🎨 7. Style builder class for HTML elements

// Simulate a class .setColor(), .setFontSize(), .setBackground(), .apply() 
// to “apply styles” (logged as output).



// 🔄 8. Chainable Calculator

// Create a Calculator class with .add(), .subtract(), .multiply(), .divide() 
// and a .value() method that returns the result (non-chainable).


// 🎶 9. MusicPlayer Simulation

// Build a class with .play(song), .pause(), .next(), .stop() methods to 
// simulate audio controls (chainable).


// 🔄 10: Implement a ChainLogger Class

// Create a class called ChainLogger that lets you collect log messages using method chaining. 
// The messages should not print right away. Instead, they should be saved in an array, and only 
// printed when .flush() is called.

// ✅ Your ChainLogger class should:
// 	1.	Have a messages array to store logs.
// 	2.	Include three methods:
// 	•	.log(message) — for regular messages
// 	•	.warn(message) — for warning messages
// 	•	.error(message) — for error messages
// 	3.	Each method should push an object into the messages array like this:

// { type: 'log', message: 'App started' }

// 4.	Each method should return this, so you can chain multiple calls like:

// logger.log('Start').warn('Be careful').error('Something broke')

// 5.	Include a .flush() method that:
// •	Loops through the stored messages
// •	Prints each message to the console using the appropriate console method:
// •	console.log() for log
// •	console.warn() for warn
// •	console.error() for error
// •	(Optional) Use chalk to color the output
// •	Clears the messages array afterward


// const logger = new ChainLogger();

// logger
//   .log('Starting app')
//   .warn('Low memory')
//   .error('Crash!')
//   .flush();


// log: Starting app
// warn: Low memory
// error: Crash!


// (And if you’re using chalk, those lines would be in green, yellow, and red.)

// ⸻
