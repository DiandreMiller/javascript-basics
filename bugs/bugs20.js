// Find the bugs

// 1. 
function capitalize(str) {
    str[0] = str[0].toUpperCase();
    return str;
}
console.log(capitalize('hello')); // Expected: 'Hello'

// 2.
