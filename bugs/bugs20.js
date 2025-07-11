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

// 3.
function negate(bool) {
    return bool.not;
}
console.log(negate(true)); // Expected: false

// 4. 
function nullify() {
    let x = null;
    return x.value;
}
console.log(nullify()); // Expected: null


// 5.
function trimUndefined(x) {
    return x.trim();
}
console.log(trimUndefined(undefined)); // Expected: undefined


// 6. 
function nameLength(obj) {
    return obj.name.length();
}
console.log(nameLength({ name: 'Alice' })); // Expected: 5


// 7.
function incrementBigInt(big) {
    return big++;
}
console.log(incrementBigInt('1n')); // Expected: 2n


// 8.
function mergeArrays(arr1, arr2) {
    return arr1.concat(arr2).sort();
}
console.log(mergeArrays([10, 2], [1, 20]));  // Expected: [1, 2, 10, 20]


// 9.
function shallowClone(obj) {
    const clone = {};
    Object.keys(obj).forEach(key => clone.key = obj[key]);
    return clone;
}
console.log(shallowClone({ a: 1, b: 2 }));  // Expected: { a: 1, b: 2 }


// 10.
function countChars(str) {
    const counts = {};
    for (let char of str) {
        counts.char = (counts.char || 0) + 1;
    }
    return counts;
}
console.log(countChars('aabbc'));  // Expected: { a: 2, b: 2, c: 1 }


// 11. 
function unique(arr) {
    return Array.from(new Set(arr)).sort((a, b) => a-b);
}
console.log(unique(['3', '2', '1', '2']));  // Expected: ['1', '2', '3']


// 12.
function removeFalsy(arr) {
    arr.forEach(val => {
        if (!val) arr.splice(arr.indexOf(val), 1);
    });
    return arr;
}
console.log(removeFalsy([0, 1, false, 2, '', 3]));  // Expected: [1,2,3]


// 13.
function deepEqual(a, b) {
    return JSON.stringify(a) === JSON.stringify(b);
}
console.log(deepEqual({x:1,y:undefined}, {x:1}));  // Expected: false


// 14.
function toggleKey(obj, key) {
    obj[key] = !obj.key;
    return obj;
}
console.log(toggleKey({active: true}, 'active'));  // Expected: {active: false}


// 15.
function flatten(arr) {
    return arr.reduce((acc, val) => acc.concat(val), []);
}
console.log(flatten([1, [2, [3]]]));  
// Expected: [1, 2, [3]]


// 16.
function sumNumbers(arr) {
    return arr.reduce((sum, n) => {
        if (typeof n !== 'number') return;
        return sum + n;
    }, 0);
}
console.log(sumNumbers([1, '2', 3]));  // Expected: 4


// 17.
function cloneWithPrototype(obj) {
    const clone = {};
    clone.__proto__ = obj.__proto__;
    Object.assign(clone, obj);
    return clone;
}
const proto = { greet() { return 'hi'; } };
const obj = Object.create(proto);
obj.x = 1;
const cloned = cloneWithPrototype(obj);
console.log(cloned.greet());  // Expected: 'hi'


// 18.
function rotate(arr, steps) {
    steps = steps % arr.length;
    return arr.slice(steps).concat(arr.slice(0, steps));
}
console.log(rotate([1,2,3,4,5], 7));  // Expected: [4,5,1,2,3]


// 19.