let firstNum;
let operator;
let secondNum;
let displayed;
let firsDis = document.getElementById("priDisplay");
let secDis = document.getElementById("secDisplay");

let buttons = document.querySelectorAll("button");

for (button of buttons) {
    button.addEventListener("click", function(e) {
            
            if (e.target.id === "clear") {
            firsDis.textContent = "";
            secDis.textContent = "";
        } else if (e.target.className === "num") {
            firsDis.textContent += e.target.id;
        } else if (e.target.id === "add") {
            firNum = document.getElementById("priDisplay").textContent;
            secDis.textContent = firNum + "+";
            oper = "+"
            firsDis.textContent = "";            
        } else if (e.target.id === "subs") {
            firNum = document.getElementById("priDisplay").textContent;
            firsDis.textContent = "";
            oper = "-"
            secDis.textContent = firNum + "-";
            firsDis.textContent = "";
            console.log(firNum)
        } else if (e.target.id === "mult") {
            firNum = document.getElementById("priDisplay").textContent;
            firsDis.textContent = "";
            oper = "*"
            secDis.textContent = firNum + "*";
            firsDis.textContent = "";
            console.log(firNum)
        } else if (e.target.id === "div") {
            firNum = document.getElementById("priDisplay").textContent;
            oper = "/"
            firsDis.textContent = "";
            secDis.textContent = firNum + "/";
            firsDis.textContent = "";
            console.log(firNum)
        } else if (e.target.id === "equal") {
            secNum = document.getElementById("priDisplay").textContent;
            total = operate(firNum, oper, secNum);
            secDis.textContent += secNum;
            firsDis.textContent = total;
        }
        
    })
}

function operate(num1, oper, num2) {
    if (oper === "+") {
        add(num1, num2);
        return total;
    } else if (oper === "-") {
        subs(num1, num2);
        return total;
    } else if (oper === "*") {
        mult(num1, num2);
        return total;
    } else if (oper === "/") {
        div(num1, num2);
        return total;
    }
}

function add(num1, num2) {
    num1 = Number(num1);
    num2 = Number(num2);
    total = num1 + num2;
    console.log(total)
    return total;
}

function subs(num1, num2) {
    total = num1 - num2;
    console.log(total)
    return total;
}

function mult(num1, num2) {
    total = num1 * num2;
    console.log(total)
    return total;
}

function div(num1, num2) {
    total = num1 / num2;
    console.log(total)
    return total;
}

