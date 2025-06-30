// Find the bug

//1.

class BuggyGreeter {
    constructor(name) {
      this.name = name;
    }
  
    greet = () => {
      console.log(`Hello, ${this.name}`);
    }
  }
  
  const greeter = new BuggyGreeter('Alex');
  const sayHi = greeter.greet;
  sayHi(); 

  //2. 

class BuggyTimer {
    constructor() {
      this.seconds = 0;
    }
  
    start() {
      setTimeout(function () {
        this.seconds++;
        console.log(`Seconds: ${this.seconds}`);
      }, 1000);
    }
  }
  
  const timer = new BuggyTimer();
  timer.start(); 

  
  //3.

class BuggyButton {
    constructor(label) {
      this.label = label;
    }
  
    handleClick() {
      console.log(`Button clicked: ${this.label}`);
    }
  }
  
  const button = new BuggyButton('Submit');
  document.addEventListener('click', button.handleClick); 