// Problem:
// Write a function that checks whether a given property exists in an object.
  // // Example:
  // hasProperty({ name: "Alice", age: 30 }, "name"); // true
  // hasProperty({ name: "Alice" }, "email"); // false

  function hasProperty(obj, prop) {
    
  }

  console.log('hasProperty:', hasProperty({ name: "Alice", age: 30 }, "email"))
  console.log('hasProperty:', hasProperty({ name: "Alice", age: 30 }, "email"))

//Invert a Key-Value Object
// Problem:
// Given an object, return a new object with the keys and values flipped.
  // Example:
// invertObject({ a: "x", b: "y", c: "z" });
// Output: { x: "a", y: "b", z: "c" }

function invertObject(obj) {

}

console.log('invertObject:', invertObject({ a: "x", b: "y", c: "z" }));
  


// Problem:
// Write a function that takes an object, a key, and a value. If the key exists, 
// update it. If not, add it.

  function updateProperty(obj, key, value) {
   
  }
  
  // Example:
  // let obj = { name: "Bob" };
  // updateProperty(obj, "age", 25);
  // console.log(obj); // { name: "Bob", age: 25 }


//   Remove All undefined Properties
//   Problem:
//   Write a function that removes all properties with a value of undefined from an object.

  function removeUndefined(obj) {

  }

  console.log('removeUndefined:', removeUndefined({ a: 1, b: undefined, c: null }))
  
  // Example:
  removeUndefined({ a: 1, b: undefined, c: null }); // { a: 1, c: null }
  
  
  

  // Count the Frequency of Elements
// Problem:
// Given an array of strings, return an object that counts how many times each 
// string appears.


// Example:
// countFrequency(["apple", "banana", "apple", "orange", "banana", "apple"]);
// Output: { apple: 3, banana: 2, orange: 1 }

function countFrequency(arr) {

}

console.log('countFrequency:', countFrequency(["apple", "banana", "apple", "orange", "banana", "apple"]))

//  Check if Two Objects are Equal
Problem:
// Write a function that checks if two objects have the same keys and values.

// Example:
// areObjectsEqual({ a: 1, b: 2 }, { b: 2, a: 1 }); // true
// areObjectsEqual({ a: 1 }, { a: 1, b: 2 }); // false

function areObjectsEqual(obj1, obj2) {
 

}

console.log('areObjectsEqual:', areObjectsEqual({ a: 1, b: 2 }, { b: 2, a: 1 }));
console.log('areObjectsEqual:', areObjectsEqual({ a: 1 }, { a: 1, b: 2 }));





