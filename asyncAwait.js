

// async function fun() {
//     let a = 10
//     let result = a;
//     return result;
// }

// fun().then((value)=>{
//     console.log(value);
// })


async function handlePromise() {
    let promise = new Promise(function(resolve, reject){
        resolve("Resolved");
    })

    let result = await promise;

    console.log(result);
    // return result;
}
// handlePromise().then((value) => {
//     console.log(value);
// }).catch((value) => {
//     console.log(value);
// })
handlePromise();

console.log("Hello");



