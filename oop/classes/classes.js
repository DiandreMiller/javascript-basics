// 1.	Create and Inherit a Method
// •	Create a vehicle object with a move() method.
// •	Create a car object that inherits from vehicle.
// •	Call move() from car.


//Expected Output: 
// The Vehicle is moving


// 2.   Class with Instance Method
// 	•	Create a Book class that takes title and author as arguments in its constructor.
// 	•	Add a describe() method inside the class that logs the book’s title and author.
// 	•	Create two instances of Book and call describe() on each.


// Expected Output:
// The title of this book is The Giver. Its author is Lois Lowry.
// The title of this book is 1984. Its author is George Orwell.



// 3.   Static Method
// •	Create a class Calculator with a static method multiply(a, b) that returns the product.
// •	Call Calculator.multiply(4, 5).



// Expected Output:
// 20



// 4.   Class Inheritance
// 	•	Create a Person class with a sayName() method.
// 	•	Create an Employee class that extends Person.
// 	•	Add a work() method to Employee.
// 	•	Create an instance of Employee and call both sayName() and work().


// Expected Output
// Hello, my name is Sam
// I am working as a Developer


// 5. Using Classes Instead of Object.create
// 	•	Create a Shape class with a type property and a describe() method.
// 	•	Create a Circle class that extends Shape.
// 	•	In Circle, set type to "circle" and call describe().


// Expected Output:
// This is a circle.


// 6. Getter Method
// 	•	Create a Rectangle class with width and height properties.
// 	•	Add a getter called area that returns the area of the rectangle.
// 	•	Create an instance and log its area.

// Expected Output: 
// Area: 50




// 7. Setter Method
// 	•	Extend the Rectangle class from #6.
// 	•	Add a setter dimensions that sets both width and height from an object.
// 	•	Update the dimensions and log the new area.

// Expected Output:
// Area: 200






// 8. Private Field
// 	•	Create a BankAccount class with a private field #balance.
// 	•	Add deposit(amount) and getBalance() methods.
// 	•	Try to access #balance directly outside the class (expect an error).

// Expected Output:
// Deposited: $100
// Balance: 100
// // Error accessing private field





// 9. Static Property
// 	•	Create a Company class with a static property companyName set to "TechCorp".
// 	•	Log the company name without creating an instance.

// Expected Output:
// TechCorp




// 10. Factory Method
// 	•	Create a User class with a static method createGuest() that returns a new user named "Guest" with age 0.
// 	•	Create a guest user and log its name and age.

// Expected Output:
// Guest, 0





// 11. Class Field Syntax
// 	•	Create a User class with class field properties name = "Anonymous" and isAdmin = false.
// 	•	Create an instance and log the default values.

// Expected Output:
// Anonymous
// false




// 12. Custom Error Class
// 	•	Create a ValidationError class that extends Error.
// 	•	Throw a new ValidationError with a message "Invalid email!" and catch it.

// Expected Output:
// Caught Error: Invalid email!




// 13. Mixin Behavior
// 	•	Define a speak() method in a mixin object.
// 	•	Use Object.assign() to add it to a class Dog.
// 	•	Call speak() from a Dog instance.

// Expected Output:
// Buddy speaks.




// 14. Extending Built-In Object
// 	•	Create a SmartArray class that extends Array.
// 	•	Add a method first() that returns the first element.
// 	•	Use it on an array instance.

// Expected Output:
// 1




// 15. Overriding Method in Subclass
// 	•	Create an Animal class with a speak() method.
// 	•	Create a Cat subclass that overrides speak() to log "Meow".
// 	•	Create a Cat instance and call speak().

// Expected Output:
// Meow