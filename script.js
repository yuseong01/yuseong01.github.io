
document.addEventListener('DOMContentLoaded', function () {
    const elements = [
        document.querySelector('.headline'),
        document.querySelector('.qr-section'),
        document.querySelector('.laptop-icon'),
        document.querySelector('.title'),
        document.querySelector('.description'),
        document.querySelector('.cta-buttons')
    ];

    setTimeout(() => {
        elements.forEach((element, index) => {
            setTimeout(() => {
                element.classList.add('active');
            }, index * 200);
        });
    }, 300);

    // 이미지 무한 스크롤
    const sliderContainer = document.querySelector('.slider-container');
    const sliderItems = document.querySelectorAll('.slider-item');
    const slideSpeed = 0.5; 

    if (sliderContainer && sliderItems.length > 0) {
        const firstItemsClone = Array.from(sliderItems).slice(0, 3).map(item => {
            const clone = item.cloneNode(true);
            return clone;
        });

        firstItemsClone.forEach(clone => {
            sliderContainer.appendChild(clone);
        });

        function animateSlider() {
            currentPosition -= slideSpeed;

            // 첫 번째 이미지가 완전히 사라지면 위치 리셋
            const itemWidth = sliderItems[1].offsetWidth;
            if (Math.abs(currentPosition) >= itemWidth) {
                currentPosition += itemWidth;

                // 첫 번째 아이템을 마지막으로 이동 (DOM 재정렬)
                const firstItem = sliderContainer.firstElementChild;
                sliderContainer.appendChild(firstItem);
            }

            sliderContainer.style.transform = `translateX(${currentPosition}px)`;

            requestAnimationFrame(animateSlider);
        }

        sliderContainer.style.display = 'flex';
        sliderContainer.style.transition = 'none'; // 부드러운 애니메이션을 위해 CSS 트랜지션 제거

        requestAnimationFrame(animateSlider);
    }
});
