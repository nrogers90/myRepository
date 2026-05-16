function my_Dictionary() {

    // dictionary:
    var Bounty_Hunters = {
        Name: "Bossk",
        Species: "Trandoshian",
        Film: "The Empire Strikes Back",
        Episode: 5
    };

    // delete bounty hunter's name
    delete Bounty_Hunters.Name;


    // display the deleted value n HTML
    document.getElementById("Dictionary").innerHTML = Bounty_Hunters.Name;
}