function clrScreen(){
    document.getElementById("result").value = "";
}

function display(value) {
    document.getElementById("result").value += value;
}

/*function calculate(){
    let a = document.getElementById("result").value;
    let b = eval(a);
    document.getElementById("result").value = b;
}*/

function calculate() {
    let expression = document.getElementById("result").value;
    let numbers = expression.split(/[-+*/]/); 
    let operators = expression.replace(/[0-9.]/g, "").split(""); 

    let result = parseFloat(numbers[0]);

    for (let i = 0; i < operators.length; i++) {
        let num = parseFloat(numbers[i + 1]);

        if (operators[i] === "+") {
            result += num;
        } else if (operators[i] === "-") {
            result -= num;
        } else if (operators[i] === "*") {
            result *= num;
        } else if (operators[i] === "/") {
            result /= num;
        }
    }

    document.getElementById("result").value = result;
}