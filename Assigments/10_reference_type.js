// Q20. Create a function that returns different reference types (object, array, function) and uses typeof and
// instanceof to identify each.

let obj={name:'Rohit',age:37}
let scores=[50,70,20,0,100]
let msg = (msg)=>"Rohit Sharma"
    

function demo(value){
console.log("check the type",typeof(value))
console.log("addon of values",value)
console.log("Array",scores instanceof Array)
console.log("object",obj instanceof Object)
console.log("function",msg instanceof Function)
// console.log("function",obj instanceof Function)
}   

demo(obj)
