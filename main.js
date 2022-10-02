const gameBoard = document.querySelector("#gameBoard");
const ctx = gameBoard.getContext("2d");
const scoreText = document.querySelector("#scoreText");
const resetBtn = document.querySelector("#reset");
const gameWidth = gameBoard.width;
const gameHeight = gameBoard.height;
const gameColor = "white";
const snakeColor = "lightgreen";
const snakeBorder = "black";
const foodColor = "red";
const unitSize = 25;
let running = false;
let xVelocity = unitSize;
let yVelocity = 0; 
let foodA;
let foodB;
let score = 0;

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
    foodA = randomFood(0, gameWidth - unitSize);
    foodB = randomFood(0, gameWidth - unitSize);
    console.log(foodA);


};


function createBonus(){
};

function drawFood(){

    ctx.fillstyle = foodColor;
    ctx.fillRect(foodA, foodB, unitSize, unitSize);
};


function drawBonus(){};

function moveSnake(){};

function drawSnake(){};

function chnageDirection(){};

function checkGameOver(){};

function displayGameOver(){};

function reset(){};





