// function isValidAge(age){
//     if(typeof NaN.age){
//         return true
//     }


// else if(age<=0){
//     console.log("Age must not be negative !")
// }else if(String(age)){
//     console.log("Enter Age in number !")
// }else{
//     console.log("Age is valid !")
// }
// }

function isValidAge(age) {
    if (typeof age === "number" && !isNaN(age) && age >= 0) return true
    else
        return false
}
console.log(isValidAge("babs"))


