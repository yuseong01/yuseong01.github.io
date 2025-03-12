
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

    // 이미지 슬라이더
    const sliderContainer = document.querySelector('.slider-container');
    const sliderItems = document.querySelectorAll('.slider-item');
    const slideSpeed = 0.5; 

    if (sliderContainer && sliderItems.length > 0) {
        //무한 스크롤 효과 만들기
        const firstItemsClone = Array.from(sliderItems).slice(0, 3).map(item => {
            const clone = item.cloneNode(true);
            return clone;
        });
        
        // 복제된 아이템을 슬라이더 끝에 추가
        firstItemsClone.forEach(clone => {
            sliderContainer.appendChild(clone);
        });

        // **초기 위치를 첫 번째 이미지 너비만큼 왼쪽으로 이동**
        const itemWidth = sliderItems[0].offsetWidth;
        let currentPosition = -itemWidth;  
        sliderContainer.style.transform = `translateX(${currentPosition}px)`;
 
        
        function animateSlider() {
            currentPosition -= slideSpeed;
            
            // 첫 번째 이미지가 완전히 사라지면 위치 리셋            
            if (Math.abs(currentPosition) >= itemWidth) {                
                // 트랜지션을 잠시 제거
                sliderContainer.style.transition = 'none';

                // 첫 번째 아이템을 마지막으로 이동 (DOM 재정렬)
                const firstItem = sliderContainer.firstElementChild;
                sliderContainer.appendChild(firstItem);
                
                //위치조정
                currentPosition += itemWidth;

                // 위치 재조정 후 트랜지션 재적용
                setTimeout(() => {
                    sliderContainer.style.transition = 'transform 0.5s ease'; // 트랜지션 다시 활성화
                }, 50);
            }
            
            sliderContainer.style.transform = `translateX(${currentPosition}px)`;
            
            requestAnimationFrame(animateSlider);
        }
        
        sliderContainer.style.display = 'flex';
        sliderContainer.style.transition = 'transform 0.5s ease';        
        
        requestAnimationFrame(animateSlider);
    }
});
