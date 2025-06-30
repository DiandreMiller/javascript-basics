// Find the bug

//1. 

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

  
//2.

class BuggyButton {
    constructor(label) {
      this.label = label;
    }
  
    handleClick() {
      console.log(`Button clicked: ${this.label}`);
    }
  }
  
  const button = new BuggyButton('Submit');
  

  const callback = button.handleClick;
  callback(); 


  //3,

  class BuggyReminder {
    constructor(message) {
      this.message = message;
    }
  
    get remind() {
      console.log(`Reminder: ${this.message}`);
    }
  
    start() {
      setTimeout(this.remind, 1000); 
    }
  }
  
  const reminder = new BuggyReminder('Time to stretch!');
  reminder.start();
