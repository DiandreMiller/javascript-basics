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

};

console.log('rotate:', rotate([1,2,3,4,5,6,7], 17));
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
   
}


console.log('containsDuplicate:', containsDuplicate([1,1,1,3,3,4,3,2,4,2]));

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

};

console.log('findDisappearedNumbers:', findDisappearedNumbers([4,3,2,7,8,2,3,1]));

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
   
}

console.log('mergeArrays:', mergeArrays([2, 4, 7, 10], [2, 3]));


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

 
}

