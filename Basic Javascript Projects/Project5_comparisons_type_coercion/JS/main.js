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