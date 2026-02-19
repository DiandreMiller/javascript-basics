// Given an integer array nums, rotate the array to the right by k steps, where k is non-negative. 

// Example 1:

// Input: nums = [1,2,3,4,5,6,7], k = 3
// Output: [5,6,7,1,2,3,4]
// Explanation:
// rotate 1 steps to the right: [7,1,2,3,4,5,6]
// rotate 2 steps to the right: [6,7,1,2,3,4,5]
// rotate 3 steps to the right: [5,6,7,1,2,3,4]
// Example 2:

// Input: nums = [-1,-100,3,99], k = 2
// Output: [3,99,-1,-100]
// Explanation: 
// rotate 1 steps to the right: [99,-1,-100,3]
// rotate 2 steps to the right: [3,99,-1,-100]
 

// Constraints:

// 1 <= nums.length <= 105
// -231 <= nums[i] <= 231 - 1
// 0 <= k <= 105
 
var rotate = function(nums, k) {

    const remainerRotation = k % nums.length;

    const emptyArray = new Array(nums.length);

    let first = 0;

    for(let i = remainerRotation; i < nums.length; i++) {
        emptyArray[i] = nums[first];
        first++;
    }

    const remainingNumbers = nums.slice(-remainerRotation);

    for(let i = 0; i < remainingNumbers.length; i++) {
        emptyArray[i] = remainingNumbers[i];
    }
    return emptyArray;
};

// console.log('rotate:', rotate([-1,-100,3,99], 2));
// Given an integer array nums, return true if any value appears at least twice in the array, and 
// return false if every element is distinct.

 

// Example 1:

// Input: nums = [1,2,3,1]

// Output: true

// Explanation:

// The element 1 occurs at the indices 0 and 3.

// Example 2:

// Input: nums = [1,2,3,4]

// Output: false

// Explanation:

// All elements are distinct.

// Example 3:

// Input: nums = [1,1,1,3,3,4,3,2,4,2]

// Output: true

 

// Constraints:

// 1 <= nums.length <= 105
// -109 <= nums[i] <= 109

function containsDuplicate(nums) {

    const DuplicateMap = new Map();

    for(let i = 0; i < nums.length; i++) {
        if(!DuplicateMap.has(nums[i])) {
            DuplicateMap.set(nums[i], 1)
        } else {
            return true
        }
    }
   return false;
}


// console.log('containsDuplicate:', containsDuplicate([1,2,3,4]));

// Given an array nums of n integers where nums[i] is in the range [1, n], return an array of 
// all the integers in the range [1, n] that do not appear in nums.

 

// Example 1:

// Input: nums = [4,3,2,7,8,2,3,1]
// Output: [5,6]
// Example 2:

// Input: nums = [1,1]
// Output: [2]
 

// Constraints:

// n == nums.length
// 1 <= n <= 105
// 1 <= nums[i] <= n

function findDisappearedNumbers(nums) {

   const IndexMap = new Map();

   const NumberArray = new Array(nums.length);

   let end = nums.length - 1;

   for(let i = nums.length; i > 0; i--) {
    NumberArray[end] = i;
    end--;
   }

   console.log('NumberArray:', NumberArray);

   for(let i = 0; i < NumberArray.length; i++) {
    if(!IndexMap.has(NumberArray[i])) {
        IndexMap.set(NumberArray[i], true);
    }
   }

   console.log('IndexMap:', IndexMap);

   for(let i = 0; i < nums.length; i ++) {
    if(IndexMap.has(nums[i])) {
        IndexMap.delete(nums[i])
    }
   }

   console.log('IndexMap after delete:', IndexMap);

   return Array.from(IndexMap.keys());
};

// console.log('findDisappearedNumbers:', findDisappearedNumbers([1,1]));

// Given two sorted arrays nums1 and nums2, merge them into one sorted array.

// Input: nums1 = [1,2,3], nums2 = [2,5,6]
// Output: [1,2,2,3,5,6]

// Input: nums1 = [2, 4, 7, 10], nums2 = [2, 3]
// Output:
// [2, 2, 3, 4, 7, 10]

// Input: nums1 = [1, 5, 9, 10, 15, 20], nums2 = [2, 3, 8, 13]
// Output: [1, 2, 3, 5, 8, 9, 10, 13, 15, 20]

// Input: nums1 = [0, 1], nums2 = [2, 3]
// Output: [0, 1, 2, 3]

// Constraints:
// 1 <= nums1.size(), nums2.size() <= 105
// 0 <= a[i], b[i] <= 107

function mergeArrays(nums1, nums2) {

    const sortedArray = [];

    let firstArrayStart = 0;
    let secondArrayStart = 0

    let combinedLength = nums1.length + nums2.length;

    while(combinedLength > 0) {
        if(nums1[firstArrayStart] < nums2[secondArrayStart] || nums2[secondArrayStart] === undefined) {
            sortedArray.push(nums1[firstArrayStart]);
            firstArrayStart++;
            combinedLength--;
        } else if (nums1[firstArrayStart] === nums2[secondArrayStart]) {
            sortedArray.push(nums1[firstArrayStart], nums2[secondArrayStart]);
            firstArrayStart++;
            secondArrayStart++
            combinedLength -= 2;
        } else if(nums2[secondArrayStart] < nums1[firstArrayStart] || nums1[firstArrayStart] === undefined) {
            sortedArray.push(nums2[secondArrayStart])
            secondArrayStart++;
            combinedLength--;
        }
    }
    
   return sortedArray;
}

console.log('mergeArrays:', mergeArrays([1], [1,1,1,1]));


// Given an array of integers arr, return true if and only if it is a valid mountain array.

// Recall that arr is a mountain array if and only if:

// arr.length >= 3
// There exists some i with 0 < i < arr.length - 1 such that:
// arr[0] < arr[1] < ... < arr[i - 1] < arr[i] 
// arr[i] > arr[i + 1] > ... > arr[arr.length - 1]

// Example 1:
// Input: arr = [2,1]
// Output: false

// Example 2:
// Input: arr = [3,5,5]
// Output: false

// Example 3:
// Input: arr = [0,3,2,1]
// Output: true

//Example 4: 
// Input: arr = [0,2,3,4,5,2,1,0];
// Output: true

// Example 5: 
// Input: arr = [0,2,3,3,5,2,1,0];
// Output: false

function validMountainArray(arr) {

    let start = 0;
    let next = 1;
    const max = Math.max(...arr);

    if (arr[0] === max || arr[arr.length - 1] === max) {
        return false;
    }

    while (arr[start] < arr[next]) {
        start++;
        next++;
    }

    if (arr[start] === max) {
        while (next < arr.length && arr[start] > arr[next]) {
            start++;
            next++;
        }
    } else {
        return false;
    }

    return next === arr.length;
}

// console.log('validMountainArray:', validMountainArray([1]));
