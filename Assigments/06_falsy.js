// Q16. Write a function that takes any input and returns true if it is falsy. Test with: 0, '', false, null,
// undefined, NaN.

function validInput(input){
    if(input === 0 || input === '' || input === false || input === null || input === undefined || Number.isNaN(input)){
        return true
    }else{
        return false
    }
}


console.log(validInput("aba"));      // false
console.log(validInput(0));          // true
console.log(validInput(""));         // true
console.log(validInput(null));       // true
console.log(validInput(undefined));  // true
console.log(validInput(NaN));        // true
console.log(validInput(123));        // false