// -> SCOPE 
// scope refers to where a variable can be accessed 

// -> Global scope
// can be used anywhere
let globalScope = "global"

function globalScopeTest() {
	console.log(globalScope)
}

globalScopeTest() // global


// -> Local scope 
// variables declared inside functions
// are only accesible inside functions
function functionScope(){
	var localA = "local";
	let localB = "local";
	console.log(localA , localB) // local,local
}

// console.log(a) //error: a is undefined


// -> Block scope
// introduced in ES6
// creates a isolated scope inside a block { }
// only works with let and const

{
	// can be used outside the block
	var blockA = "global"
	
	// only accesible inside the block
	let blockB = "block"
	const blockC = "block"

	console.log(blockA, blockB, blockC) // global, block, block
}

console.log(blockA) // global

// console.log(blockB) //error: blockB is undefined

