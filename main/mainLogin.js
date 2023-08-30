
// const loginButton = document.querySelector(".loginButton");
// const postWrite = document.querySelector(".postWrite");
// const paymentSystem=document.querySelector(".paymentSystem")

// loginButton.addEventListener("click", () => {
//   window.location.href = "";
// })

// postWrite.addEventListener("click", () => {
//   window.location.href = "";
// })
// paymentSystem.addEventListener("click",()=>{
//   window.location.href = "";
// });
// 로그인후 클릭 하면 나오는 이벤트
const navLogin=document.querySelector(".navLogin");
const loginClick=document.querySelector(".loginClick");
navLogin.addEventListener("click",()=>{
  if(loginClick.style.display=='none'){ 		
    loginClick.style.display = 'block'; 	
  }else{ 		
    loginClick.style.display = 'none'; 	
  } 
})
// 요리 분류 선택시 색..등등 변경
const categoryButton = document.getElementsByClassName("categoryButton");
function handleClick(event) {
  if (event.target.classList[1] === "clicked") {
    event.target.classList.remove("clicked");

  } else {
    for (let i = 0; i < categoryButton.length; i++) {
      categoryButton[i].classList.remove("clicked");
    }
    event.target.classList.add("clicked");
  }
}
function init() {
  for (let i = 0; i < categoryButton.length; i++) {
    categoryButton[i].addEventListener("click", handleClick);
  }
}
init();

// 슬라이드 배너
function autoSlide() {
  swiperWrap.style.transition = "transform 0.5s";
  count++;
  currentSlide++;
  if (count == 3) {
    number=1;
    numberLabelBold.innerText=`${number}`;
    swiperWrap.style.transform = "translate(-" + 559.333 * (count + 2) + "px)";
    setTimeout(function () {
      swiperWrap.style.transition = "transform 0s";
      swiperWrap.style.transform = "translate(-1118.67px)";
      blocks[currentSlide+3].style.opacity= 1;
    }, 500);
    count = 0;
    currentSlide=0;
  } else {
    numberLabelBold.innerText=`${number+1}`
    number++;
    swiperWrap.style.transform = "translate(-" + 559.333 * (count + 2) + "px)";
    blocks[currentSlide+3].style.opacity= 1;
    blocks[currentSlide+4].style.opacity= 0.3;
    blocks[currentSlide+2].style.opacity= 0.3;
  }
}

// 무한 반복
const swiperWrap = document.querySelector(".swiperWrap");
const numberLabelBold=document.querySelector(".numberLabelBold");
const blocks=document.querySelectorAll(".block");
//처음 번호 1로 선언 슬라이더배너  숫자 증가시키기 위해 선언
let number=1;
numberLabelBold.innerText=`${number}`
let count = 0
// 슬라이드배너 색 선명도 변수선언 이렇게 하면 안될꺼 같은데..
let currentSlide=0;
blocks[currentSlide+3].style.opacity= 1;
swiperWrap.style.transform="translate(-1118.67px)"


// 3초마다 슬라이드 이동
let inter = setInterval(autoSlide, 3000);



// 이전 버튼, 다음 버튼 구현
const arrows = document.querySelectorAll(".nextNumber");
let arrowButtonCheck = true;
arrows.forEach((arrow) => {
  arrow.addEventListener("click", function () {
    if (arrowButtonCheck) {
      arrowButtonCheck = false;
      clearInterval(inter);
      swiperWrap.style.transition = "transform 0.5s";
      let arrowType = arrow.classList[1];
      // 이전버튼에 클래스 2개 prev로 이전버튼인지 다음버튼인지 확인
      if (arrowType == "prev") {
        count--;
        number--;
        currentSlide--;
        if (count == -1) {
          swiperWrap.style.transform = "translate(-559.333px)";
          setTimeout(function () {
            swiperWrap.style.transition = "transform 0s";
            swiperWrap.style.transform = "translate(-2237.33px)";
            blocks[currentSlide+3].style.opacity= 1;
          }, 500);
          count = 2;
          currentSlide=2;
          number=3;
          numberLabelBold.innerText=`${number}`
        } else {
          swiperWrap.style.transform = "translate(-" + 559.333 * (count + 2) + "px)";
          numberLabelBold.innerText=`${number}`
          blocks[currentSlide+3].style.opacity= 1;
          blocks[currentSlide+4].style.opacity= 0.3;
          blocks[currentSlide+2].style.opacity= 0.3;
        }
      } else {
        count++;
        number++;
        currentSlide++;
        if (count == 3) {
          swiperWrap.style.transform = "translate(-" + 559.333 * (count + 2) + "px)";
          setTimeout(function () {
            swiperWrap.style.transition = "transform 0s";
            swiperWrap.style.transform = "translate(-1118.67px)";
            blocks[currentSlide+3].style.opacity= 1;
          }, 500);
          count = 0;
          number=1;
        currentSlide=0;
          numberLabelBold.innerText=`${number}`
        } else {
          swiperWrap.style.transform = "translate(-" + 559.333 * (count + 2) + "px)";
          numberLabelBold.innerText=`${number}`
          blocks[currentSlide+3].style.opacity= 1;
          blocks[currentSlide+4].style.opacity= 0.3;
          blocks[currentSlide+2].style.opacity= 0.3;
        }
      }
      inter = setInterval(autoSlide, 3000);
      setTimeout(function () {
        arrowButtonCheck = true;
      }, 500);
    }
  });
});
//검색 버튼, x 버튼 클릭 이벤트  
const wrapNext=document.querySelector("#wrapNext");
const searchWrap=document.querySelector(".searchWrap")
function searchButton(){
  wrapNext.style.display="none"
  searchWrap.style.display="block"
}
function closeX(){
  searchWrap.style.display="none"
  wrapNext.style.display="block";
}

// 요리 목록 after버튼 눌르시 before 생성 끝까지가면 after none
const before =document.getElementsByClassName("before");
const after =document.getElementsByClassName("after");
const swiperWraps=document.getElementsByClassName("swiperWrap");
const maxIndex = Math.ceil((swiperWraps[1].childElementCount - 4) / 4);

let currentSlideIndex = 0;
function updateButtonStates() {
  before[0].style.display = currentSlideIndex === 0 ? "none" : "flex";
  after[0].style.display = currentSlideIndex >= maxIndex ? "none" : "flex";
}

function goToSlide(index) {
  swiperWraps[1].style.transform = "translate(-" +(560 * index)+"px)";
  currentSlideIndex = index;
  updateButtonStates();
}
// before 버튼
before[0].addEventListener("click", () => {
  if (currentSlideIndex > 0) {
    swiperWraps[1].style.transition="transform 300ms"
    goToSlide(currentSlideIndex - 1);
  }
});
// after 버튼
after[0].addEventListener("click", () => {
  if (currentSlideIndex < maxIndex) {
    swiperWraps[1].style.transition="transform 300ms"
    goToSlide(currentSlideIndex + 1);
  }
});

// 초기화
updateButtonStates();

// 세로운 요리 버튼
const maxIndexNew = Math.ceil((swiperWraps[2].childElementCount - 4) / 4);
let currentSlideIndexNew = 0;
function updateButtonStatesNew() {
  before[1].style.display = currentSlideIndexNew === 0 ? "none" : "flex";
  after[1].style.display = currentSlideIndexNew >= maxIndexNew ? "none" : "flex";
}

function goToSlideNew(index) {
  swiperWraps[2].style.transform = "translate(-" +(560 * index)+"px)";
  currentSlideIndexNew = index;
  updateButtonStatesNew();
}
// before 버튼
before[1].addEventListener("click", () => {
  if (currentSlideIndexNew > 0) {
    swiperWraps[2].style.transition="transform 300ms"
    goToSlideNew(currentSlideIndexNew - 1);
  }
});
// after 버튼
after[1].addEventListener("click", () => {
  if (currentSlideIndexNew < maxIndexNew) {
    swiperWraps[2].style.transition="transform 300ms"
    goToSlideNew(currentSlideIndexNew + 1);
  }
});

// 초기화
updateButtonStatesNew();

// 요리분류 버튼
// after 버튼
const maxIndexDiv = Math.ceil((swiperWraps[3].childElementCount - 4) / 4);
let currentSlideIndexDiv = 0;
function updateButtonStatesDiv() {
  before[2].style.display = currentSlideIndexDiv === 0 ? "none" : "flex";
  after[2].style.display = currentSlideIndexDiv >= maxIndexDiv ? "none" : "flex";
}

function goToSlideDiv(index) {
  swiperWraps[3].style.transform = "translate(-" +(560 * index)+"px)";
  currentSlideIndexDiv = index;
  updateButtonStatesDiv();
}
// before 버튼
before[2].addEventListener("click", () => {
  if (currentSlideIndexDiv > 0) {
    swiperWraps[3].style.transition="transform 300ms"
    goToSlideDiv(currentSlideIndexDiv - 1);
  }
});
// after 버튼
after[2].addEventListener("click", () => {
  if (currentSlideIndexDiv < maxIndexDiv) {
    swiperWraps[3].style.transition="transform 300ms"
    goToSlideDiv(currentSlideIndexDiv + 1);
  }
});

// 초기화
updateButtonStatesDiv();

// 더보기 이벤트
// const seeMore =document.querySelector(".seeMore");
// const moreNumber=document.querySelector(".moreNumber");
// let addNumber=1;
// seeMore.addEventListener("click",()=>{
//   moreNumber.innerText="더보기"+`${++addNumber}`
//   if(addNumber==6){
//     addNumber=0;
//     moreNumber.innerText="더보기"+`${++addNumber}`
//   }
// })

// 검색창 시간
const ingiTime=document.querySelector(".ingiTime");
const currentTime = new Date();
const hours = currentTime.getHours()
if (hours===0) {
  hours === 24;
}
ingiTime.innerText=`${hours}:00 기준`;