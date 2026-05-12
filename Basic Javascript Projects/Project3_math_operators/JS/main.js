function addition_Function() {
    var addition = 2 + 2;
    document.getElementById("Math_Plus").innerHTML = "2 + 2 = " + addition;
}

function subtraction_function() {
    var Subtraction = 5 - 2;
    document.getElementById("Math_Subtract").innerHTML = "5 - 2 = " + Subtraction;
}

function multiplication() {
    var simple_Math = 6 * 8;
    document.getElementById("Math_Multiply").innerHTML = "6 x 8 = " + simple_Math;

}
function division() {
    var simple_Math = 48 / 6;
    document.getElementById("Math_Divide").innerHTML = "48 / 6 = " + simple_Math;
}

function more_Math() {
    var All_Math = (1+2) * 10 / 2 - 5;
    document.getElementById("Math_All").innerHTML = "1 plus 2, multiplied by 10, divided in half and then subtracted by 5 equals " + All_Math; 
}

//modulus operator
function Math_Percentage() {
    var simple_Math2 = 25 % 6;
    document.getElementById("Math_Percentage").innerHTML = "When you divide 25 by 6 you have a remainder of: " + simple_Math2;
}

function negation_Operator() {
    var x = 10;
    document.getElementById("Math_Negation").innerHTML = -x;
}

// Increment 

function increment_Function() {

var X = 5;
X++;
document.getElementById("Increment").innerHTML = X;

}

//Decrement

function decrement_Function() {
var X = 5.25;
X--;
document.getElementById("Decrement").innerHTML = X;
}

//random number

function random_Number(){

window.alert(Math.random());
}

//random between 0 and 100
function random_Number100(){
window.alert(Math.floor(Math.random() *100))
}