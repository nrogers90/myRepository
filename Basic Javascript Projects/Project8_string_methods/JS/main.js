function full_Sentence() {
    var part_1 = "This is ";
    var part_2 = "all going ";
    var part_3 = "to join ";
    var part_4 = "together.";
    var whole_sentence = part_1.concat(part_2, part_3, part_4);
    document.getElementById("Concatenate").innerHTML = whole_sentence;
}

function slice_Method() {
    var Sentence = "Only one word in this sentence will be displaced, and this is it."
    var Section = Sentence.slice(54,58);
    document.getElementById("Slice").innerHTML = Section;
}

// Uppercase Challenge

function upper_Method() {
    var text = "this is in capitals";
    document.getElementById("Upper").innerHTML = text.toUpperCase();
}

// Search String Challenge
function search_Method() {
    var text = "My string search is here.";
    var position = text.search("here");
    document.getElementById("Search").innerHTML = position;
}

//Number String Method
function string_Method() {
    var X = 123;
    document.getElementById("Numbers_to_string()").innerHTML = X.toString;
}

//Precision Method
function precision_Method() {
    var X = 1234.56789
    document.getElementById("Precision").innerHTML = X.toPrecision(6);
}

// Fixed Method
function fixed_Method(){
    var num = 10.12345
    document.getElementById("Fixed").innerHTML = num.toFixed(2);
}

// Value Of
function value_Method(){
    var num = 25;
    document.getElementById("Value").innerHTML = num.valueOf();
}