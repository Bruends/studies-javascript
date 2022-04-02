// -> basic cosole.log
console.log("hello, world"); // hello world

// -> log as a table 
const products = [
	{ name: 'prod1', price: 10.00 },
	{ name: 'prod2', price: 12.00 },
	{ name: 'prod3', price: 13.00 },
]

console.table(products);
// result:
// ┌─────────┬─────────┬───────┐
// │ (index) │  name   │ price │
// ├─────────┼─────────┼───────┤
// │    0    │ 'prod1' │  10   │
// │    1    │ 'prod2' │  12   │
// │    2    │ 'prod3' │  13   │
// └─────────┴─────────┴───────┘

function something() {
	// do something

	// -> log a trace 
	// logging where the trace is defined and
	// where this function is called
	console.trace("track"); 
}

something();
// result: 
//  console.trace() track debugger eval code:7:10
//something debugger eval code:7
//<anonymous> debugger eval code:10


// -> group logs
console.group("users");
	console.log("bruno");
	console.log("foo");
	console.log("bar");
console.groupEnd();
// result:
//users
//  bruno
//  foo
//  bar

// -> log a warning
console.warn("caution!"); // caution! (with an yellow decoration)

// -> log an error
console.error("error!"); // error! (with a red decoration)
