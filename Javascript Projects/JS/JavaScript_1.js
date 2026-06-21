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