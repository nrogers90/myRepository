function My_First_Function() {
    var str = "This is the button text";
    var color = "blue";
    var sentence = "This is one half of a sentence ";
    sentence += "and this is the other half";

    document.getElementById("Button_Text").innerHTML = sentence;
    document.getElementById("Button_Text").style.color = color;
}