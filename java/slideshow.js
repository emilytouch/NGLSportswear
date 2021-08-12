var slideIndex = 0;
var slideId = ["indexslide"];
showSlides();

function showSlides() {
    var i;
    var x = document.getElementsByClassName(slideId);
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > x.length) { slideIndex = 1 }
    x[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 5000);
}