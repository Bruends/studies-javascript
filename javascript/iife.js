// IIFE (Immediately Invoked Function Expression) 
// funcao que e executada assim que definida

// sintax: 
(function () {
	console.log("hello");
})() //hello

// como executam assim que criadas o valor 
// que vai para a variavel e o retorno e nao a funcao em si
const pi = (function() {
	return 3.1415
})()

console.log(pi) // 3.1415


// diferente de funcoes normais que passam a propria funcao
const pi2 =  function() {
	return 3.1415;
}

console.log(pi2) // function
console.log(pi2()) // 3.1415

