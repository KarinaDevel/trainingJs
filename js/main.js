function openWindow(){
    const modalWindow = document.getElementById("modalOpen");
    modalWindow.style.display = 'flex';
}
function closeWindow(){
    const modalWindow = document.getElementById("modalOpen");
    modalWindow.style.display = 'none';
}
function openBurger(){
    const list = document.getElementById('list');
    list.style.display = "block"
}
function closeBurger(){
    const list = document.getElementById('list');
    list.style.display = "none"
}



const left = document.getElementById('btnLeft');
const right = document.getElementById('btnRight');
const slides = document.querySelectorAll('.sliderImg');
const bottom = document.querySelectorAll('.bottom .circle')

let currentSlide = 0;
function showSlide() {
    slides[currentSlide].classList.add('block')
    if (bottom[currentSlide]) {
        bottom[currentSlide].classList.add('active');
    }
}
function hideSlide(){
    slides[currentSlide].classList.remove("block");
    if (bottom[currentSlide]) {
        bottom[currentSlide].classList.remove('active');
    }
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
