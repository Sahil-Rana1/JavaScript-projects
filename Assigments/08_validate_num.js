// Q18. Write a program that converts a string number to integer, float, and checks if the conversion result is a
// valid number.

function convert(input) {
    let integer = parseInt(input);
    let float = parseFloat(input);

    if (isNaN(integer) || isNaN(float)) {
        return `not a valid result`;
    } else {
        return `integer ${integer}
float ${float}`;
    }
}

console.log(convert("123.4"));