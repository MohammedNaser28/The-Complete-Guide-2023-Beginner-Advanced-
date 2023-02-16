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

function add() {
    // * We use parseInt() function to convert from string to int
    // * we can use + + to convert int
    // * There's function like toString() to convert to stirng data type
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    // * += this is special operator add the varibale to the variblae currentresult
    currentResult += enteredNumber;
    createAndWriteOutput("+", initialResult, enteredNumber);
    writeToLog("ADD", initialResult, enteredNumber, currentResult);
}

function subtract() {
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    // * -= this is special operator add the varibale to the variblae currentresult
    currentResult -= enteredNumber;
    createAndWriteOutput("-", initialResult, enteredNumber);
    writeToLog("SUBTRACT", initialResult, enteredNumber, currentResult);
}

function multiply() {
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    // * *= this is special operator add the varibale to the variblae currentresult
    currentResult *= enteredNumber;
    createAndWriteOutput("*", initialResult, enteredNumber);
    writeToLog("MULTIPLY", initialResult, enteredNumber, currentResult);
}
function divide() {
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult /= enteredNumber;
    createAndWriteOutput("/", initialResult, enteredNumber);
    writeToLog("DIVIDE", initialResult, enteredNumber, currentResult);
}

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);

// const additionResult = add(1, 2);

// currentResult = add(1, 2);

// let calculationDescription = `(${defaultResult} + 10) * 3 / 2 - 1`;

// let errorMessage = "An error \n" + "occurred!";
