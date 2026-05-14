// Q13. Write a function safeDivide(a, b) that uses the nullish coalescing operator to handle division by zero
// gracefully.

function safeDivide(a, b) {
    return (b ?? 0) === 0 ? "DivideByZeroException" : a / b;
}

console.log(safeDivide(10,0))