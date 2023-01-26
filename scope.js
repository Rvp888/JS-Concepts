

// Global scope

let globalVariable = 8;

function run() {
    var localVariable = 9;
    console.log(globalVariable);
    console.log(localVariable);
}

run();

// console.log(localVariable);

{
    var blockVariable = 10;
}

console.log(blockVariable);