const left = document.getElementById('btnLeft');
const right = document.getElementById('btnRight');
const slides = document.querySelector('.sliderImg');
const bottom = document.getElementById('bottom')

let currentSlide = 0;
function showSlide() {
    slides[currentSlide].classList.add('block')
}
function hideSlide(){
    slides[currentSlide].classList.remove("block")
}
function nextSlide() {
    hideSlide()
    currentSlide++;
    if (currentSlide > slides.length - 1) {
        currentSlide = 0;
    }
    showSlide()
}
function previousSlide(){
    hideSlide();
    currentSlide--;
    if (slides[currentSlide] < 0){
        currentSlide = slides.length - 1;
    }
    showSlide()
}