// Find the bug
class Vehicle {
    move() {
        console.log('Moving');
    }
}

class Car {
    honk() {
        console.log('Beep!');
    }
}

const myCar = new Car();
myCar.move();



//Find the bug
class Counter {
    constructor() {
        this.count = 0;
    }

    increment() {
        count++;
    }
}

const counter = new Counter();
counter.increment();
console.log(counter.count);