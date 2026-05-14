// LOOPS and Pettern Printing

// Part A

// Q5. Find all perfect numbers up to 10000. (A perfect number equals the sum of its proper divisors. Example: 6
// = 1+2+3.)

function find_perfect(n){
    let sum = 0;
    for (let i=1; i<n-1;i++) {
        if (n%i== 0) {
            sum += i;
        }
    }

    if (sum == n) {
        console.log(`${n} is a perfect number`);
    } else {
        console.log(`${n} is not a perfect number`);
    }
}

find_perfect(10000);


// for (let n = 1; n <= 10000; n++) {

//     let sum = 0;

//     for (let i = 1; i < n; i++) {
//         if (n % i == 0) {
//             sum += i;
//         }
//     }

//     if (sum == n) {
//         console.log(n);
//     }
// }