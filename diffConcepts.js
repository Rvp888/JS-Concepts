
// Deep Copy

// let a = [1,2,[3,4]];
// let b = JSON.stringify(a);
// b = JSON.parse(b);
// // let b = [...a];

// console.log(a,"a");
// console.log(b,"b");

// a[2].push(5);
// console.log(a,"a");
// console.log(b,"b");




// Write a function to print Fibonacci series

// function fibona(n) {
//     let a = 0;
//     let b = 1;
//     console.log(a);
//     console.log(b);

//     for (let i = 2; i < n; i++){
//         let c = a + b;
//         console.log(c);
//         a = b;
//         b = c;
//     }
// }

// fibona(7);



// Flatten an Array without using arr.flat() method.

// First Method- The ultimate way - by Recursion

// let arr3 = [{a:1},[{b:2},[{c:3}],{d:4}],{e:5}];

// let flatArray = [];
// function flatten(array){
    
//     for(let i = 0; i < array.length; i++){
//         if(Array.isArray(array[i])){
//             flatten(array[i]);
//         }
//         else{
//             flatArray.push(array[i]);
//         }
//     }
//     return flatArray;
// }

// console.log(flatten(arr3));


// Second Method- Only works on Primitives

// let arr1 = [1,2,3,[4,[5,[6,7],8],9],10,11];

// let str1 = arr1.toString();
// let flatArr1 = str1.split(",");
// console.log(flatArr1);


// let arr2 = ['Apple','Banana',['Orange',['Grapes'],'Strawberry'],'Jack fruit'];

// let str2 = arr2.toString();
// let flatArr2 = str2.split(",");
// console.log(flatArr2);



// Factorial of a number

// function Factorial(n) {
//     if(n == 0){
//         return 1;
//     }

//     return n * Factorial(n-1);
// }

// console.log(Factorial(5));


// Memoization

// function memoizAddition() {
//     let cache = {};
//     return ((value) => {
//         if(value in cache){
//             console.log("From Cache");
//             return cache[value];
//         }
//         else{
//             console.log("From Calculation");
//             let result = value + 1;
//             cache[value] = result;
//             return result;
//         }
//     })
// }

// let addition = memoizAddition();

// console.log(addition(20));
// console.log(addition(30));
// console.log(addition(20));



// Implicit type coercion 

// console.log('10'+'10');
// console.log(typeof('10'+'10'));

// console.log('10'+10);
// console.log(typeof('10'+10));

// console.log('10'-'10');
// console.log(typeof('10'-'10'));

// console.log('10'-10);
// console.log(typeof('10'-10));

// console.log(10-'10');
// console.log(typeof(10-'10'));



// JS Strict-Mode

// "use strict"

// x = 10;
// console.log(x); // it will throw an Reference error: 'x is not defined'