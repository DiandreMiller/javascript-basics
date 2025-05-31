//Find the bugs.

// 1.

class CustomArray extends Array {
  getMiddle() {
      const middle = Math.ceil(this.length / 2);
      return this[middle];
  }
}

const nums = new CustomArray(10, 20, 30, 40, 50);
console.log(nums.getMiddle()); 

//2. 

class SafeNumber {
  constructor(value) {
      let value = value; 
  }

  isOdd() {
      return this.value % 2 !== 0;
  }
}

const result = new SafeNumber(3);
console.log(result.isOdd()); 

// 3.

class StringTools {
  reverseWords(str) {
      return str.split(' ').reverse().join(' ');
  }
}

const tools = new StringTools();
console.log(tools.reverseWords("JavaScript is fun"));


//4. 

class CustomArray extends Array {
  removeEvens() {
      this = this.filter(num => num % 2 !== 0);
      return this;
  }
}

const numbers = new CustomArray(1, 2, 3, 4, 5);
console.log(numbers.removeEvens());