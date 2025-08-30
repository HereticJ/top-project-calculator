// Object contains components for calculation, two numbers and an operand.
let displayObj = {
    firstNum: ``,
    operators: ``,
    secondNum: ``,
    answer: ``
};


// Stores variables for calculator operation.
let num1 = displayObj.firstNum;
let operatorDisplay = displayObj.operators;
let num2 = displayObj.secondNum;
let answer = displayObj.answer;


// Limits operators variable to only one character.
const opLength = function(str, maxLength) {
    if ((str.length > maxLength) && (str.value != str)) {
        str.replace(str.textContent, `${str.value}`);
    }
}

opLength(operatorDisplay, 1);


// DOM Declarations for display and display functions.
let display = document.querySelector("#display");
const calcFunction = document.querySelector("#button_equal");
const clearBtn = document.querySelector("#button_clear");
const delBtn = document.querySelector("#button_del");
const decBtn = document.getElementById("#decimal_button");
const minBtn = document.querySelector("#button_minus");
const negateBtn = document.querySelector("#button_negate");


// Selects all calculator buttons other than Clear, Delete, and operators.
const calculatorButtons = document.querySelectorAll(`.buttons`);


// Selects all operators.
const operators = document.querySelectorAll(".operators");


// Clears Calculator Display, num1, num2, and operator variables.
const clear = function() {
    display.textContent = ``;
    num1 = ``;
    operatorDisplay = '';
    num2 = ``;
    answer = ``;
    enableButton(decBtn);
};


// Clears only num1 variable and from display.
const clearNum1 = function() {
    num1 = ``;
    display.textContent = ``;
}


// Clears ONLY the operator from operator variable and calculator display.
const clearOperator = function() {
    operatorDisplay = ``;
    display.textContent = `${num1}`;
};


// Clears only num2 variable and from display.
const clearNum2 = function() {
    num2 = '';
    display.textContent = `${num1}`, ` ${operatorDisplay} `;
};


const clearAnswer = function() {
    answer = ``;
};


// Adds two numbers
const add = function(firstNum, secondNum) {
    if ((firstNum % 1 == 0) && (secondNum % 1 == 0)) {
        return (parseInt(firstNum) + parseInt(secondNum));

    } else if ((firstNum % 1 != 0) || (secondNum % 1 != 0) || ((firstNum % 1 != 0) && (secondNum % 1 != 0))) {
        return (parseFloat(firstNum) + (parseFloat(secondNum))).toFixed(3);
}};


// Subtracts two numbers
const subtract = function (firstNum, secondNum) {
    if ((firstNum % 1 == 0) && (secondNum % 1 == 0)) {
        return (parseInt(firstNum) - parseInt(secondNum));

    } else if ((firstNum % 1 != 0) || (secondNum % 1 != 0) || ((firstNum % 1 != 0) && (secondNum % 1 != 0))) {
        return (parseFloat(firstNum) - (parseFloat(secondNum))).toFixed(3);
    };
};


// Multiplies two numbers
const multiply = function(firstNum, secondNum) {
    if ((firstNum % 1 == 0) && (secondNum % 1 == 0)) {
        return (parseInt(firstNum) * parseInt(secondNum));

    } else if ((firstNum % 1 != 0) || (secondNum % 1 != 0) || ((firstNum % 1 != 0) && (secondNum % 1 != 0))) {
        return (parseFloat(firstNum) * (parseFloat(secondNum))).toFixed(3);
    };
};


// Divides two numbers
const divide = function(firstNum, secondNum) {
    if ((firstNum % 1 == 0) && (secondNum % 1 == 0)) {
        return (parseInt(firstNum) / parseInt(secondNum));

    } else if ((firstNum % 1 != 0) || (secondNum % 1 != 0) || ((firstNum % 1 != 0) && (secondNum % 1 != 0))) {
        return (parseFloat(firstNum) / (parseFloat(secondNum))).toFixed(3);
    };
};


// Chooses proper calculator function by the given operator.
const operate = function(number1, number2, operator) {
        if (operator == " + ") {
            return add(number1, number2);
        } else if (operator == " - ") {
            return subtract(number1, number2);
        } else if (operator == " * ") {
            return multiply(number1, number2);
        } else if (operator == " / ") {
            return divide(number1, number2);
        };
};


// Assigns equate function to virtual equals (=) button.
calcFunction.addEventListener("click", () => {
    equate();
});


// Assigns negate function to negate (+/-) virtual button.
negateBtn.addEventListener("click", () => {
    negate();
});


// Disables virtual decimal button when called.
function disableButton(btn) {
    document.getElementById("button_decimal").disabled = true;
    };


// Enables virtual decimal button when called.
function enableButton(btn) {
    document.getElementById("button_decimal").disabled = false;
};


// Assigns backspace function to virtual Delete key.
delBtn.addEventListener("click", () => {
    backspace();
});


// Assigns clear function to virtual clear button.
clearBtn.addEventListener("click", () => {
    clear();
});


// Adds numbers to display field when clicked.
calculatorButtons.forEach((buttons) => {
    buttons.addEventListener("click", () => {

        // Clear all variables and set num1 to clicked number if answer variable has data.
        if ((answer != ``) && (num1 == ``) && (operatorDisplay == ``)) {
            clear();
            num1 += `${buttons.value}`;
            display.textContent += num1;

        // Add clicked number to num1 variable and display.
        } else if ((num1 == ``) && (operatorDisplay == '')) {
            num1 += `${buttons.value}`;
            display.textContent += `${num1}`;

                if (buttons.value == ".") {
                    disableButton(decBtn);
                };

        } else if ((num1 != '') && (operatorDisplay == ``)) {

            // Disables decimal button if decimal already exists in variable.
            if (buttons.value == (".")) {
                disableButton(decBtn);
            };

            num1 += `${buttons.value}`;
            display.textContent = '';
            display.textContent += `${num1}`;

                // Prevents variables from containing more than 8 characters, including decimal point (for num1).
                if ((num1.length > 8) && (num1 % 1 != 0)) {
                    num1 = num1.split(`.`);
                    num1[1] = Math.floor(num1[1] / 10);
                    num1 = (`${num1[0]}` + `.` + `${num1[1]}`);
                    display.textContent = '';
                    display.textContent += `${num1}`;
                    alert("Numbers cannot exceed 8 characters.")
                };

            // Prevents variables from having numbers longer than 8 digits (for num1).
            if (num1.length > 8) {
                num1 = Math.floor(num1 / 10);
                display.textContent = '';
                display.textContent += `${num1}`;
                alert("Numbers cannot exceed 8 characters.");
            };

        // Fills num2 variable with clicked number if num1 AND operatorDisplay have content.
        } else if ((num1 != ``) && (operatorDisplay != ``) && (num2 == ``)) {
            enableButton(decBtn);
            num2 += `${buttons.value}`;
            display.textContent = `${num1} ${operatorDisplay} ${num2}`;

                if (buttons.value == ".") {
                    disableButton(decBtn);
                };

        // Adds another digit to num2 if num2 isn't blank.  
        } else if ((num1 != ``) && (operatorDisplay != ``) && (num2 != ``)) {

            // Disables decimal button if decimal already exists in variable.
            if (buttons.value == (".")) {
                disableButton(decBtn);
            };

            num2 += `${buttons.value}`;
            display.textContent = ''
            display.textContent += `${num1} ${operatorDisplay} ${num2}`;
        };

            // Prevent decimals from having more than 8 characters including decimal point (for num2).
            if ((num2.length > 8) && (num2 % 1 != 0) ) {
                num2 = num2.split(`.`);
                num2[1] = Math.floor(num2[1] / 10);
                num2 = (`${num2[0]}` + `.` + `${num2[1]}`);
                display.textContent = '';
                display.textContent += `${num1} ${operatorDisplay} ${num2}`;
                alert("Numbers cannot exceed 8 characters.")
            };

            // Prevent variables from having numbers longer than 8 digits (for num2).
            if (num2.length > 8) {
                num2 = Math.floor(num2 / 10);
                display.textContent = '';
                display.textContent += `${num1} ${operatorDisplay} ${num2}`;
                alert("Numbers cannot exceed 8 characters.");
            };
    
})});


// Adds operators to display when clicked
operators.forEach((operators) => {
    operators.addEventListener("click", () => {

        if ((answer != ``) && (answer.includes("e") == false)) {
            num1 = `${answer}`;
            clearAnswer();
            operatorDisplay = ` ${operators.value} `;
            display.textContent = ``;
            display.textContent += `${num1} ${operatorDisplay} `;

        } else if ((answer != '') && (answer.includes("e") == true)) {
            alert("Value too large for operation.");
            clear();

        } else if ((num1 != ``) && (operatorDisplay == ``) && (num2 == ``) && (answer == ``)) {
            operatorDisplay += ` ${operators.value} `;
            display.textContent = ``;
            display.textContent = `${num1}` + ` ${operatorDisplay} `;

        } else if ((operatorDisplay != '') && (num2 == '')) {
            clearOperator();
            operatorDisplay += ` ${operators.value} `;
            display.textContent += ` ${operatorDisplay} `;

        } else if ((operatorDisplay != ``) && (num2 != ``)) {
            if ((num2 == "0") && (operators.value == "/")) {
                alert("Attempt to tear hole in spacetime averted. Please don't attempt to divide by 0!).");
                clear();

            } else {
                answer = operate(num1, num2, operatorDisplay);
                clearNum1();
                clearOperator();
                clearNum2();
                num1 = `${answer}`;
                clearAnswer();
                operatorDisplay = ` ${operators.value} `;
                display.textContent = ``;
                display.textContent = `${num1}` + ` ${operatorDisplay} `};

        } else if (num1 == ``) {
            clearNum2();
            alert("Need a number first!");

        }
    });
});


// Toggles negative/positive for num1 and num2 variables0.
function negate() {

    // Exchanges answer for num1 if previous operation was completed.
    if (answer != '') {
        num1 = answer;
        clearAnswer();
        num1 = (num1 * -1);
        display.textContent = '';
        display.textContent = num1;

    // Adds negative modifier to blank num1 variable.
    } else if (num1 === '') {
        num1 += "-";
        display.textContent = '';
        display.textContent = num1;
    
    // Clears calculator if num1 already contains negative modifier.
    } else if ((num1 != ``) && (num1 === "-")) {
        clear();

    // Converts num1 to negative if variable already contains numbers.
    } else if ((num1 != '') && (num1 != "-") && (operatorDisplay === ``) && (num2 === ``)) {
        num1 = (num1 * -1);
        display.textContent = '';
        display.textContent = num1;
    
    // Adds negative modifier to blank num2 variable.
    } else if ((num1 != '') && (operatorDisplay != '') && (num2 == '')) {
        num2 += "-";
        display.textContent = '';
        display.textContent = `${num1} ${operatorDisplay} ${num2}`;
    
    // Clears negative modifier from num2 if it already exists.
    } else if ((num1 != ``) && (operatorDisplay != ``) && (num2 != ``) && (num2 === "-")) {
        clearNum2();
        display.textcontent = '';
        display.textContent = `${num1} ${operatorDisplay}`;
    
    // Converts num2 variable to negative if variable already contains numbers.
    } else if ((num1 != "") && (operatorDisplay != "") && (num2 != "") && (num2 != "-")) {
        num2 = (num2 * -1);
        display.textContent = '';
        display.textContent = `${num1} ${operatorDisplay} ${num2}`;
    };
};


// Deletes last display digit/operator
const backspace = function() {

    // Sets num1 to answer and delete last number when clicked if answer variable is not empty.
    if ((answer != ``) && (answer % 1 == 0)) {
        num1 = answer;
        clearAnswer();
        num1 = Math.floor(num1 / 10);
        display.textContent = '';
        display.textContent += num1;
    
    } else if ((answer != ``) && (answer % 1 != 0)) {
        num1 = answer;
        clearAnswer();
        num1 = num1.split(`.`);
        num1[1] = Math.floor(num1[1] / 10);

        // Removes decimal if decimal value === 0.
            if (num1[1] == 0) {
                num1[1] = ``;
            };

        num1 = (`${num1[0]}` + `.` + `${num1[1]}`);
        display.textContent = `${num1}`;

    // Deletes last digit from num1 if the answer, operatorDisplay, and num2 variables are empty when clicked.
    } else if ((answer == '') && (num1 != ``) && (num1 % 1 == 0) && (operatorDisplay == '')) {
        num1 = Math.floor(num1 / 10);
            if (num1 == `0`) {
                clear();
            };
        display.textContent = `${num1}`;
    
    // Deletes last decimal digit if num1 is a float.
    } else if ((answer == '') && (num1 != ``) && (num1 % 1 != 0) && (operatorDisplay == ``)) {
        num1 = num1.split(`.`);
        num1[1] = Math.floor(num1[1] / 10);

        // Removes decimal if decimal value === 0.
            if (num1[1] == 0) {
                num1[1] = ``;
            };

        num1 = (`${num1[0]}` + `.` + `${num1[1]}`);
        display.textContent = `${num1}`;
    
    // Deletes operator if delete button is pressed with the last character being an operator.
    } else if ((num1 != ``) && (operatorDisplay != ``) && (num2 === ``)) {
        clearOperator();
    
    // Deletes last decimal digit if num2 is a float.
    } else if ((num1 != ``) && (operatorDisplay != ``) && (num2 != ``) && (num2 % 1 != 0)) {
        num2 = num2.split(`.`);
        num2[1] = Math.floor(num2[1] / 10);

            // Remove decimal if decimal value === 0.
            if (num2[1] === 0) {
            num2[1] = ``;
            };

        num2 = (`${num2[0]}` + `.` + `${num2[1]}`);
        display.textContent = `${num1} ${operatorDisplay} ${num2}`;
    
    // Deletes from num2 variable so long as num1, operatorDisplay, and num2 variable are not blank.
    } else if ((num1 != ``) && (operatorDisplay != ``) && (num2 != ``)) {
        num2 = Math.floor(num2 / 10);

            if (num2 === 0) {
                clearNum2();
                };

        display.textContent = `${num1} ${operatorDisplay} ${num2}`;
    };
};


// Calculates num1 and num2 based on given operator.
const equate = function() {
    if ((num2 == 0) && (operatorDisplay == " / ")) {
        alert("Attempt to rip hole in spacetime averted. Please don't attempt to divide by 0!).");
        clear();

    } else if (((num1 != ``) && (operatorDisplay != ``) && (num2 != ``) && (num1 != ".") && (num1 != "-")
    && (num2 != ".") && (num2 != "-"))) {

        if ((num2 != "0") || ((num2 == 0) && (operators.value != " / "))) {
            answer = operate(num1, num2, operatorDisplay);
            tempAns = answer.toString();

                // Converts answer to exponent if larger than 8 digits.
                if ((tempAns.length > 8) && (answer % 1 == 0)) {
                    answer = answer.toExponential(5);
                    clearNum1();
                    clearOperator();
                    clearNum2();
                    display.textContent = answer;
                };

                // Rounds answer to 8 digits if it is a float and greater than 8 characters in length.
                if ((tempAns.length > 8) && (answer % 1 != 0)) {
                    answer = parseFloat(answer);
                    answer = answer.toExponential(5);
                    clearNum1();
                    clearOperator();
                    clearNum2();
                    display.textContent = answer;
                    };

                // If answer has a decimal place and that decimal === 0, remove decimal.
                if (answer[1] === "0") {
                    answer[1] = ``;
                    clearNum1();
                    clearOperator();
                    clearNum2();
                    display.textContent = answer;
                    };

            clearNum1();
            clearOperator();
            clearNum2();
            display.textContent = answer;

}}};


// Assigns keydown events to number keys, operator keys, backspace, shift, control, and enter keys.
document.addEventListener("keydown", (e) => {

    // Prevents default actions for Enter and Backspace keys and triggers equate and backspace functions when keyed.
    let key = e.key;
    if (key === "Enter") key = equate();
    if (key === "Backspace") key = backspace();
    if (key === "Shift") key = clear();
    if (key === "Control") key = negate();
        e.preventDefault();
        e.stopImmediatePropagation();

    // Clears calculator and adds keyed number to num1 variable when clicked.
    if (((key === "0") || (key === "1") || (key === "2") || (key === "3") || (key === "4") || (key === "5") || 
    (key === "6") || (key === "7") || (key === "8") || (key === "9") || (key === ".")) && (answer != '')) {
        clear();
        num1 += key;
        display.textContent = "";
        display.textContent += num1;

    // Adds number to num1 variable when keyed so long as calculator variables are all empty.
    } else if (((key === "0") || (key === "1") || (key === "2") || (key === "3") || (key === "4") || (key === "5") || 
    (key === "6") || (key === "7") || (key === "8") || (key === "9") || (key === ".")) && ((num1 === ``))) {
        num1 += key;
        display.textContent = '';
        display.textContent += num1;

    // Adds numbers to num1 variable so long as num1 is the only variable containing data.
    } else if (((key === "0") || (key === "1") || (key === "2") || (key === "3") || (key === "4") || (key === "5") || 
    (key === "6") || (key === "7") || (key === "8") || (key === "9") || (key === ".")) && ((num1 != '') && (operatorDisplay === "") && 
    (num2 === ''))) {

        // Limits num1 to contain only one decimal.
        if (num1.includes(".") && (key === ".")) {
            return;
        };

            // Prevents decimals from having more than 8 characters, including decimal point (for num1).
            if ((num1.length > 8) && (num1 % 1 != 0)) {
                num1 = num1.split(`.`);
                num1[1] = Math.floor(num1[1] / 10);
                num1 = (`${num1[0]}` + `.` + `${num1[1]}`);
                display.textContent = '';
                display.textContent += `${num1}`;
                alert("Numbers cannot exceed 8 characters.")
            };

                // Prevents variables from having numbers longer than 8 digits (for num1).
                if (num1.length > 8) {
                    num1 = Math.floor(num1 / 10);
                    display.textContent = '';
                    display.textContent += `${num1}`;
                    alert("Numbers cannot exceed 8 characters.");
                };

        num1 += key;
        display.textContent = '';
        display.textContent += num1;
    
    // Assigns answer to num1 and keyed operator to operatorDisplay if answer variable contains data.
    } else if (((answer != ``) && (answer.toString().includes("e") == false)) && ((key === "+") || (key === "-") || 
    (key === "*") || (key === "/"))) {

            num1 = `${answer}`;
            clearAnswer();
            operatorDisplay = ` ${operators.value} `;
            display.textContent = ``;
            display.textContent += `${num1} ${operatorDisplay} `;

    // Clears calculator if answer contains exponents to avoid overcrowding calculator screen.
    } else if (((answer != '') && (answer.toString().includes("e") == true)) && ((key === "+") || (key === "-") || 
    (key === "*") || (key === "/"))) {
        alert("Value too large for operation.");
        clear();
    
    // Adds operators so long as num1 has data and other variables are empty.
    } else if (((key === "+") || (key === "-") || (key === "*") || (key === "/")) && ((num1 != '') && 
    (operatorDisplay === ''))) {
        operatorDisplay += ` ${key} `;
        display.textContent = '';
        display.textContent += `${num1} ${operatorDisplay} `;

    // Adds number to num2 variable so long as num1 and operatorDisplay variables contain data.
    } else if (((key === "0") || (key === "1") || (key === "2") || (key === "3") || (key === "4") || (key === "5") || 
    (key === "6") || (key === "7") || (key === "8") || (key === "9") || (key === ".")) && ((num1 != '') && (operatorDisplay != '') && 
    (num2 == ""))) {
        num2 += key;
        display.textContent = '';
        display.textContent = `${num1} ${operatorDisplay} ${num2}`;

    // Adds numbers to num2 variable so long as num1, operatorDisplay, and num2 contain data.
    } else if (((key === "0") || (key === "1") || (key === "2") || (key === "3") || (key === "4") || (key === "5") || 
    (key === "6") || (key === "7") || (key === "8") || (key === "9") || (key === ".")) && ((num1 != '') && (operatorDisplay != '') && 
    (num2 != ""))) {

        // Limits num2 to contain only one decimal.
        if (num2.includes(".") && (key === ".")) {
            return;
        };

            // Prevents num2 from having more than 8 characters including decimal point.
            if ((num2.length > 8) && (num2 % 1 != 0) ) {
                num2 = num2.split(`.`);
                num2[1] = Math.floor(num2[1] / 10);
                num2 = (`${num2[0]}` + `.` + `${num2[1]}`);
                display.textContent = '';
                display.textContent += `${num1} ${operatorDisplay} ${num2}`;
                alert("Numbers cannot exceed 8 characters.")
            };

                // Prevents num2 from having numbers longer than 8 digits.
                if (num2.length > 8) {
                    num2 = Math.floor(num2 / 10);
                    display.textContent = '';
                    display.textContent += `${num1} ${operatorDisplay} ${num2}`;
                    alert("Numbers cannot exceed 8 characters.");
                };

        num2 += key;
        display.textContent = '';
        display.textContent = `${num1} ${operatorDisplay} ${num2}`;

}});
