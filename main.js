
const gameBoard = document.querySelector("#gameBoard");
const ctx = gameBoard.getContext("2d");
const scoreText = document.querySelector("#scoreText");
const resetBtn = document.querySelector("#reset");
const gameWidth = gameBoard.width;
const gameHeight = gameBoard.height;
const gameColor = "`Transparent";
const snakeColor = "lightgreen";
const snakeBorder = "black";
const foodColor = "red";
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
startGame();







function startGame(){
   running = true;
   scoreText.textContent = score;
   createFood();
   drawFood();
   nextTick();
};

function nextTick(){
    if(running){
        setTimeout(() => {
            clearBoard();
            drawFood();
            moveSnake();
            checkGameOver();
            nextTick();
        },75);
    }


    if(running){
       setTimeout(() => {
        drawBonus()
       }, 1025);

    }
     else{
        displayGameOver();
     }
};

function clearBoard(){
    ctx.fillstyle = gameColor;
    ctx.fillRect(0, 0, gameWidth, gameHeight);
};

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
// const foodColor = foodColor.fillstyle = "red";

function drawFood(){
    
    ctx.fillstyle = foodColor;
    ctx.fillRect(foodX, foodY, unitSize, unitSize);
};


function drawBonus(){};

function moveSnake(){};

function drawSnake(){
    ctx.fillstyle = snakeColor;
    ctx.strokeStyle = snakeBorder;
    snake.forEach(snakePart => {
        ctx.fillRect(snakePart)
    });
};

function changeDirection(){};

function checkGameOver(){};

function displayGameOver(){};

function reset(){};





