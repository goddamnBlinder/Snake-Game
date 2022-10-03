const gameBoard = document.querySelector("#gameBoard");
const ctx = gameBoard.getContext("2d");
gameBoard.stroke();
const scoreText = document.querySelector("#scoreText");
const resetBtn = document.querySelector("#reset");
const gameWidth = gameBoard.width;
const gameHeight = gameBoard.height;
const gameColor = "white";
const snakeColor = "lightgreen";
const snakeBorder = "black";
const foodColor = " ";
const unitSize = 25;
let running = false;
let xVelocity = unitSize;
let yVelocity = 0; 
var foodX;
var foodY;
let score = 0;

// An object for Each body part of the snake
let snake = [

    {x:unitSize * 4, y:0},
    {x:unitSize * 3, y:0},
    {x:unitSize * 2, y:0},
    {x:unitSize, y:0},
    {x:0, y:0}
];

window.addEventListener("keydown", changeDirection);
resetBtn.addEventListener("click", reset);

// The Invokes
createFood();
drawFood();







function startGame(){};

function nextTick(){};

function clearBoard(){};

function createFood(){
    
    function randomFood(min, max){
     const randNum = Math.round((Math.random() * (max - min) + min ) / unitSize) * unitSize;
     return randNum;
    }
        foodX = randomFood(0, gameWidth - unitSize);
        foodY = randomFood(0, gameWidth - unitSize);



};


function createBonus(){
};

function drawFood(){
    ctx.fill()
    ctx.fillstyle = foodColor;
    ctx.fillRect(foodX, foodY, unitSize, unitSize);
};


function drawBonus(){};

function moveSnake(){};

function drawSnake(){};

function changeDirection(){};

function checkGameOver(){};

function displayGameOver(){};

function reset(){};





