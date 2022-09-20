const cells = document.querySelectorAll('.cell')

const restartButton = document.querySelector('#restart')

const gameBoard = document.querySelectorAll('#Game-board')

// const bart = document.createElement('img')
// bart.src = 'bart-for-cell.png'
// topLeftCell.appendChild(bart)
// bart.className = 'bart-token'




const homerToken = document.querySelector('#homer-token')
console.log(bart)
console.log(topLeftCell)



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






