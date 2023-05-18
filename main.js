function clrScreen(){
    document.getElementById("result").value = "";
}

function display(value) {
    document.getElementById("result").value += value;
}

function calculate(){
    let a = document.getElementById("result").value;
    let b = eval(a);
    document.getElementById("result").value = b;
}