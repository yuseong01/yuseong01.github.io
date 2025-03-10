
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
       let currentIndex = 0;
       
       // 슬라이더 컨테이너 너비 설정 - 이미지가 모두 표시되도록 함
       if (sliderContainer) {
           sliderContainer.style.width = `${sliderItems.length * 100}%`;
           sliderItems.forEach(item => {
               item.style.width = `${100 / sliderItems.length}%`;
           });
       }
       
       // 3초마다 이미지 슬라이드
       const slideInterval = setInterval(() => {
           if (!sliderContainer) return; // 슬라이더가 없으면 중단
           
           currentIndex++;
           
           if (currentIndex >= sliderItems.length) {
               sliderContainer.style.transition = 'transform 0.5s ease';
               sliderContainer.style.transform = `translateX(-${(currentIndex) * 100 / sliderItems.length}%)`;
               
               // 마지막 슬라이드 후 첫 슬라이드로 돌아가기
               setTimeout(() => {
                   sliderContainer.style.transition = 'none'; // 트랜지션 효과 제거
                   currentIndex = 0;
                   sliderContainer.style.transform = `translateX(0)`; // 첫 번째 이미지로 돌아가기
                   
                   // 트랜지션 다시 활성화
                   setTimeout(() => {
                       sliderContainer.style.transition = 'transform 0.5s ease';
                   }, 50);
               }, 500);
           } else {
               sliderContainer.style.transition = 'transform 0.5s ease';
               sliderContainer.style.transform = `translateX(-${(currentIndex) * 100 / sliderItems.length}%)`;
           }
       }, 3000);
});
