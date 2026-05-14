// Q17. Declare 5 constants for a product (name, price, stock, rating, inStock). Use a template literal to print a
// formatted product card.

const name = 'Sabu'
const price = 100
const stock = 11
const rating = 4.5
const inStock=true

console.log("Product details using template literal")
const productCard=`
Name : ${name}
Price : ${price}
Stock : ${stock}
Rating : ${rating}
inStock: ${inStock}
`
console.log(productCard)