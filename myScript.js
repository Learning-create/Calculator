let firstNum;
let operator;
let secondNum;

function operate(num1, oper, num2) {
    if (oper === "+") {
        add(num1, num2);
    } else if (oper === "-") {
        subs(num1, num2);
    } else if (oper === "*") {
        mult(num1, num2);
    } else if (oper === "/") {
        div(num1, num2);
    }
}

function add(num1, num2) {
    total = num1 + num2;
    console.log(total)
}

function subs(num1, num2) {
    total = num1 - num2;
    console.log(total)
}

function mult(num1, num2) {
    total = num1 * num2;
    console.log(total)
}

function div(num1, num2) {
    total = num1 / num2;
    console.log(total)
}

console.log(operate(10, "+", 2));
console.log(operate(10, "-", 2));
console.log(operate(10, "*", 2));
console.log(operate(10, "/", 2));