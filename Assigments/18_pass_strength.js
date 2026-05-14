// Q13. Write a password strength checker: Weak (< 6 chars), Fair (6-9 chars), Strong (10+ chars with
// uppercase + number + special char).

function checkStrength(password) {

    let hasUpper = false;
    let hasNumber = false;
    let hasSpecial = false;

    for (let char of password) {

        if (char >= 'A' && char <= 'Z') {
            hasUpper = true;
        }

        else if (char >= '0' && char <= '9') {
            hasNumber = true;
        }

        else if ("@#$%&*!".includes(char)) {
            hasSpecial = true;
        }
    }

    if (password.length < 6) {
        console.log("Weak");

    } else if (password.length >= 10 && hasUpper && hasNumber && hasSpecial) {
        console.log("Strong");

    } else {
        console.log("Fair");
    }
}

checkStrength("xyz@");