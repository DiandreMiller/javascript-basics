

// 1. Global vs Function Context
// 	•	Define a function whoAmI() that logs this.
// 	•	Call it in the global scope.
// 	•	Then call it in strict mode.

// [object Window] // or global object in Node
// undefined



// 2. Object Method Context
// 	•	Create an object person with a sayHello() method that logs this.name.
// 	•	Set name to “Alex”.
// 	•	Call sayHello().



// 3. Arrow Function Context
// 	•	Create an object animal with a name property set to "Dog".
// 	•	Add a method speak as an arrow function that logs this.name.
// 	•	Call animal.speak() 



// 4. Constructor Function Context
// 	•	Create a constructor function Car that takes model as a parameter.
// 	•	Inside the constructor, assign this.model = model.
// 	•	Add a method displayModel() to the prototype that logs this.model.
// 	•	Create a new Car with model "Tesla" and call displayModel().


// 5. Class Method vs Arrow Function in Class
// 	•	Create a class Student with:
// 	•	A name property
// 	•	Two methods:
// 	•	sayName() as a regular method
// 	•	sayNameArrow() as an arrow function assigned in the constructor
// 	•	Create an instance with name "Jamie" and call both methods.
// 	•	Then assign both methods to variables and call them to see how this behaves.


// 6. Explicit Binding with bind()
// 	•	Create a function introduce() that logs this.language.
// 	•	Create an object coder with a language property set to "JavaScript".
// 	•	Use bind() to permanently bind introduce to coder.
// 	•	Call the bound function.


// 7. Using call()
// 	•	Create a function describeColor() that logs this.color.
// 	•	Create an object car with color: "red".
// 	•	Call describeColor() with car as the this context using .call().



// 8. setTimeout and this
// 	•	Create an object counter with a count property starting at 0.
// 	•	Add a method start() that uses setTimeout and tries to increment this.count.
// 	•	First, use a regular function inside setTimeout (to show why it fails).
// 	•	Then refactor using an arrow function.



// 9. Event Listener and this
// 	•	Create a <button> element in HTML.
// 	•	Add two event listeners:
// 	•	One using a regular function that logs this.
// 	•	One using an arrow function that logs this.
// 	•	Click the button and observe how this differs in each.

// Do this question in oop/this/this.html



// 10. forEach and this
// 	•	Create an object team with a property name: "Dev Team".
// 	•	Add a method listMembers() that takes an array of names and uses forEach to log:
// "Dev Team member: [name]"
// 	•	First, write it with a regular function inside forEach (will cause a this issue).
// 	•	Then, fix it using an arrow function or bind.