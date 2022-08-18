let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
function changeImg() {
    var image = document.getElementById('myImg');
    if (image.src.match("https://www.gadgetbytenepal.com/wp-content/uploads/2021/09/Sastodeal-Great-Electronics-Sale.jpg")) {
        image.src = "https://images-eu.ssl-images-amazon.com/images/G/31/CEPC/2022/AUgART/1500X550_1_03.gif";
    }
    

    else {
        image.src = "https://www.gadgetbytenepal.com/wp-content/uploads/2021/09/Sastodeal-Great-Electronics-Sale.jpg";
    }
}

