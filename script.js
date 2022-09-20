// selecting what is needs to be targetted 

const cells = document.querySelectorAll('.cell')
const restartButton = document.querySelector('#restart')
const board = document.querySelector('#game-board')
const popupScreen = document.querySelector('#popup-screen')


//declaring initial variables
// let currentPlayer = playerX
let currentPlayer = 'X'
let xScore = 0
let oScore = 0
// 


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
        // event.target.style.backgroundImage = url("dsdsds")
        currentPlayer = 'O'
         checkForWinner()
         endGame()
    } else if (currentPlayer === 'O') {
        event.target.textContent = 'O' 
        currentPlayer = 'X'
        checkForWinner()
        endGame()
    }
})


const checkForWinner = () => {

    let winner = 'null'

    if (cells[0].innerText === 'X' && cells[1].innerText === 'X' && cells[2].innerText === 'X') {
        winner = 'X'
    } else if (cells[0].innerText === 'O' && cells[1].innerText === 'O' && cells[2].innerText === 'O') {
        winner = 'O'
    } else if (cells[3].innerText === 'X' && cells[4].innerText === 'X' && cells[5].innerText === 'X') {
        winner = 'X'
    } else if (cells[3].innerText === 'O' && cells[4].innerText === 'O' && cells[5].innerText === 'O') {
        winner = 'O'
    } else if (cells[6].innerText === 'X' && cells[7].innerText === 'X' && cells[8].innerText === 'X') {
        winner = 'X'
    } else if (cells[6].innerText === 'O' && cells[7].innerText === 'O' && cells[8].innerText === 'O') {
        winner = 'O'
    } else if (cells[0].innerText === 'X' && cells[3].innerText === 'X' && cells[6].innerText === 'X') {
        winner = 'X'
    } else if (cells[0].innerText === 'O' && cells[3].innerText === 'O' && cells[6].innerText === 'O') {
        winner = 'O'
    } else if (cells[1].innerText === 'X' && cells[4].innerText === 'X' && cells[7].innerText === 'X') {
        winner = 'X'
    } else if (cells[1].innerText === 'O' && cells[4].innerText === 'O' && cells[7].innerText === 'O') {
        winner = 'O'
    } else if (cells[2].innerText === 'X' && cells[5].innerText === 'X' && cells[8].innerText === 'X') {
        winner = 'X'
    } else if (cells[2].innerText === 'O' && cells[5].innerText === 'O' && cells[8].innerText === 'O') {
        winner = 'O'
    } else if (cells[0].innerText === 'X' && cells[4].innerText === 'X' && cells[8].innerText === 'X') {
        winner = 'X'
    } else if (cells[0].innerText === 'O' && cells[4].innerText === 'O' && cells[8].innerText === 'O') {
        winner = 'O'
    } else if (cells[2].innerText === 'X' && cells[4].innerText === 'X' && cells[6].innerText === 'X') {
        winner = 'X'
    } else if (cells[2].innerText === 'O' && cells[4].innerText === 'O' && cells[6].innerText === 'O') {
        winner = 'O'
    }
    return winner
}


restartButton.addEventListener('click', () => {
    restartGame()
})

const restartGame = () => {
    for (let cell of cells) {
        cell.innerText = ''
        // cell.backgroundImage - get rid of bart/homer
    }
}

const endGame = () => {
    console.log(cells[4])
    if (cells[0].innerText !== '' && cells[1].innerText !== '' && cells[2].innerText !== '' && cells[3].innerText !== '' && cells[4].innerText !== '' && cells[5].innerText !== '' && cells[6].innerText !== '' && cells[7].innerText !== '' && cells[8].innerText !== ''){
        popupScreen.innerText = 'Draw'
        popupScreen.style.display = 'flex'
    } else if (checkForWinner() === 'X') {
        popupScreen.innerText = 'X Wins'
        popupScreen.style.display = 'flex'
        // xScore += 1 NOT FINISHED
    } else if (checkForWinner() === 'O') {
        popupScreen.innerText = 'O Wins'
        popupScreen.style.display = 'flex'
        // oScore += 1 NOT FINISHED
    }
}

popupScreen.addEventListener('click', () => {
    popupScreen.style.display = 'none'
})
// click to remove the screen-popup at endgame.




// const scoreBoard = () => {
//     //if player x wins add one to scoreboard for player X, vice versa 
// }

// drawScreen.innerHTML += '<img src = "bart-for-cell.png">'
