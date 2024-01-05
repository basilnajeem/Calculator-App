let displayScreen = document.querySelector(".display-screen");
let resetButton = document.querySelector(".reset-button");
let equalButton = document.querySelector(".equal-button");
let deleteButton = document.querySelector(".delete-button");
let buttons = document.querySelectorAll(".number-pad button");

let expression = '';

buttons.forEach(button => {
    button.addEventListener("click", function() {
        const buttonValue = this.value; 
        expression += buttonValue;
        displayScreen.value = expression;
    });
});

resetButton.addEventListener("click" , function () {
    displayScreen.value = "";
    expression = "";
});

equalButton.addEventListener("click" , function () {
    let result = eval(expression);
    displayScreen.value = result;
    expression = result.toString();
});

deleteButton.addEventListener("click" , function () {
    expression = expression.slice(0, -1);
    displayScreen.value = expression;
});
