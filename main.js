// 큰 슬라이드 만들기 

const container = document.querySelector("#pic");
const pics = ['가로슬라이드.jpg','가로슬라이드2.png','가로슬라이드3.jpg'];

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