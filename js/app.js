document.addEventListener('DOMContentLoaded', () => {
const grid = document.querySelector('.grid')
let squares = Array.from(document.querySelectorAll('.grid div'))
const scoreDisplay = document.querySelector('#score')
const startBtn = document.querySelector('#start-button')
const width = 10
let nextRandom = 0
let timerId
let score = 0

//The Tetrominoes
const lTetromino = [
    [1, width + 1, width * 2 + 1, 2],
    [width, width + 1, width + 2, width * 2 + 2],
    [1, width + 1, width * 2 + 1, width * 2],
    [width, width * 2, width * 2 + 1, width * 2 + 2]
]

const zTetromino = [
    [0, width, width + 1, width * 2 + 1],
    [width + 1, width + 2, width * 2, width * 2 + 1],
    [0, width, width + 1, width * 2 + 1],
    [width + 1, width + 2, width * 2, width * 2 + 1]
]

const tTetromino = [
    [1, width, width + 1, width + 2],
    [1, width + 1, width + 2, width * 2 + 1],
    [width, width + 1, width + 2, width * 2 + 1],
    [1, width, width + 1, width * 2 + 1]
]

const oTetromino = [
    [0, 1, width, width + 1],
    [0, 1, width, width + 1],
    [0, 1, width, width + 1],
    [0, 1, width, width + 1]
]

const iTetromino = [
    [1, width + 1, width * 2 + 1, width * 3 + 1],
    [width, width + 1, width + 2, width + 3],
    [1, width + 1, width * 2 + 1, width * 3 + 1],
    [width, width + 1, width + 2, width + 3]
]

const theTetrominoes = [lTetromino, zTetromino, tTetromino, oTetromino, iTetromino]

let currentPosition = 4
let currentRotation = 0

//random select Tetromino 1st rotation
let random = Math.floor(Math.random()*theTetrominoes.length)
let current = theTetrominoes[random][currentRotation]

//draw 1st rotation random tetromino
function draw() {
    current.forEach(index => {
        squares[currentPosition + index].classList.add('tetromino')
    })
}

//undraw tetromino
function undraw(){
    current.forEach(index =>{
        squares[currentPosition + index].classList.remove('tetromino')
    })
}

//move down every sec
//timerId = setInterval(moveDown, 1000)
    
//assign function to keyCodes
function control(e) {
    if(e.keyCode === 65) {
        moveLeft()
    } else if (e.keyCode === 87){
        rotate()
    } else if (e.keyCode === 68){
        moveRight()
    } else if (e.keyCode === 83){
        moveDown()
    }
}
document.addEventListener('keyup', control)
    
//move down function
function moveDown() {
    undraw()
    currentPosition += width
    draw()
    freeze()
}

//freeze function
function freeze(){
if(current.some(index => squares[currentPosition + index +width].classList.contains('taken'))){
    current.forEach(index => squares[currentPosition + index].classList.add('taken'))
    //start new tetromino
    random = nextRandom
    nextRandom = Math.floor(Math.random()*theTetrominoes.length)
    current = theTetrominoes[random][currentRotation]
    currentPosition = 4
    draw()
    displayShape()
    addScore()
    gameOver()
    } 
}
    
//move rules Left
function moveLeft() {
    undraw()
    const isAtLeftEdge = current.some(index => (currentPosition + index) % width === 0)
    
    if(!isAtLeftEdge) currentPosition -=1 
    
    if(current.some(index => squares[currentPosition + index].classList.contains('taken'))){
        currentPosition +=1
    }
    
draw()
}

//move rules Right
function moveRight() {
    undraw()
    const isAtRightEdge = current.some(index => (currentPosition + index) % width === width-1)

    if(!isAtRightEdge) currentPosition +=1 

    if(current.some(index => squares[currentPosition + index].classList.contains('taken'))){
        currentPosition -=1
    }

draw()
}
    
//rotate tetromino
function rotate() {
    undraw()
    currentRotation ++
    if(currentRotation === current.length) {
        currentRotation = 0
    }
    current = theTetrominoes[random][currentRotation]
    draw()
}

//show next tetromino on minigrid
const displaySquares = document.querySelectorAll('.mini_grid div')
const displayWidth = 4
let displayIndex = 0

//the Tetromino
const upNestTetrominoes = [
    [1, displayWidth + 1, displayWidth * 2 + 1, 2], /* lTetromino */
    [0, displayWidth, displayWidth + 1, displayWidth * 2 + 1], /* zTetromino */
    [1, displayWidth, displayWidth + 1, displayWidth + 2], /* tTetromino */
    [0, 1, displayWidth, displayWidth + 1], /* oTetromino */
    [1, displayWidth + 1, displayWidth * 2 + 1, displayWidth * 3 + 1] /* iTetromino */
]

//display shape on minigrid
function displayShape() {
    //remove tetromino from main grid
    displaySquares.forEach(squares => {
        squares.classList.remove('tetromino')
    })
    upNestTetrominoes[nextRandom].forEach(index => {
        displaySquares[displayIndex + index].classList.add('tetromino')
    })
}

//add button functionality
startBtn.addEventListener('click', () =>{
    if (timerId) {
        clearInterval(timerId)
        timerId = null
    }else {
        draw()
        timerId = setInterval(moveDown, 1000)
        nextRandom = Math.floor(Math.random()*theTetrominoes.length)
        displayShape()
    }
})
    
//add score
function addScore() {
    for (let i = 0; i < 199; i +=width) {
        const row = [i, i+1, i+2, i+3, i+4, i+5, i+6, i+7, i+8, i+9]
        
    if(row.every(index => squares[index].classList.contains('taken'))) {
        score +=10
        scoreDisplay.innerHTML = score
        row.forEach(index => {
            squares[index].classList.remove('taken')
            squares[index].classList.remove('tetromino')
        })
        const squaresRemoved = squares.splice(i, width)
        squares = squaresRemoved.concat(squares)
        squares.forEach(cell => grid.appendChild(cell))
    }
    }
}
    
//game over
function gameOver() {
    if (current.some(index => squares[currentPosition + index].classList.contains('taken'))) {
        scoreDisplay.innerHTML = 'END'
        clearInterval(timeId)
        undraw()
    }
}   
})