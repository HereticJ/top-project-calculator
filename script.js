// Declares three variables for two numbers and an operator.
let firstNum = "";
let secondNum = "";
let currentOperator = null;
let shouldResetDisplay = false;

const numberButtons = document.querySelectorAll("buttons");
const operatorButtons = document.querySelectorAll("operators");
const equalSign = document.getElementById("button_equal");
const clearButton = document.getElementById("button_clear");
const deleteButton = document.getElementById("button_del");
const decimalButton = document.getElementById("button_decimal");
const lastOperationDisplay = document.getElementById("lastOperationDisplay");
const currentOperationDisplay = document.getElementById("currentOperationDisplay");

//equalSign.addEventListener("click", operate());

numberButtons.forEach((button) => 
    button.addEventListener("click", () => appendNumber(button.textContent))
);

operatorButtons.forEach((button) => 
    button.addEventListener(`click`, () => 
        setOperation(button.textContent)
));

function appendNumber(number) {
    if (currentOperationDisplay.textcontent === `0` || shouldResetDisplay) {
        resetDisplay()
        currentOperationDisplay.textcontent += number
    };
};

function resetDisplay() {
    currentOperationDisplay.textContent = ``;
    shouldResetDisplay = false;
};

function clear() {
    currentOperationDisplay.textContent = `0`;
    lastOperationDisplay.textContent = ``;
    firstNum = ``;
    secondNum = ``;
    currentOperator = null;
};

// Adds two numbers
const add = function(num1, num2) {
    return (num1 + num2);
};

// Subtracts two numbers
const subtract = function (num1, num2) {
    return (num1 - num2);
};

// Multiplies two numbers
const multiply = function(num1, num2) {
    return (num1 * num2);
};

// Divides two numbers
const divide = function(num1, num2) {
    return (num1 / num2);
};

// Chooses proper calculator function by the given operator.
const operate = function(num1, num2, operator) {
    if (operator = "+") {
        add(num1, num2);
    } else if (operator = "-") {
        subtract(num1, num2);
    } else if (operator = "*") {
        multiply(num1, num2);
    } else if (operator = "/") {
        divide(num1, num2);
    };
};

