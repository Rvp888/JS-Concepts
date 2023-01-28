
// Private Variables creation in functions: 
// Whenever we deal with functions we always try to make variables private which then helps not to directly access variables 
// further avoids updating these values too.


// function carDetails() {
//     let kms = 0;
//     let speed = 0;
//     let speedUp = (intialSpeed) => {
//         speed += intialSpeed;
//         kms += speed;
//     };
//     let totalkmsDriven = () => kms;
//     return { speedUp, totalkmsDriven };
// }
  
// let car_object = carDetails();
// car_object.speedUp(7);
// car_object.speedUp(9);
// console.log(car_object.totalkmsDriven());   // 23
  
// console.log(car_object.kms); // Undefined, since it is made private.


// All the variables declared (shown in the above code snippet) can’t be accessed directly 
// since they are encapsulated in such a way that without the function call access the values 
// carried by these variables can’t be used or printed out.


//--------------------------------

// Alternatively, we may also use the “this” keyword to make method (function) calls to stick to the main method itself 
// which thus makes the variables private.  The main idea for using the “this” keyword is just to make things directly visible 
// that is making methods directly accessible.


// function carDetails() {
//     let kms = 0;
//     let speed = 0;
//     this.speedUp = (intialSpeed) => {
//         speed += intialSpeed;
//         kms += speed;
//     };
//     this.totalkmsDriven = () => kms;
// }
  
// let car_object = new carDetails();
// car_object.speedUp(7);
// car_object.speedUp(9);
// console.log(car_object.totalkmsDriven()); // 23
  
// console.log(car_object.kms); // Undefined, since it is made private:




