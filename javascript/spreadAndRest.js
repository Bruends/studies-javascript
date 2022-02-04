// -> SPREAD (...)
// Spread the values of an array 
// on another array or function

//ex (array) creating a products array with foods and drinks
// and adding "Apple Pie" in Between 
const foods = ["Pizza", "Cake", "Lasagna"]
const drinks = ["Beer", "Fuit Juice", "Coca Cola"]
const products = [...foods,"Apple Pie", ...drinks];

console.log(products) // ["Pizza", "Cake", "Lasagna", "Apple Pie", "Beer", "Fuit Juice", "Coca Cola"]


//ex: (function) logging the sum of the values in the array
const nums = [3,2,5];
function sumTreeNumbers(a, b, c){
   console.log(a + b + c);
}

sumTreeNumbers(...nums); // 10



//-> REST
// get the rest of the array after a destructuring

//ex: separating the first book and creating an array with the others
const books = ["Doctor Who", "Harry Potter", "Prince of Thorns", "The Novice: Summoner"]
const [who, ...others] = books

console.log(who) // Doctor Who
console.log(others) //["Harry Potter", "Prince of Thorns", "The Novice: Summoner"]