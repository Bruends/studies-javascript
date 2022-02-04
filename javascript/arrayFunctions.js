const items = [
    { name: 'Book', price: 43.44,   stock: 4 },
    { name: 'Bike', price: 1143.44, stock: 0 },
    { name: 'Ps5',  price: 4543.44, stock: 6 },
    { name: 'Xbox', price: 4443.44, stock: 2 }    
]


// -> MAP 
// execute a callback for each array item
// and create a new array with the returns

//ex: creates an array from items with 10% discount 
const itemsWithDiscount = items.map((item) => {
    const discount = item.price - (item.price * 0.10)
    return { name: item.name, price: discount.toFixed(2) }
});

console.log("items with 10% discount: ", itemsWithDiscount)


// -> Filter 
// creates a new array with the values
// that pass in the callback condition

//ex: create a Array with items less expensive than 1000
const cheapItems = items.filter((item) => {
    return item.price < 1000
}) 

console.log("cheaper than 1000$: ", cheapItems)


// -> SOME
// return true if ANY element of the array pass the condition 
// return false ohterwise

//ex: check if any item is out of stock
const hasOutOfStockItem = items.some(item => {
    return item.stock === 0
})

console.log("has out of stock items ? ", hasOutOfStockItem) //true


// -> EVERY
// return true if ALL element of the array pass the condition 
// return false ohterwise

//ex: check if all items have stock
const  allItemsHaveStock = items.every(item => {
    return item.stock > 0
})

console.log("has out of stock items ? ", allItemsHaveStock);//false


// -> FOREACH
// loops through the array
items.forEach((item) => {
    console.log(item)
})