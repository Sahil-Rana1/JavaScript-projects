// Q9. Find the sum of digits of a number until a single digit remains (digital root). E.g., 493 → 4+9+3=16 →
// 1+6=7

let num = 49319

while (num.toString().length != 1) {
    let sum=0
    for (let i of num.toString()) {
        sum += Number(i)
        num = sum
    }
    console.log(sum)
}
