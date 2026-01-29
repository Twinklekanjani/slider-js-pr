let currentSlide = 0;
let carouselItems = document.querySelectorAll('.carousel-item');

const clearActive = () => {
    carouselItems.forEach(item => {
        item.classList.remove('active');
    });
};

const nextSlide = () => {
    clearActive();
    currentSlide++;

    if (currentSlide >= carouselItems.length) {
        currentSlide = 0;
    }

    carouselItems[currentSlide].classList.add('active');
};

const prevSlide = () => {
    clearActive();
    currentSlide--;

    if (currentSlide < 0) {
        currentSlide = carouselItems.length - 1;
    }

    carouselItems[currentSlide].classList.add('active');
};