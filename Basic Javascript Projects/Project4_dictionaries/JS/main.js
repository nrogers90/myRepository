function my_Dictionary() {
    var Bounty_Hunters = {
        Name: "Bossk",
        Species: "Trandoshian",
        Film: "The Empire Strikes Back",
        Episode: 5
    };

    delete Bounty_Hunters.Species;
    
    document.getElementById("Dictionary").innerHTML = Bounty_Hunters.Name;
}