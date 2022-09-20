// selecting what is needs to be targetted 

const cells = document.querySelectorAll('.cell')
const restartButton = document.querySelector('#restart')
const board = document.querySelector('#game-board')


//declaring initial variables
// let currentPlayer = playerX
let currentPlayer = 'X'
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
    [2, 4, 6],
]


// everytime a cell is clicked - add X's 
// if player one is X and two is O, first tile X, need to make sure the following click is an O and keeps switching 
// make sure you can't click again on a cell that already has X/O

// for (let cell of cells) {
//     cell.addEventListener('click', 
// }

board.addEventListener('click', (event) => {
    if (event.target === board) {
        return
    }
    if (event.target.innerText) {
        alert('This spot is taken up')
    } else if (currentPlayer === 'X') {
        event.target.textContent = 'X'
        checkForWinner()
        currentPlayer = 'O'
    } else if (currentPlayer === 'O') {
        event.target.textContent = 'O' 
        checkForWinner()
        currentPlayer = 'X'
    }

    //     const logOfMoves = Number(event.target.dataset.index)
    //     p1.push(logOfMoves)
    //     console.log(logOfMoves)
    //     //want to assign each click - to log the moves, into the array of p1/p2
    // }
})


// const checkForWinner = (index) => {
//     if (p1 === winningConditions[0]|| p1 === winningConditions[1] || p1 === winningConditions[2] || p1 === winningConditions[3] || p1 === winningConditions[4] || p1 === winningConditions[5] || p1 === winningConditions[6]) {
//         return // p1 wins
//     } else if {
//         (p2 === winningConditions[0]|| p2 === winningConditions[1] || p2 === winningConditions[2] || p2 === winningConditions[3] || p2 === winningConditions[4] || p2 === winningConditions[5] || p2 === winningConditions[6]) {
//         return // p2 wins 
//     } else if {
//         //each div cell is clicked/marked then game needs to break and show 'draw'
//     }
// }

const checkForWinner = () => {
    console.log(cells[0], cells[1], cells[2])
    if (cells[0].innerText === 'X' && cells[1].innerText === 'X' && cells[2].innerText === 'X') {
        alert('X wins')
    } else if (cells[0].innerText === 'O' && cells[1].innerText === 'O' && cells[2].innerText === 'O') {
        alert('O wins')
    } else if (cells[3].innerText === 'X' && cells[4].innerText === 'X' && cells[5].innerText === 'X') {
        alert('X wins')
    } else if (cells[3].innerText === 'O' && cells[4].innerText === 'O' && cells[5].innerText === 'O') {
        alert ('O wins')
    } else if (cells[6].innerText === 'X' && cells[7].innerText === 'X' && cells[8].innerText === 'X') {
        alert ('X wins')
    } else if (cells[6].innerText === 'O' && cells[7].innerText === 'O' && cells[8].innerText === 'O') {
        alert ('O wins')
    } else if (cells[0].innerText === 'X' && cells[3].innerText === 'X' && cells[6].innerText === 'X') {
        alert ('X wins')
    } else if (cells[0].innerText === 'O' && cells[3].innerText === 'O' && cells[6].innerText === 'O') {
        alert ('O wins')
    } else if (cells[1].innerText === 'X' && cells[4].innerText === 'X' && cells[7].innerText === 'X') {
        alert ('X wins')
    } else if (cells[1].innerText === 'O' && cells[4].innerText === 'O' && cells[7].innerText === 'O') {
        alert ('O wins')
    } else if (cells[2].innerText === 'X' && cells[5].innerText === 'X' && cells[8].innerText === 'X') {
        alert ('X wins')
    } else if (cells[2].innerText === 'O' && cells[5].innerText === 'O' && cells[8].innerText === 'O') {
        alert ('O wins')
    } else if (cells[0].innerText === 'X' && cells[4].innerText === 'X' && cells[8].innerText === 'X') {
        alert ('X wins')
    } else if (cells[0].innerText === 'O' && cells[4].innerText === 'O' && cells[8].innerText === 'O') {
        alert ('O wins')
    } else if (cells[2].innerText === 'X' && cells[4].innerText === 'X' && cells[6].innerText === 'X') {
        alert ('X wins')
    } else if (cells[2].innerText === 'O' && cells[4].innerText === 'O' && cells[6].innerText === 'O') {
        alert ('O wins')
    }
}