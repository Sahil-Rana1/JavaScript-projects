// Conditional Statements 

// Q1. Write an ATM simulation: Check if PIN is correct (1234), then check if balance >= withdrawal amount, then
// deduct. Handle all error cases.


function ATM_simulation(pin){
    let amount = 20000
    if(pin==123){
        function withdrawal(withdrawal_amt){
            if(amount<withdrawal_amt){
                console.log("Insufficient Balance")
            }else{
                return amount- withdrawal_amt
            }
        }
        console.log(`Amount after deduction ${withdrawal(2000)}`)
    }else{
        console.log("Invalid PIN !")
    }
}

ATM_simulation(123)