function My_First_Function() {
    var str = "This is the button text";
    var color = "blue";
    var sentence = "This is one half of a sentence ";
    sentence += "and this is the other half";

    document.getElementById("Button_Text").innerHTML = sentence;
    document.getElementById("Button_Text").style.color = color;
}

// Function Challenge
function toCelsius(fahrenheit) {
    return (5/9) * (fahrenheit-32);
}

let text = "The temperature is " + toCelsius(41) + " Celsius.";
document.getElementById("Temperature").innerHTML = text;

document.getElementById("element").innerHTML = "My element!";