const userInput = document.querySelector("#userInput");
let expression = '';

function press(num) {
    expression += num;
    userInput.value = expression;
}

function erase() {
    expression = '';
    userInput.value = expression;
}

function equal() {
    userInput.value = eval(expression);
    expression = '';
}