// P1. Right-angled star triangle 
// Expected output (n=5):
// *
// * *
// * * *
// * * * *
// * * * * *

function right_angled_pettern() {
    for (let i = 0; i < 5; i++) {
        let Pettern = " "
        for (let j = 0; j <= i; j++) {
            Pettern = Pettern + " *"
        }
        console.log(Pettern)
    }

}

// P2. Inverted right-angled triangle
//   * * * * *
//   * * * *
//   * * *
//   * *
//   *

function Inverted_right_angled_triangle() {
    console.log("Inverted right-angled triangle")
    for (let i = 0; i < 5; i++) {
        let Pettern = " "
        for (let j = 0; j < 5 - i; j++) {
            Pettern = Pettern + " *"
        }
        console.log(Pettern)
    }
}

// P5. Hollow square border
// Expected output (n=5):
// * * * * *
// *       *
// *       *
// *       *
// * * * * *

function hollow_square() {
    for (let i = 0; i < 5; i++) {
        let row = "";
        for (let j = 0; j < 5; j++) {
            if (i == 0 || i == 5 - 1 || j == 0 || j == 5 - 1) {
                row += "* ";
            } else {
                row += "  ";
            }
        }
        console.log(row);
    }
}









// right_angled_pettern()
// Inverted_right_angled_triangle()
hollow_square()
