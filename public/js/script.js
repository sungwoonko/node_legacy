// 네비게이션 바 변경 처리  
const navbar = document.querySelector('.navbar');  
const logo = document.querySelector('.navbar-left .logo img');  
const navbarLinks = document.querySelectorAll('.navbar-center .menu li a');  

window.addEventListener('scroll', () => {  
    if (window.scrollY > 50) {  
        navbar.style.height = '40px'; // 작아지는 효과  
        navbar.style.padding = '10px 30px'; // 내비게이션 간격 축소  
        navbar.style.backgroundColor = '#f4f4f4'; // 배경색 변경  
        navbar.style.boxShadow = '0 2px 6px rgba(0, 0, 0, 0.15)'; // 그림자 효과 추가  
        logo.style.maxHeight = '30px'; // 로고 크기 축소  
        navbarLinks.forEach(link => (link.style.color = '#555')); // 링크 색상 회색으로 변환  
    } else {  
        navbar.style.height = '50px'; // 기본 크기  
        navbar.style.padding = '20px 40px'; // 기본 여백  
        navbar.style.backgroundColor = '#ffffff'; // 기본 배경색  
        navbar.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)'; // 원래 그림자로 복구  
        logo.style.maxHeight = '50px'; // 로고 원래 크기 복구  
        navbarLinks.forEach(link => (link.style.color = '#888')); // 기본 링크 색상 복구  
    }  
});

const menuToggle = document.querySelector('.menu-toggle'); // 햄버거 버튼  
const menu = document.querySelector('.menu'); // 네비게이션 메뉴 리스트  
const menuLinks = document.querySelectorAll('.menu li a'); // 메뉴 내 링크들 

// 햄버거 버튼 클릭 이벤트  
menuToggle.addEventListener('click', () => {  
    menuToggle.classList.toggle('active'); // 햄버거 모양 변화  
    menu.classList.toggle('active'); // 메뉴 보이거나 숨기기  
});  

// 메뉴 항목 클릭 시 메뉴 닫기  
menuLinks.forEach(link => {  
    link.addEventListener('click', () => {  
        menuToggle.classList.remove('active'); // 햄버거 버튼 복구  
        menu.classList.remove('active'); // 메뉴 닫기  
    });  
});  

// 화면의 다른 곳을 눌러도 메뉴를 닫을 수 있도록 설정  
document.addEventListener('click', (e) => {  
    if (!menu.contains(e.target) && !menuToggle.contains(e.target)) {  
        menuToggle.classList.remove('active'); // 햄버거 버튼 복구  
        menu.classList.remove('active'); // 메뉴 닫기  
    }  
});

// symbol , sungwoon image 부분
document.addEventListener("DOMContentLoaded", () => {  
    const woonSymbol = document.querySelector('.hero-section .woon-symbol');  
  
    // 화면에 요소가 나타났는지 확인하는 함수  
    const isVisible = (element) => {  
      const rect = element.getBoundingClientRect();  
      return rect.top >= 0 && rect.bottom <= window.innerHeight;  
    };  
  
    // 스크롤 이벤트 핸들러  
    const handleScroll = () => {  
      if (isVisible(woonSymbol)) {  
        woonSymbol.classList.add('visible'); // 화면에 보이면 나타내기  
      } else {  
        woonSymbol.classList.remove('visible'); // 화면을 벗어나면 숨기기  
      }  
    };  
  
    // 스크롤 이벤트 연결  
    window.addEventListener('scroll', handleScroll);  
  
    // 페이지 처음 로드 시에도 확인  
    handleScroll();  
  });


// 모핑 효과: 스크롤에 따라 Status Card와 Hero Section 애니메이션  
const statusCard = document.querySelector('.status-card');  

window.addEventListener('scroll', () => {  
  let cardTop = statusCard.getBoundingClientRect().top;  
  let windowHeight = window.innerHeight;  

  if (cardTop < windowHeight * 0.75) {  
    statusCard.classList.add('show');  
  } else {  
    statusCard.classList.remove('show');  
  }  
});  



// 특정 섹션 애니메이션 트리거  
const textContainer = document.querySelector('.text-container'); // 텍스트 컨테이너  
const animatedElements = document.querySelectorAll('.fade-up, .slide-in-left, .slide-in-right');   


// 스크롤 이벤트 리스너  
window.addEventListener('scroll', () => {  
    const windowHeight = window.innerHeight;
    const textTop = textContainer.getBoundingClientRect().top; // 텍스트 상단 위치  
    const textBottom = textContainer.getBoundingClientRect().bottom; // 텍스트 하단 위치 
    
    
     // 화면 내부에 들어올 때 visible 클래스 추가 (아래로/위로 스크롤 모두 포함)  
    if (textTop < windowHeight * 1 && textBottom > 0) {  
        textContainer.classList.add('visible'); // 텍스트가 등장  
        textContainer.classList.remove('hidden'); // 숨긴 상태 해제  
    } else {  
        // 화면 밖으로 벗어나면 hidden 클래스 추가  
        textContainer.classList.remove('visible'); // 보이는 상태 해제  
        textContainer.classList.add('hidden'); // 텍스트 숨김 처리  
    }  
    // 애니메이션 처리  
    animatedElements.forEach((el) => {  
      const elementTop = el.getBoundingClientRect().top;  
      const elementBottom = el.getBoundingClientRect().bottom;  
  
      // 요소가 화면 안에 있을 경우 `visible` 클래스 추가  
      if (elementTop < windowHeight * 0.85 && elementBottom > 0) {  
        el.classList.add('visible'); // 애니메이션 실행  
      } else {  
        el.classList.remove('visible'); // 요소가 화면에서 벗어나면 초기화  
      }  
    });  
  }); 


// 애니메이션 대상 요소 찾기  
const summaryHeader = document.querySelector('.summary-header'); // 상단 헤더  
const summaryBoxes = document.querySelectorAll('.summary-box'); // 각 요약 박스  

// 스크롤 이벤트 리스너  
window.addEventListener('scroll', () => {  
  const windowHeight = window.innerHeight;  

  // 헤더 애니메이션  
  if (summaryHeader.getBoundingClientRect().top < windowHeight * 0.85 &&  
      summaryHeader.getBoundingClientRect().bottom > 0) {  
    summaryHeader.classList.add('visible'); // 화면 안에 보이면  
    summaryHeader.classList.remove('hidden'); // 숨김 상태 해제  
  } else {  
    summaryHeader.classList.remove('visible'); // 화면 안에서 벗어나면 숨김 처리  
    summaryHeader.classList.add('hidden');  
  }  

  // 요약 박스 애니메이션  
  summaryBoxes.forEach((box) => {  
    const boxTop = box.getBoundingClientRect().top;  
    const boxBottom = box.getBoundingClientRect().bottom;  

    if (boxTop < windowHeight * 0.85 && boxBottom > 0) {  
      box.classList.add('visible'); // 화면 안에 보이면  
      box.classList.remove('hidden'); // 숨김 상태 해제  
    } else {  
      box.classList.remove('visible'); // 화면 밖 상태 초기화  
      box.classList.add('hidden');  
    }  
  });  
});
