let currentSlide = 0;
let slideInterval;

function showSlide(index) {
    const slides = document.getElementsByClassName('slide');
    if (index >= slides.length) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = slides.length - 1;
    } else {
        currentSlide = index;
    }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    slides[currentSlide].style.display = 'block';
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function prevSlide() {
    showSlide(currentSlide - 1);
}

function startCarousel() {
    slideInterval = setInterval(nextSlide, 2000); // Change slide every 2 seconds (2000 milliseconds)
}

function stopCarousel() {
    clearInterval(slideInterval);
}

window.onload = function() {
    showSlide(currentSlide);
    startCarousel(); // Start auto-switching
};
