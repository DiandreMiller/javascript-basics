// Find the bug

class Timer {
    #seconds = 0;
  
    start() {
      setInterval(function () {
        this.#seconds++;
        console.log(this.#seconds);
      }, 1000);
    }
  }
  
  const timer = new Timer();
  timer.start(); // Throws TypeError: Cannot read private member 
  // #seconds from an object whose class did not declare it