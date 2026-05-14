// Q15. Write a program using nested loops to solve the FizzBuzz challenge up to 100 but also include
// FizzBuzzBang for multiples of 7.


function fizzBuzz() {
    for (let i = 1; i <= 100; i++) {

        for (let j = 0; j < 1; j++) {   // kept nested loop structure (as required)

            let str = "";

            if (i % 3 == 0) {
                str += "Fizz";
            }

            if (i % 5 == 0) {
                str += "Buzz";
            }

            if (i % 7 == 0) {
                str += "Bang";
            }

            if (str === "") {
                console.log(i);
            } else {
                console.log(str);
            }
        }
    }
}

fizzBuzz();