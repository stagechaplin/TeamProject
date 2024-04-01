const def = new Map([
  [
    "slide1", // element 이름
    {
      id: "slide1",
      top: 500, // element의 시작점
      bottom: 1900, // element의 끝점
      topStyle: {
        // element의 시작 스타일
        opacity: 0,
        translateY: -60,
      },
      bottomStyle: {
        // element의 끝 스타일
        opacity: 0,
        translateY: 60,
      },
      animations: [
        {
          enabled: false, // 애니메이션 활성화 여부
          top: 500, // 애니메이션 시작점
          bottom: 1900, // 애니메이션 끝점
          easing: midSlow, // Easing Function
          styles: [
            // 애니메이션 시 변경될 스타일
            {
              name: "translateY", // 스타일 이름
              topValue: 60, // 진행률 0% 일 때의 스타일
              bottomValue: -60, // 진행률 100% 일 때의 스타일
            },
          ],
        },
        {
          enabled: false,
          top: 500,
          bottom: 800,
          easing: ease,
          styles: [
            {
              name: "opacity",
              topValue: 0,
              bottomValue: 1,
            },
          ],
        },
        {
          enabled: false,
          top: 1400,
          bottom: 1900,
          easing: easeIn,
          styles: [
            {
              name: "opacity",
              topValue: 1,
              bottomValue: 0,
            },
          ],
        },
      ],
    },
  ],
  // 중략
]);
/** @type {{[key: string]: any}} */
const elements = {
  "sticky-container": document.getElementById("sticky-container"),
  "scroll-down": document.getElementById("scroll-down"),
  slide1: document.getElementById("slide1"),
  slide2: document.getElementById("slide2"),
  slide3: document.getElementById("slide3"),
  "moving-background": document.getElementById("moving-background"),
  slide4: document.getElementById("slide4"),
  slide5: document.getElementById("slide5"),
};

function initAnimation() {
  // Sticky Conainer 의 높이를 설정함.
  elements["sticky-container"].style.height = `7100px`;

  // 모든 요소를 disabled 에 넣음.
  def.forEach((obj, id) => {
    disabled.set(id, obj);
  });

  // 초기 스타일 적용
  disabled.forEach((obj, id) => {
    Object.keys(obj.topStyle).forEach((styleName) => {
      const pushValue = obj.topStyle[styleName];
      applyStyle(elements[id], styleName, pushValue);
    });
  });

  // 이미 요소의 범위 및 애니메이션의 범위에 있는 것들을 렌더링하기 위해
  // 임의로 스크롤 이벤트 핸들러를 한 번 실행시킴.
  onScroll();
}

initAnimation();

window.addEventListener("scroll", onScroll);