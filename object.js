
// Object destructuring

const obj = {
    nam: "Rohan",
    city: "Karwar",
    gender: "Male",
    rollNum: 1
}

let {rollNum, nam, ...bio} = obj;

// let {...bio, nam} = obj;   --> This will throw an error as rest element must be last in a destructuring pattern.

console.log(nam);
console.log(bio);
console.log(rollNum);