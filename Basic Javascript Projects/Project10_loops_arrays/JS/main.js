// While loop counting from 1 to 50
function Call_Loop() {
    var Digit = "";
    var X = 1;
    while (X < 51) {
        Digit += "<br>" + X;
        X++;
    }
    document.getElementById("Loop").innerHTML = Digit;
}

// Display the number of characters in a string
function Length_Method() {
    var Text = "Length";
    document.getElementById("Length").innerHTML = Text.length;
}


// Array of instruments used, for loop
    var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
    var Content = "";
    var Y;
    function for_Loop() {
    for (Y = 0; Y < Instruments.length; Y++) {
        Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
    }

// Create and display values from an array
    function array_Function() {
        var Batman_Villain = [];
        Batman_Villain[0]="Joker";
        Batman_Villain[1]="Penguin";
        Batman_Villain[2]="Riddler";
        Batman_Villain[3]="Two-Face";
        document.getElementById("Array").innerHTML = "Batman is fighting " + Batman_Villain[2] + ".";
    }

// constant object
function constant_Function() {
    const Batman = {
        name: "Bruce Wayne",
        location: "Wayne Manor"
    };

    Batman.name = "Confidential";
    Batman.location = "Confidential";
    Batman.car = "Batmobile";

    document.getElementById("Constant").innerHTML =
        "Batman's real name is " + Batman.name +
        ", his location is " + Batman.location +
        ", and he drives the " + Batman.car + ".";
}

// Scope
function let_Function() {
    let X = 80;
    document.getElementById("Let").innerHTML = X;
    {
    let X = 40;
    console.log(X);
    }
}

// Call a function that returns a value
function return_Function() {
    document.getElementById("Return").innerHTML = myFunction("Nick");
}

// Return 
function myFunction(name) {
    return "Hello, my name is " + name;
}

// Properties 
let batmobile = {
    model: "Tumbler",
    year: "2005",
    color: "black",
    description: function() {
        return "The Batmobile is the " + this.model +
            " in " + this.color +
            " from the year " + this.year + ".";
    }
};

function Batmobile_Function() {
    document.getElementById("Batmobile_Object").innerHTML = batmobile.description();
}

// break statement stopping a loop 
function break_Loop() {
    let text = "";
    for (let i = 1; i <= 10; i++) {
        if (i === 6) {
            break;
        }
        text += i + "<br>";
    }
    document.getElementById("Break").innerHTML = text;
}

// Continue statement stopping
function continue_Loop() {
    let text = "";
    for (let i = 1; i <= 10; i++) {
        if (i === 6) {
            continue;
        }
        text += i + "<br>";
    }
    document.getElementById("Continue").innerHTML = text;
}