function openForm() {

  document.getElementById("myForm").style.display = "block";

}

function closeForm() {

  document.getElementById("myForm").style.display = "none";

}

let gowerImages = [
    "images/gower_1.jpg",
    "images/gower_2.jpg",
    "images/gower_3.jpg"
];

let gowerIndex = 0;

function changeGowerImage() {
    gowerIndex++;

    if (gowerIndex >= gowerImages.length) {
        gowerIndex = 0;
    }

    document.getElementById("Gower_Slideshow").src = gowerImages[gowerIndex];
}

setInterval(changeGowerImage, 3000);