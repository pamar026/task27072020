var faker = require('faker')
var database = { products: []}
for(var i=0; i<=300; i++){
    database.products.push({
        name : faker.commerce.productName(),
        price : faker.commerce.price()
    })
}

console.log(JSON.stringify(database))