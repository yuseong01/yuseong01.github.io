
document.addEventListener('DOMContentLoaded', function () {
    const elements = [
        document.querySelector('.headline'),
        document.querySelector('.qr-section'),
        document.querySelector('.laptop-icon'),
        document.querySelector('.title'),
        document.querySelector('.description'),
        document.querySelector('.cta-buttons')
    ];

    // 슬라이더에 대한 애니메이션 
    const sliderContainer = document.querySelector('.slider-container');
    let currentIndex = 0;
    const slideCount = document.querySelectorAll('.slider-item').length;

    setInterval(() => {
        currentIndex = (currentIndex + 1) % slideCount;
        sliderContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
    }, 3000); 


    setTimeout(() => {
        elements.forEach((element, index) => {
            setTimeout(() => {
                element.classList.add('active');
            }, index * 200);
        });
    }, 300);
});
