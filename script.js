// selecting what is needs to be targetted 

const cells = document.querySelectorAll('.cell')
const restartButton = document.querySelector('#restart')
const board = document.querySelector('#game-board')


//declaring initial variables
// let currentPlayer = playerX
let CurrentPlayer = 'X'
let p1 = []
let p2 = []
let xScore = 0
let oScore = 0


// const bart = document.createElement('img')
// bart.src = 'bart-for-cell.png'
// topLeftCell.appendChild(bart)
// bart.className = 'bart-token'
// const homerToken = document.querySelector('#homer-token')
// console.log(bart)
// console.log(topLeftCell)


const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
]

// everytime a cell is clicked - add X's 
// if player one is X and two is O, first tile X, need to make sure the following click is an O and keeps switching 
// make sure you can't click again on a cell that already has X/O

// for (let cell of cells) {
//     cell.addEventListener('click', handleClick)
// }

cells.addEventListener('click', (event) => {
    if (event.target.textContent) {
        alert('This spot is taken up!')
    } else if (currentPlayer === 'X') {
        event.target.textContent = 'X'
        currentPlayer = 'O'
        //this is where the switching of players occurs ^
        const logOfMoves = Number(event.target.dataset.index)
        p1.push(logOfMoves)
        console.log(logOfMoves)
        // log of moves will help generate win conditions 
    }
})

const checkForWinner = (index) => {
    if (p1 === winningConditions[0]|| p1 === winningConditions[1] || p1 === winningConditions[2] || p1 === winningConditions[3] || p1 === winningConditions[4] || p1 === winningConditions[5] || p1 === winningConditions[6]) {
        return // p1 wins
    } else if {
        (p2 === winningConditions[0]|| p2 === winningConditions[1] || p2 === winningConditions[2] || p2 === winningConditions[3] || p2 === winningConditions[4] || p2 === winningConditions[5] || p2 === winningConditions[6]) {
        return // p2 wins 
    }
}


