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
            firNum = undefined;
            secNum = undefined;
            oper = undefined;
            total = undefined;

        } else if (e.target.id === "corr" && !firsDis.textContent.includes("a") ) {

            toCorr = document.getElementById("priDisplay").textContent;
            arr = toCorr.split("");
            arr.pop();
            correct = arr.toString();
            firsDis.textContent = correct;

        } else if (e.target.id === ".") {

            if(!firsDis.textContent.includes(".")) {
                firsDis.textContent += e.target.id;
            }

        }else if (e.target.className === "num") {

            firsDis.textContent += e.target.id;

        } else if (e.target.id === "add") {

            if (secDis.textContent !== "") {

                secNum = document.getElementById("priDisplay").textContent;
                total = operate(firNum, oper, secNum);
                secDis.textContent = total + "+";
                firNum = total;
                oper = "+";
                firsDis.textContent = "";

            } else {

                firNum = document.getElementById("priDisplay").textContent;
                secDis.textContent = firNum + "+";
                oper = "+"
                firsDis.textContent = "";

            }

            
        } else if (e.target.id === "subs") {

            if (secDis.textContent !== "") {

                secNum = document.getElementById("priDisplay").textContent;
                total = operate(firNum, oper, secNum);
                secDis.textContent = total + "-";
                firNum = total;
                oper = "-";
                firsDis.textContent = "";

            } else {

                firNum = document.getElementById("priDisplay").textContent;
                firsDis.textContent = "";
                oper = "-"
                secDis.textContent = firNum + "-";
                firsDis.textContent = "";
                
            }

        } else if (e.target.id === "mult") {
            if (secDis.textContent !== "") {

                secNum = document.getElementById("priDisplay").textContent;
                total = operate(firNum, oper, secNum);
                secDis.textContent = total + "*";
                firNum = total;
                oper = "*";
                firsDis.textContent = "";

            } else {

                firNum = document.getElementById("priDisplay").textContent;
                firsDis.textContent = "";
                oper = "*"
                secDis.textContent = firNum + "*";
                firsDis.textContent = "";

            }

        } else if (e.target.id === "div") {

            if (secDis.textContent !== "") {

                secNum = document.getElementById("priDisplay").textContent;
                total = operate(firNum, oper, secNum);
                secDis.textContent = total + "/";
                firNum = total;
                oper = "/";
                firsDis.textContent = "";

            } else {

                firNum = document.getElementById("priDisplay").textContent;
                oper = "/"
                firsDis.textContent = "";
                secDis.textContent = firNum + "/";
                firsDis.textContent = "";

            }

        } else if (e.target.id === "equal") {

            secNum = document.getElementById("priDisplay").textContent;

            if (secNum === "0" && oper === "/") {

                firsDis.textContent = "";
                secDis.textContent = "";
                firNum = undefined;
                secNum = undefined;
                oper = undefined;
                total = undefined;
                firsDis.textContent = "Touch grass"


            } else if (secDis.textContent !== "") {

                
                total = operate(firNum, oper, secNum);
                secDis.textContent += secNum;
                firsDis.textContent = total;

            }
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
    total = Math.round((total + Number.EPSILON) * 100) / 100
    return total;
}

function subs(num1, num2) {
    total = num1 - num2;
    total = Math.round((total + Number.EPSILON) * 100) / 100
    return total;

}

function mult(num1, num2) {
    total = num1 * num2;
    total = Math.round((total + Number.EPSILON) * 100) / 100
    return total;
}

function div(num1, num2) {
    total = num1 / num2;
    total = Math.round((total + Number.EPSILON) * 100) / 100
    return total;
}

