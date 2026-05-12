let turnx = true;
let gameStatus = true;
const wining_petttern = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

const cell = document.querySelectorAll('.cell');


// Players

// cell.forEach((c) => {
//     c.addEventListener('click', () => {
//         // stop game
//         if (gameStatus != true) return
//         // prevent overwriting
//         if (c.innerHTML !== "") return;

//         if (turnx) {
//             c.innerHTML = "X";
//             turnx = false;
//         } else {
//             c.innerHTML = "O";
//             turnx = true;
//         }
//         checkWinner()
//     });
// });

// Computer 
cell.forEach(cell => {
    cell.addEventListener("click", () => {
        if (!gameStatus || cell.innerText !== "") return;

        cell.innerText = "X";

        checkWinner();

        if (gameStatus) {
            setTimeout(computerMove, 1000);
        }
    });
});

// check the winner 
function checkWinner() {
    for (const pattern of wining_petttern) {
        let pos1val = cell[pattern[0]].innerText;
        let pos2val = cell[pattern[1]].innerText;
        let pos3val = cell[pattern[2]].innerText;

        if (pos1val != "" && pos2val != "" && pos3val != "") {
            if (pos1val === pos2val && pos2val === pos3val) {
                console.log(pos1val, "win")
                document.getElementById("status").innerText=`${pos1val} win`

                gameStatus = false

            }
        }
    }
}

function computerMove() {
    let emptyCells = [];

    cell.forEach((cell) => {
        if (cell.innerText === "") {
            emptyCells.push(cell);
        }
    });

    if (emptyCells.length === 0) return;

    let randomCell = emptyCells[Math.floor(Math.random() * emptyCells.length)];
    randomCell.innerText = "O";

    checkWinner();
}



function resetGame(){
    console.log("done")
    cell.forEach(box => {
        box.innerText=""
    });
    gameStatus=true
}
