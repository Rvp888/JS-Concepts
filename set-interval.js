
// Set-interval // Print 5 4 3 2 1 one by one after every 1 second


function timer(n) {
    let interval = setInterval(() => {
        console.log(n);
        n--;
        if(n < 1){
            clearInterval(interval);
        }
        
    },1000)
}

timer(5);


