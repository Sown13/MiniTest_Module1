
function addition(){
    let x,y,a;
    x = document.getElementById("number1").valueAsNumber;
    y = document.getElementById("number2").valueAsNumber;
    a = x + y ;
    document.getElementById("result").innerHTML = "Result: total =" + " " + a ;
}
function subtraction() {
    let x,y,b;
    x = document.getElementById("number1").valueAsNumber;
    y = document.getElementById("number2").valueAsNumber;
    b = x - y ;
    document.getElementById("result").innerHTML = "Result: Subtraction =" + " " + b ;
}
function multiple() {
    let x,y,c;
    x = document.getElementById("number1").valueAsNumber;
    y = document.getElementById("number2").valueAsNumber;
    c = x*y ;
    document.getElementById("result").innerHTML = "Result: Multiple =" + " " + c ;
}
function division() {
    let x,y,d;
    x = document.getElementById("number1").valueAsNumber;
    y = document.getElementById("number2").valueAsNumber;
    d = x/y ;
    document.getElementById("result").innerHTML = "Result: Division =" + " " + d ;
}
document.getElementById("addition").addEventListener("click",addition);
document.getElementById("subtract").addEventListener("click",subtraction);
document.getElementById("multiple").addEventListener("click",multiple);
document.getElementById("division").addEventListener("click",division);