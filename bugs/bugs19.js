//Review Find the bugs:

// 1. 
function reverseStringBug(str) {
    return str.split('').reverse; 
}
console.log(reverseStringBug('hello')); // should print 'olleh'



// 2. 
function reverseNumber(num) {
    if (num < 0) {
        return -Number(num.toString().reverse());
    }
    return Number(num.toString().split('').reverse());
}
console.log(reverseNumber(-123)); 


//3. 
function sumOdds(arr) {
    let sum = 0;
    for (let num of arr) {
        if (num % 2 !== 0) {
            sum =+ num; 
        }
    }
    return sum;
}
console.log(sumOdds([1,3,5])); // should print 9


// 4. 
function updateArray(arr) {
    const copy = arr;
    copy[0] = 99;
    return copy;
}
const original = [1,2,3];
console.log(updateArray(original));
console.log(original); // original shouldn't change

// 5. 
function addSumArray(nums) {
    let sum = 0;
    return nums.map(num => sum += num);
}
console.log(addSumArray([1,2,3]));

// 6. 
function doubleEvens(arr) {
    arr.forEach(num => {
        if (num % 2 === 0) {
            num *= 2;
        }
    });
    return arr;
}
console.log(doubleEvens([1,2,3,4]));


// 7.
function getFullName(user) {
    return `${user.first} ${user.lastName}`;
}
console.log(getFullName({ firstName: 'Jane', lastName: 'Doe' }));


// 8. 
const obj = {
    name: 'Tom',
    greet: () => {
        console.log(`Hello ${this.name}`);
    }
};
obj.greet();


// 9. 
class Animal {
    constructor(name) {
        this.name = name;
    }
}
class Dog extends Animal {
    constructor(breed) {
        super();
        this.breed = breed;
    }
}
const d = new Dog('Labrador');
console.log(d.name, d.breed);


// 10. 
class MathUtils {
    static add(a,b) {
        return a + b;
    }
}
const utils = new MathUtils();
console.log(utils.add(2,3));


// 11.
class Person {
    constructor(name) {
        this.name = name;
    }
    name() {
        return this.name.toUpperCase();
    }
}
const p = new Person('Bob');
console.log(p.name());


// 12. 
class Vehicle {
    move() {
        console.log("Moving");
    }
}
class Car {
    honk() {
        console.log("Honk!");
    }
}
const c = new Car();
c.move();


// 13.
class Counter {
    constructor() {
        this.count = 0;
    }
    inc() {
        this.count++;
    }
}
const counter = new Counter();
counter.inc;
console.log(counter.count);


// 14. 
class Cat {
    meow() {
        console.log("Meow");
    }
}
const cat = new Cat();
cat.purr();


// 15.

class Utils {
    static multiply(a,b) {
        return a*b;
    }
}
const u = new Utils();
console.log(u.multiply(2,3));


// 16. 
class CustomArray extends Array {
    getMiddle() {
        const middle = Math.floor(this.length / 2);
        return this[middle + 1];
    }
}
const nums = new CustomArray(1,2,3,4,5);
console.log(nums.getMiddle());


// 17. 
class Box {
    constructor(value) {
        let value = value;
    }
    getValue() {
        return this.value;
    }
}
const box = new Box(5);
console.log(b.getValue());



// 18.
class StringTools {
    capitalize(str) {
        str[0].toUpperCase() + str.slice(1);
    }
}
const tools = new StringTools();
console.log(tools.capitalize("hello"));



// 19. 
class ArrayWrapper extends Array {
    removeOdds() {
        this = this.filter(n => n%2===0);
        return this;
    }
}
const a = new ArrayWrapper(1,2,3,4);
console.log(a.removeOdds());



// 20. 
class Timer {
    constructor() {
        this.seconds = 0;
    }
    start() {
        setTimeout(function() {
            this.seconds++;
            console.log(this.seconds);
        },1000);
    }
}
const t = new Timer();
t.start();



// 21. 
class Button {
    constructor(label) {
        this.label = label;
    }
    click() {
        console.log(this.label);
    }
}
const b = new Button("Ok");
const cb = b.click;
cb();



// 22. 
class Reminder {
    constructor(message) {
        this.message = message;
    }
    get remind() {
        console.log(this.message);
    }
    start() {
        setTimeout(this.remind,1000);
    }
}
const r = new Reminder("Drink water");
r.start();


// 23. 
"use strict";
function test() {
    console.log(this.name);
}
test();



// 24. 
const user = {
    name: 'Leo',
    greet: () => {
        console.log(this.name);
    }
};
user.greet();



// 25. 
class Counter {
    constructor() {
        this.count = 0;
    }
    start() {
        setInterval(function() {
            this.count++;
        },1000);
    }
}
const counter1 = new Counter();
counter1.start();
