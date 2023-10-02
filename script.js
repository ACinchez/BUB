let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}

const audio = document.querySelector("#backgroundMusic");
const playButton = document.querySelector("#playButton");

playButton.addEventListener("click", function() {
  audio.play();
  playButton.style.display = "none"; // Hide the play button after clicking
});
