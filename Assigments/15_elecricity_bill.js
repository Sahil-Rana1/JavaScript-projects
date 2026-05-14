// Q15. Write a function that determines electricity bill: first 100 units at 1.5, next 100 at 2.5, beyond 200 at
// 3.5. Use arithmetic operators.

function calculate(units){
    let bill=0
    if(units<=100){
        bill= units*1.5
    }else if(units<=200){
        bill= (100 * 1.5) + ((units - 100) * 2.5);
    }else{
        bill= (100 * 1.5) + (100 * 2.5) + ((units - 200) * 3.5);
    }
    return bill
}

console.log(calculate(163))