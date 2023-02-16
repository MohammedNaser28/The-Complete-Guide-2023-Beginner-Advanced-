// * Declare Variables using Let
// * There's many ways to write Variables name
// * camelCase : userName * Best Practice*
// * Only letters and digits :  ageGroups
// * Starting with $ : $kindOfSpecial
// * Starting With under Score _interalServer

// !

// * You can add semicolon or not it's up to you

const defaultResult = 0;

let currentResult = defaultResult;
let logEntries = [];
// * You can define a function with write function keyword then the name of the function
// * You can call function by its name
// * function can decalerd in where in the file and called top or bottom

function getUserNumberInput() {
    return parseInt(usrInput.value);
}

function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
    const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
    outputResult(currentResult, calcDescription);
}

function writeToLog(
    operationIdentifire,
    prevResult,
    operationNumber,
    newResult
) {
    const logEntry = {
        operation: operationIdentifire,
        prevResult: prevResult,
        number: operationNumber,
        result: newResult,
    };
    logEntries.push(logEntry);
    console.log(logEntries);
}

function calculateResult(calculationType) {
    const enteredNumber = getUserNumberInput();
    if (
        (calculationType !== "ADD" &&
            calculationType !== "SUBTRACT" &&
            calculationType !== "MULTIPLY" &&
            calculationType !== "DIVIDE") ||
        !enteredNumber
    ) {
        return;
    }
    // if (
    //     calculationType !== 'ADD' ||
    //     calculationType !== 'SUBTRACT' ||
    //     calculationType !== 'MULTIPLY' ||
    //     calculationType !== 'DIVIDE'
    // ){

    const initialResult = currentResult;
    let mathOperator;
    if (calculationType === "ADD") {
        currentResult += enteredNumber;
        mathOperator = "+";
    } else if (calculationType === "SUBTRACT") {
        currentResult -= enteredNumber;
        mathOperator = "-";
    } else if (calculationType === "MULTIPLY") {
        currentResult *= enteredNumber;
        mathOperator = "*";
    } else if (calculationType === "DIVIDE") {
        currentResult /= enteredNumber;
        mathOperator = "/";
    }
    // }
    createAndWriteOutput(mathOperator, initialResult, enteredNumber);
    writeToLog(calculationType, initialResult, enteredNumber, currentResult);
}

function add() {
    calculateResult("ADD");
}

function subtract() {
    calculateResult("SUBTRACT");
}

function multiply() {
    calculateResult("MULTIPLY");
}
function divide() {
    calculateResult("DIVIDE");
}

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);

// const additionResult = add(1, 2);

// currentResult = add(1, 2);

// let calculationDescription = `(${defaultResult} + 10) * 3 / 2 - 1`;

// let errorMessage = "An error \n" + "occurred!";
