

// Concept of "this" keyword

// By default "this" keyword refers to the global object (window object).
// "this" keyword inside an object(immediate inside) refers to the global object.


// Arrow Function:
// Note: arrow function always inherits the value of "this" from it’s enclosing context.
// In simple way, the value of "this" inside an arrow function is same as if it was outside it (immediate outside).
// If it is invoked in global context, value of "this" = global object.
// If it is invoked inside(immediate inside) of an object, value of "this" = global object.
// Inside an object, If it is invoked inside(immediate inside) of a Regular function, value of "this" = that object(calling object).
// Inside an object, If it is invoked inside(immediate inside) of another Arrow function, value of "this" = global object.


// Regular Function:
// The value of "this" inside a regular function depends on where the function is invoked.
// If it is invoked in global context, value of "this" = global object.
// If it is invoked inside(immediate inside) of an object, value of "this" = that object(calling object).
// Inside an object, If it is invoked inside(immediate inside) of another function, value of "this" = global object.


// "use strict" does not work on Arrow function

// console.log(this);
// output = global object


// const arrow = () => {
//     console.log(this);
// }
// arrow();
// output = global object


// function fun(){
//     console.log(this);
// }
// fun();
// output = global object


// const object = {
//     name: this
// }
// console.log(object.name);
// output = global object


// const obj1 = {
//     name: "Rohan",
//     fun: function(){
//         console.log(this);
//     }
// }
// obj1.fun();
// // output = obj1


// const obj2 = {
//     name: "Rohan",
//     fun: () => {
//         console.log(this);
//     }
// }
// obj2.fun();
// // output = global object



// const person = {
//     name: "Rohan",
//     fun: () => {
//         console.log(this);
//     }
// }
// person.fun();
// // output = global object;


// const people = {
//     name: "Rohan",
//     fun: function(){
//         return () => {console.log(this)};
//     }
// }
// people.fun()();
// // output = people object;  
// // Note: arrow function always inherits the value of "this" from it’s enclosing context ( Here it is fun() )
// // In simple way, the value of "this" inside an arrow function is same as if it was outside it (immediate outside).
// // fun() methods this keyword also refers to the object(people) if it was present.



// const member = {
//     name: "Rohan",
//     fun: () => {
//         return () => {console.log(this)};
//     }
// }
// member.fun()();
// // output = global object;  


// const student = {
//     name: "Rohan",
//     fun: function(){
//         return function(){console.log(this)};
//     }
// }
// student.fun()();
// // output = global object;




// const anObject = {
//     name: "Rohan",
//     childObj: {
//         name: "Aditya",
//         fun: function(){
//             console.log(this);
//         }
//     }
// }
// anObject.childObj.fun();
// // output = childObj;


// const tempObj = {
//     name: "Rohan",
//     fun: {
//         name: this,
//         fun2: function(){
//             console.log(this.name);
//         }        
//     }
// }
// tempObj.fun.fun2();
// // output = global object;
