// Find the bugs

// 1. 
function capitalize(str) {
    str[0] = str[0].toUpperCase();
    return str;
}
console.log(capitalize('hello')); // Expected: 'Hello'

// 2.
function appendToNumber(num) {
    num.push(42);
    return num;
}
console.log(appendToNumber(7)); // Expected: [7, 42]