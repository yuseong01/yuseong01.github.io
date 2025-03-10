
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

    //이미지 슬라이더 기능
      const sliderContainer = document.querySelector('.slider-container');
      const sliderItems = document.querySelectorAll('.slider-item');
      let currentIndex = 0;
      
      // 3초마다 이미지 슬라이드
      setInterval(() => {
          currentIndex++;
          
          // 마지막 이미지 이후에는 처음으로 돌아가기
          if (currentIndex >= sliderItems.length - 1) {
              setTimeout(() => {
                  sliderContainer.style.transition = 'none'; // 트랜지션 효과 제거
                  currentIndex = 0;
                  sliderContainer.style.transform = `translateX(0)`;
                  
                  // 트랜지션 다시 활성화
                  setTimeout(() => {
                      sliderContainer.style.transition = 'transform 0.5s ease';
                  }, 50);
              }, 500);
          }
          
          // 슬라이더 이동
          sliderContainer.style.transition = 'transform 0.5s ease';
          sliderContainer.style.transform = `translateX(-${currentIndex * 100 / 3}%)`;
      }, 3000);
});
