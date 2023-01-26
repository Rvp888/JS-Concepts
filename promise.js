
// We cannot return something or console the result from a promise. (for this we should use async await).
// We can handle the outcomes using .then() and .catch() methods.

let promise = new Promise(function(resolve, reject){
    let x = 10;
    if(x > 15){
        resolve("Resolved");
    }
    else{
        reject("Rejected");
    }  
})
promise.then((value) => {
    console.log(value);
}).catch((error) => {
    console.log(error);
})
