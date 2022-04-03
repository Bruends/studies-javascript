// tldr; 
// basically delay function calls
// to prevent unnecessary api calls for example

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
        // and add a new
        clearTimeout(timeout);
        
        // wait 'delay' seconds to exec the callback
        timeout = setTimeout(() => {
            callback(...args)
        }, delay) 
    }
}


// --- testing ---
debounceTest = debounce((text) => {test(text)}, 1000);

// simulates typing
debounceTest('t');
debounceTest('tes');
debounceTest('test'); // test

// prevents 2 unnecessary function calls
// in this example
// --- 

// reference: WebDev Simplified
// https://www.youtube.com/watch?v=cjIswDCKgu0
