// Q15. Demonstrate the difference between pass-by-value (primitives) and pass-by-reference (objects/arrays)
// with examples.

// pass by value 
function changeValue(num) {
  num = 100; // only changes local copy
}
let myNumber = 50;
changeValue(myNumber);

console.log(myNumber); // 50


// Pass-by-reference (Objects/Arrays)
function changeObject(obj) {
  obj.name = "Alice"; // modifies the original object
}
let person = { name: "Bob" };
changeObject(person);

console.log(person.name); // Alice