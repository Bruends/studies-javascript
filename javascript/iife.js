// IIFE (Immediately Invoked Function Expression) 

// syntax: 
(function () {
	console.log("hello");
})() //hello

// because of the immediate execution 
// the value that goes to the variable is the return directly 
const pi = (function() {
	return 3.1415
})()

console.log(pi) // 3.1415


// instead of the function on normal functions
const pi2 =  function() {
	return 3.1415;
}

console.log(pi2) // function
console.log(pi2()) // 3.1415

