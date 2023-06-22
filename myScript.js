let firstNum;
let operator;
let secondNum;
let displayed;
let display = document.getElementById("display");

let buttons = document.querySelectorAll("button");

for (button of buttons) {
    button.addEventListener("click", function(e) {
            
            if (e.target.id === "clear") {
            display.textContent = "";
        } else if (e.target.className === "num") {
            display.textContent += e.target.id;
        } else if (e.target.className === "operator") {

        }
        let disNum = document.getElementById("display").textContent;
    })
}

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
