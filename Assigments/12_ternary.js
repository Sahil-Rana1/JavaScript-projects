// Q10. Write a function classify(n) that returns 'positive', 'negative', or 'zero' using only the ternary operator
// (no if-else).

// function ckeck_num(n){
//     console.log(n>0 ?"Positive":"Condition not satisfied");
//     console.log(n<0 ?"Negative":"Condition not satisfied");
//     console.log(n==0 ?"Zero":"Condition not satisfied");
// }

function ckeck_num(n){
    console.log(n>0 ?"Positive": n<0?"Negative": n==0?"Zero":"Invalid Input");
}

ckeck_num(-11)