function test(text){
    console.log(text);
}

// -> DEBOUNCE:
// hold a function call for a period o time
// if the function is called again reset this timer
// only when the timer passes the function will be called
// only the last function call will be executed
function debounce(callback, delay = 1000){
    let timeout
    // return the function with debounce applied
    return (...args) => {
        // if the function is called again
        // cancel the last timeout        
        clearTimeout(timeout);
        
        // wait 'delay' seconds to exec the callback
        timeout = setTimeout(() => {
            callback(...args)
        }, delay) 
    }
}


// --- testing ---
debounceTest = debounce((text) => {test(text)});

// simulates typing
debounceTest('t');
debounceTest('tes');
debounceTest('test'); // test

// prevents 2 unnecessary function calls
// in this example
// --- 

// -> THROTTLE
// execute the function once
// then lock the execution for a period of time (delay)
// then function will only be executed if called AFTER the delay
function throttle(callback, delay = 1000){
    // wait is false by default
    // to always execute the function in the first call
    let wait = false;
    
    return (...args) => {   
        // if the function is in wait mode
        // return without executing it
        if(wait) return;
        
        // execute the function otherwise
        callback(...args)

        // lock the function after execution
        wait = true;

        setTimeout(() => {
            // unlock the function after a 'delay'
            wait = false;
        }, delay)
    }
}

// --- test ---
const throttleTest = throttle((text) => { test(text) });

throttleTest('first call'); // first call

// function is locked
throttleTest('this will not be logged');

// unlock after 1s
setTimeout(() => {
    throttleTest('unlocked'); // unlocked
 }, 1000);
// --- 


// reference: WebDev Simplified
// https://www.youtube.com/watch?v=cjIswDCKgu0
