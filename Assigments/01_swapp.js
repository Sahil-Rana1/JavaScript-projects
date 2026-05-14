// Q11. Swap two variables without using a third variable. Implement three different approaches (XOR,
// arithmetic, destructuring).

// Destructuring
let a = 10;
let b = 20;
console.log([a,b]=[b,a])

// Arithmetic way 
function arithmetic(a,b){
    return `a is : ${(a+b)-a} and b is : ${(a+b)-b}`
}
console.log(arithmetic(10,20))


