const gameBoard = document.querySelector("#gameBoard");
const ctx = gameBoard.getContext("2d");
const scoreText = document.querySelector("#scoreText");
const resetBtn = document.querySelector("#reset");
const gameWidth = gameBoard.width;
const gameHeight = gameBoard.height;

const snakeColor = "azure"; 
const snakeBorder = "black";
const foodColor = "crimson";
const unitSize = 25;
let running = false;
let xVelocity = unitSize;
let yVelocity = 0; 
let foodA;
let foodB;

// An object for Each body part of the snake
let snake = [

    {x:unitSize * 4, y:0},
    {x:unitSize * 3, y:0},
    {x:unitSize * 2, y:0},
    {x:unitSize, y:0},
    {x:0, y:0}
];

window.addEventListener("keydown", chnageDirection);
resetBtn.addEventListener("click", reset);

function startGame(){};
function nextTick(){};
function clearBoard(){};
function createFood(){};
function moveSnake(){};
function drawSnake(){};
function chnageDirection(){};
function checkGameOver(){};






