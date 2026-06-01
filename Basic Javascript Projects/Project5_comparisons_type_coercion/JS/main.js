document.write(typeof "Nicholas");

document.write(typeof 42);

document.write("10" + 5);

function NaN_Function() {
    document.getElementById("Test").innerHTML = 0/0;
}

function true_Function() {
    document.getElementById("Test2").innerHTML = isNaN("This is a string")
}

function false_Function() {
    document.getElementById("Test3").innerHTML = isNaN("007");
}

function infinity_Function() {
    document.getElementById("Infinity").innerHTML = 2E310
}

function negativeInfinity_Function() {
    document.getElementById("NegativeInfinity").innerHTML = -2E310
}

function greater_than_True() {
    document.write (10 > 2);
}

function less_than_False() {
    document.write (10 < 2);
}

console.log(2 + 2);

console.log(10 < 2);

document.write(10 == 10);
document.write("<br>");
document.write(3 == 11);

// true 
X = 5;
Y = 5;
document.write(X === Y);

// false_Function
X = 5;
Y = "5";
document.write(X === Y);

// false - different data type and different value
X = 5;
Y = "10";
document.write(X === Y);

// false - same data type but different value
A = "Nick";
B = "Nicholas";
document.write(A === B);

document.write("<br>");

// AND Operator - true
document.write(10 > 2 && 10 > 4);

document.write("<br>");

// AND Operator - false
document.write(5 > 10 && 6 > 7);

document.write("<br>");

// OR operator - true
document.write( 5 > 10 || 20 > 10);

document.write("<br>");

// OR Operator - false
document.write( 5 > 10 || 10 > 20);

// NOT Operator
function not_Function() {
    document.getElementById("Not").innerHTML = ! (20 > 10);
}

// NOT Operator - Double Negative
function not_Funtion_Double() {
    document.getElementById("Not2").innerHTML = ! (5 > 10)
}