// Write a function that removes duplicate values from a nested array while 
//preserving its structure (PHP)

// Example usage
const nestedArray = [
  [1, 2, 2, [3, 4, 4], 5],
  [1, [2, [3, 3], 4], 5],
  [1, 2, [3, [4, 4], 5]],
  1
];

//Expected Output:
[
  [1, 2, [3, 4], 5],
  [1, [2, [3], 4], 5],
  [1, 2, [3, [4], 5]],
  1
]

//Example Input 2
const nestedArray2 = [
  [1, 1, 2, [3, 3, [4, 4, 4], 5], 5],
  [1, [2, 2, [3, [4, 4], 5]], 5],
  1
];

//Example Output 2
[
  [1, 2, [3, [4], 5]],
  [1, [2, [3, [4], 5]]]
]

const uniqueValuesOnly = (arr, unique = new Set()) => {

    const result = [];

    for(let i = 0; i < arr.length; i++) {
        if(Array.isArray(arr[i])) {
            console.log('arr1:', arr[i])
            result.push(uniqueValuesOnly(arr[i], unique))
        } else {
            if(!unique.has(arr[i])) {
                unique.add(arr[i]);
                result.push(arr[i])
                console.log('arr2:', arr[i]);
            }
        }
    }

    return result;
}

console.log('uniqueValuesOnly:', uniqueValuesOnly(nestedArray))