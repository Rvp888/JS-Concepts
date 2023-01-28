
// Asynchronous Code: Asynchronous code runs in parallel with other synchronous codes without blocking their execution.


console.log("Hi");

setTimeout(() => {
    console.log("Async code");
},2000);

console.log("End");


// So, what the code does is first it logs in "Hi" then rather than executing the setTimeout function it logs in "End" and then 
// it runs the setTimeout function.

// At first, as usual, the "Hi" statement got logged in. As we use browsers to run JavaScript, there are the web APIs that handle 
// these things for users. So, what JavaScript does is, it passes the setTimeout function in such web API and then we keep on 
// running our code as usual. So it does not block the rest of the code from executing and after all the code its execution, 
// it gets pushed to the call stack and then finally gets executed. This is what happens in asynchronous JavaScript.

