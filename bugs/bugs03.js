//Find the bug(s). 

function doubleEvenNumbers(arr) {
    arr.forEach(num => {
      if (num % 2 === 0) {
        num = num * 2;
      }
    });
    return arr;
  }

 
  
  const numbers = [1, 2, 3, 4, 5, 6];
  console.log('doubleEvenNumbers:',doubleEvenNumbers(numbers)); // Expected output: [1, 4, 3, 8, 5, 12]

//   Part 2: Explain the bugs in the code and why they exist
  