/**Toggle between light and darkmode*/
//Dark mode button
/*let themeModeBtn = document.querySelector('[theme-mode]');
//Listen for a click on the theme mode toggle button
themeModeBtn.addEventListener('click',()=>{
    if(prefersDarkScheme.matches){
        document.body.classList.toggle('light-theme');
    }
    else{
        document.body.classList.toggle('dark-theme')
    }
})*/
//mobile nav control
let navBtn = document.querySelector(".mobile-menu");
//menu close button
let closeBtn = document.querySelector('.close-btn');
//open menu drawer when the menu button is clicked
navBtn.addEventListener('click', ()=>{
    document.querySelector('.active-menu').style.display = 'block';
    document.querySelector('.close-btn').style.display = 'block';

    document.getElementById('menu-panel').classList.add('m-nav-link');

    document.getElementById('menu-panel').classList.remove('menu-panel');

});
//close the menu when the close button is clicked
closeBtn.addEventListener('click', ()=>{
    document.querySelector('.active-menu').style.display = 'none';
    document.querySelector('.close-btn').style.display = 'none';
    document.getElementById('menu-panel').classList.remove('m-nav-link');

    document.getElementById('menu-panel').classList.add('menu-panel');


});
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
    let slides = document.getElementsByClassName("slide-item");
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

  //automatic slide
showSlide();

function showSlide() {
  let i;
  let slides = document.getElementsByClassName("slide-item");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlide, 2000); // Change image every 2 seconds
}