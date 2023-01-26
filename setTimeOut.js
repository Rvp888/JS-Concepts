


// Set-Timeout // Print 5 4 3 2 1 one by one after every 1 second

function timer(n) {
    setTimeout(() => {
        if(n > 0){
            console.log(n);
            n--;
            timer(n);
        }
    },1000);
}

timer(5);