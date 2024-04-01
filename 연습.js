// window.addEventListener('scroll', function() {
//   var targetDiv = document.getElementById('yourDivId');
//   var scrollPosition = window.scrollY || document.documentElement.scrollTop;
  
//   if (scrollPosition > 100) { // 100px 이상 스크롤됐을 때
//       targetDiv.style.display = 'block'; // div 보이게
//   } else {
//       targetDiv.style.display = 'none'; // div 숨기기
//   }
// });

window.addEventListener("scroll",function(){

})







// 슬라이드 만들기 

const container = document.querySelector("#pic");
const pics = ['뮤지컬렌트.jpg','뮤지컬물랑루즈.jfif','연극햄릿.jfif'];

container.style.backgroundImage = `url(이미지슬라이드/큰슬라이드/${pics[0]})`; 

const arrows = document.querySelectorAll(".arrow");  
let i = 0;  

arrows.forEach( arrow => {
  arrow.addEventListener("click", (e) => {
    if(e.target.id === "left") {  
      i--;
      if (i < 0) {  
        i = pics.length - 1;  
      }      
    }
    else if (e.target.id == "right") { 
      i++;  
      if ( i >= pics.length ) {  
        i = 0;  
      }
    }
    container.style.backgroundImage = `url(이미지슬라이드/큰슬라이드/${pics[i]})`;  
  });
});

// FAQ 만들기

