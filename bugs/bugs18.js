// 🧩 1. Global Context (Strict Mode)

// Problem:
// Fix this function so that this is not undefined in strict mode:

"use strict";
function show() {
  console.log(this); // currently undefined
}
show();

// Find the bug

const user = {
    name: "Luna",
    greet: () => {
      console.log(this.name);
    }
  };
user.greet();

// Find the bug

class Timer {
    count = 0;
    start() {
      setInterval(function () {
        this.count++;
      }, 1000);
    }
  }