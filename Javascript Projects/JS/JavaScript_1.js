function Star_Wars_Function() {
    var Output;
    var Film = document.getElementById("Star_Wars_Input").value;
    var Film_String = " is a great choice!";
    switch(Film) {
        case "The Phantom Menace":
        Output = "The Phantom Menace" + Film_String;
        break;
        case "Attack Of The Clones":
        Output = "Attack Of The Clones" + Film_String;
        break;

        case "Revenge Of The Sith":
        Output = "Revenge Of The Sith" + Film_String;
        break;

        case "A New Hope":
        Output = "A New Hope" + Film_String;
        break;

        case "The Empire Strikes Back":
        Output = "The Empire Strikes Back" + Film_String;
        break;

        case "Return Of The Jedi":
        Output = "Return Of The Jedi" + Film_String;
        break;

        case "The Force Awakens":
        Output = "The Force Awakens" + Film_String;
        break;

        case "The Last Jedi":
        Output = "The Last Jedi" + Film_String;
        break;

        case "The Rise Of Skywalker":
        Output = "The Rise Of Skywalker" + Film_String;
        break;

        default:
        Output = "Please enter a Star Wars film from the list.";
    }
    document.getElementById("Output").innerHTML = Output;
}

function Hello_World_Function() {
    var A = document.getElementsByClassName("Click");
    A[0].innerHTML = "The text has changed!";
}



// Circle from w3
var c = document.getElementById("Canvas_Name");
var ctx = c.getContext("2d");

ctx.beginPath();
ctx.arc(250, 125, 124, 0, 2 * Math.PI);
ctx.stroke();

// Linear Gradient from w3 schools
var c2 = document.getElementById("Gradient_Canvas");
var ctx2 = c2.getContext("2d");

var grd = ctx2.createLinearGradient(0, 0, 500, 0);
grd.addColorStop(0, "red");
grd.addColorStop(1, "yellow");
ctx2.fillStyle = grd;
ctx2.fillRect(0, 0, c2.width, c2.height);
