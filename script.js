// Selecting what needs to be targetted ---------------------------------------------------------------------------------------------------------------------


const cells = document.querySelectorAll('.cell')
const restartButton = document.querySelector('#restart')
const board = document.querySelector('#game-board')
const popupScreen = document.querySelector('#popup-screen')
const homerToken = document.querySelector('#homer-token')
const scoreLeft = document.querySelector('#xScore')
const scoreRight = document.querySelector('#oScore')
const themeButton = document.querySelector('#theme')


// Declaring initial variables + Establishing win condition -------------------------------------------------------------------------------------------


let currentPlayer = 'X'
let xScore = 0
let oScore = 0

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


// Adding a click event listener to the cells ---------------------------------------------------------------------------------------------------------------



board.addEventListener('click', (event) => {
    if (event.target === board) {
        return
    }
    if (event.target.innerText) {
        popupScreen.innerText = "This spot is taken up!"
        popupScreen.style.display = 'flex'
    } else if (currentPlayer === 'X') {
        event.target.innerText = 'X'
        // event.target.style.backgroundImage = url("bart-for-cell.png")
        currentPlayer = 'O'
         endGame()
    } else if (currentPlayer === 'O') {
        event.target.innerText = 'O' 
        currentPlayer = 'X'
        endGame()
    }
})




// If any win conditions are met, a winner will be declared ----------------------------------------------------------------------------------------------------------



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




// Restart function -----------------------------------------------------------------------------------------------------------------------------------------------------------------------



restartButton.addEventListener('click', () => {
    restartGame()
})

const restartGame = () => {
    for (let cell of cells) {
        cell.innerText = ''
        currentPlayer = 'X'
        // cell.backgroundImage - get rid of bart/homer
    }
}



// Endgame popup screens + score functionality -----------------------------------------------------------------------------------------------------------------


const endGame = () => {
    console.log(cells[4])

    if (checkForWinner() === 'X') {
        popupScreen.innerText = 'X Wins'
        popupScreen.style.display = 'flex'
        restartGame()
        xScore += 1 
        scoreLeft.innerText = `Score: ${xScore}`
    } else if (checkForWinner() === 'O') {
        popupScreen.innerText = 'O Wins'
        popupScreen.style.display = 'flex'
        restartGame()
        oScore += 1 
        scoreRight.innerText = `Score: ${xScore}`
    } else if (cells[0].innerText !== '' && cells[1].innerText !== '' && cells[2].innerText !== '' && cells[3].innerText !== '' && cells[4].innerText !== '' && cells[5].innerText !== '' && cells[6].innerText !== '' && cells[7].innerText !== '' && cells[8].innerText !== ''){
        popupScreen.innerText = 'Draw'
        popupScreen.style.display = 'flex'
        restartGame()
    } 
}
    



// Theme toggle button for diff css styles -----------------------------------------------------------------------------------------------------------------


const themeTypes = [
    'duff',
    'donuts',
    'kodos',
]

let currentTheme = 0



themeButton.addEventListener('click', () => {
    if (currentTheme === 0) {
        currentTheme = 1
    } else if (currentTheme === 1) {
        currentTheme = 2
    } else if (currentTheme === 2) {
        currentTheme = 0
    }

    let newTheme = themeTypes[currentTheme]
    document.body.className = newTheme
    
})




// Click to exit the popup screen at end of game------------------------------------------------------------------------------------------------------------------------



popupScreen.addEventListener('click', () => {
    popupScreen.style.display = 'none'
})






// drawScreen.innerHTML += '<img src = "bart-for-cell.png">'
