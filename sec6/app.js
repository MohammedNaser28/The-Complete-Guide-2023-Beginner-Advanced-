const startGameBtn = document.getElementById("start-game-btn");

// person.greet();

const ROCK = "ROCK";
const PAPER = "PAPER";
const SCISSORS = "SCISSORS";
const DEAULT_USER_CHOICE = ROCK;
const RESULT_DRAW = "DRAW";
const RESULT_PLAYER_WINS = "PLAYER_WINS";

const RESULT_COMPUTER_WINS = "COMPUTER_WINS";
let gameIsRunning = false;
const getPlayerChoice = function () {
    const selection = prompt(
        `${ROCK}, ${PAPER}, ${SCISSORS}? `,
        ""
    ).toUpperCase();
    if (selection !== ROCK && selection !== PAPER && selection !== SCISSORS) {
        alert("Invalid choice! We chose Rock for you!");
        return;
    } else {
        return selection;
    }
};
// In Arrow function if you don't have argument you can put ()
const getComputerChocie = () => {
    const randomValue = Math.random();
    if (randomValue < 0.34) {
        return ROCK;
    } else if (randomValue < 0.67) {
        return PAPER;
    } else {
        return SCISSORS;
    }
};

// This called Arrow function
// If you make arrow function and has a one experssion you can remove carly prasses

const getWinner = (cChoice, pChoice = DEAULT_USER_CHOICE) =>
    cChoice === pChoice
        ? RESULT_DRAW
        : (cChoice === ROCK && pChoice === PAPER) ||
          (cChoice === PAPER && pChoice == SCISSORS) ||
          (cChoice === SCISSORS && pChoice === ROCK)
        ? RESULT_PLAYER_WINS
        : RESULT_COMPUTER_WINS;

startGameBtn.addEventListener("click", () => {
    if (gameIsRunning) {
        return;
    }
    gameIsRunning = true;
    console.log("Gamin STart.....");
    const playerSelection = getPlayerChoice();
    const computerChocie = getComputerChocie();
    let winner;
    if (playerSelection) {
        winner = getWinner(computerChocie, playerSelection);
    } else {
        winner = getWinner(computerChocie, playerSelection);
    }
    let message = `You picked ${
        playerSelection || DEAULT_USER_CHOICE
    }, computer picked ${computerChocie} you`;
    if (winner === RESULT_DRAW) {
        message += " had a draw";
    } else if (winner === RESULT_PLAYER_WINS) {
        message += " won.";
    } else {
        message += " lost.";
    }
    alert(message);
    gameIsRunning = false;
});

const compine = (resultHandler, operation, ...numbers) => {
    const vaildatNumber = (number) => {
        return isNaN(number) ? 0 : number;
    };
    let = sum = 0;
    for (const num of numbers) {
        if (operation === "ADD") sum += vaildatNumber(num);
        else sum -= vaildatNumber(num);
    }
    resultHandler(sum);
};

const showResult = (messageText, result) => {
    alert(messageText + " " + result);
};

// const subtract = function (resultHandler, ...numbers) {
//     let = sum = 0;
//     for (const num of numbers) {
//         //don't use that "arguments"
//         sum -= num;
//     }
//     resultHandler(sum);
// };

console.log(
    compine(
        showResult.bind(this, "The result after adding all number is :"),
        "ADD",
        5,
        "k",
        -3,
        6,
        10
    )
);
console.log(
    compine(
        showResult.bind(this, "The result after adding all number is :"),
        "ADD",
        5,
        10,
        -3,
        6,
        10,
        25,
        88
    )
);
console.log(
    compine(
        showResult.bind(this, "The result after Subtract all number is :"),
        "SUBTRACT",
        5,
        10,
        -3,
        6,
        10,
        25,
        88
    )
);
//////////////////////////////////////////
// CODE not need just for remined me
// function startGame() {
//     console.log("Game is Starting....");
// };

// This is called anymous function //Function Experssion
// const start = function () {
//     console.log("Game is Starting....");
// };
// console.log(typeof start);
// const person = {
//     greet: function greet() {
//         console.log("Hello there!");
//     },
// };
