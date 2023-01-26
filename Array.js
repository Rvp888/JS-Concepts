

// Array destructuring

let array = [1,2,3,4,5,6,7];

let [a, b, ...newArray] = array;

// let [...newArray, a, b] = array; --> This will throw an error as rest element must be last in a destructuring pattern.

console.log(a);
console.log(b);
console.log(newArray);