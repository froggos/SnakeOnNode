"use strict";
process.stdin.setRawMode(true);
process.stdin.resume();
const board = [
    ["╔", "═", "═", "═", "═", "═", "═", "═", "═", "═", "═", "═", "╗"],
    ["║", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "║"],
    ["║", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "║"],
    ["║", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "║"],
    ["║", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "║"],
    ["║", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "║"],
    ["║", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "║"],
    ["║", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "║"],
    ["║", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "║"],
    ["║", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "║"],
    ["║", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "║"],
    ["║", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "║"],
    ["╚", "═", "═", "═", "═", "═", "═", "═", "═", "═", "═", "═", "╝"],
];
let gameOver = false;
let actualSnakeHeadPosY = 0;
let actualSnakeHeadPosX = 0;
let actualSnakeSize = 0;
function manageMovement() {
    process.stdin.on("data", (key) => {
        const input = key.toString();
        if (input === 'W' || input === 'w') {
            actualSnakeHeadPosY -= 1;
            board[actualSnakeHeadPosY][actualSnakeHeadPosX] = "@";
        }
        if (input === "q" || input === "Q") {
            process.exit();
        }
    });
}
function setSnakeInitPos() {
    const y = Math.floor(board.length / 2);
    const x = Math.floor(board[0].length / 2);
    actualSnakeHeadPosX = x;
    actualSnakeHeadPosY = y;
    board[y][x] = "@";
}
function generateFruit() {
    const x = board[0].length - 2;
    const yLimit = board.length - 2;
    const xPos = Math.floor(Math.random() * x) + 1;
    const yPos = Math.floor(Math.random() * yLimit) + 1;
    if (xPos === actualSnakeHeadPosX && yPos === actualSnakeHeadPosY) {
        generateFruit();
    }
    else {
        board[yPos][xPos] = "#";
    }
}
function drawBoard() {
    for (let i = 0; i < board.length; i++) {
        console.log(board[i].join(" "));
    }
}
function main() {
    setSnakeInitPos();
    generateFruit();
    drawBoard();
    manageMovement();
    console.log(actualSnakeHeadPosX, actualSnakeHeadPosY);
}
main();
