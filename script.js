
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

    // 이미지 슬라이더 기능
    const sliderContainer = document.querySelector('.slider-container');
    const sliderItems = document.querySelectorAll('.slider-item');
    let currentPosition = 0;
    const slideSpeed = 0.5; // 슬라이드 속도 (픽셀/프레임)

    // 슬라이더가 있을 경우만 실행
    if (sliderContainer && sliderItems.length > 0) {
        // 슬라이더 아이템 복제하여 무한 스크롤 효과 만들기
        const firstItemsClone = Array.from(sliderItems).slice(0, 3).map(item => {
            const clone = item.cloneNode(true);
            return clone;
        });

        // 복제된 아이템을 슬라이더 끝에 추가
        firstItemsClone.forEach(clone => {
            sliderContainer.appendChild(clone);
        });

        // 애니메이션 함수
        function animateSlider() {
            currentPosition -= slideSpeed;

            // 첫 번째 이미지가 완전히 사라지면 위치 리셋
            const itemWidth = sliderItems[0].offsetWidth;
            if (Math.abs(currentPosition) >= itemWidth) {
                currentPosition += itemWidth;

                // 첫 번째 아이템을 마지막으로 이동 (DOM 재정렬)
                const firstItem = sliderContainer.firstElementChild;
                sliderContainer.appendChild(firstItem);
            }

            // 실제 이동 적용
            sliderContainer.style.transform = `translateX(${currentPosition}px)`;

            // 애니메이션 계속 실행
            requestAnimationFrame(animateSlider);
        }

        // CSS 초기 설정
        sliderContainer.style.display = 'flex';
        sliderContainer.style.transition = 'none'; // 부드러운 애니메이션을 위해 CSS 트랜지션 제거

        // 애니메이션 시작
        requestAnimationFrame(animateSlider);
    }
});
