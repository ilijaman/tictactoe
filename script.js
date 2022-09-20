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
})


const checkForWinner = () => {

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

restartButton.addEventListener('click', () => {
    restartGame()
})

const restartGame = () => {
    for (let cell of cells) {
        cell.innerText = ''
    }
}
