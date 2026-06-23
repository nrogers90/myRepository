const images = document.querySelectorAll("#gallery img");
const modal = document.getElementById("lightbox");
const modalImg = document.getElementById("lightbox-img");
const closeBtn = document.querySelector(".close");

images.forEach(image => {
    image.addEventListener("click", function() {
        modal.style.display = "block";
        modalImg.src = this.src;
    });
});

closeBtn.addEventListener("click", function() {
    modal.style.display = "none";
});