
// How will you check a given data is object or not?

// Method - 1 :  
// Approach - 1 :

// function isObject(data) {
//     if(typeof data !== "object"){
//         return "Not an object";
//     }
//     else{
//         if(data == null){
//             return "Not an object";
//         }
//         else if(Array.isArray(data)){
//             return "Not an object";
//         }
//     }
//     return "It is an object";
// }

// console.log(isObject(15));
// console.log(isObject("15"));
// console.log(isObject(null));
// console.log(isObject([15]));
// console.log(isObject(true));
// console.log(isObject({a: 15}));

/////////////////////////////////////////////////////////////////////////////////////////////

// Method - 1 :  
// Approach - 2 :

// function isObject(data) {
//     if(typeof data === "object" && data != null && !Array.isArray(data)){
//         return true;
//     }
//     return false;
// }

// console.log(isObject(15));
// console.log(isObject("15"));
// console.log(isObject(null));
// console.log(isObject([15]));
// console.log(isObject(true));
// console.log(isObject({a: 15}));



/////////////////////////////////////////////////////////////////////////////////////////////


// Method - 2 :

function isObject(data) {
    return Object.prototype.toString.call(data);
}

console.log(isObject(15));      // [object Number]
console.log(isObject("15"));    // [object String]
console.log(isObject(null));    // [object Null]
console.log(isObject([15]));    // [object Array]
console.log(isObject(true));    // [object Boolean]
console.log(isObject({a: 15})); // [object Object]