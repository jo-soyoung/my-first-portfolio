const works = document.querySelectorAll('.work');
const details = document.querySelectorAll('.work-detail');
const pagers = document.querySelectorAll('.pagers li')
const btns = document.querySelectorAll("button");

const wLength = works.length;
const pLength = pagers.length;
let count = 0;
let delay = 1000;

const [prev, next] = btns;

// Btn Control
next.addEventListener("click", showNext);
prev.addEventListener("click", showPrev);


// Detail Fade Control
function detailShow(i) {
  details[i].style.opacity = 1;
}

function detailFade(i) {
  details[i].style.opacity = 0;
}


// OOP
class Animate {
  constructor(current){
    this.current = current;
  }
  upward() {
    this.current.style.transform = `translate(-50%, -350%) rotate(-10deg)`;
  }
  downward() {
    this.current.style.transform = `translate(-50%, -50%) rotate(10deg)`;
  }
  original() {
    this.current.style.transform = `translate(-50%, -50%) rotate(10deg)`;  
  }
  invisible() {
    this.current.style.display = `none`;
  }
  visible() {
    this.current.style.display = `block`;
  }
  move(arg) {
    arg.style.transform = `translate(-70%, -200%)`;
  }
}
const slide = new Animate(works[count]);


// Init
(() => {
    for (let i = 0; i < wLength; i++) {
      works[i].style.transition = `${delay / 2}ms ease`;
    }

    if (count === 0) {
      slide.move(works[count]);
      setTimeout(() => {
        detailShow(count);
      }, delay / 2);
    }
})();


// Show Next Slider
function showNext() {
  if (count === wLength - 1) {
    return
  } else {
    let currentSlide = works[count];
    const slide = new Animate(currentSlide);

    // current slider
    slide.upward();
    detailFade(count);
    setTimeout(() => {
      slide.invisible();
      slide.original();
    }, delay / 5);
    setTimeout(() => {
      slide.visible();
    }, delay / 4);

    // 수정) 페이저 컬러 할 때 count 부분 수정
    // pagerColor(count + 1);
    // pagerDecolor(count);

    // next slider
    slide.move(works[count + 1]);
    setTimeout(() => {
      detailShow(count);
    }, delay / 2);
    
    count++;

    // const worksArr = Array.from(works)
    // const idxCrt = worksArr.indexOf(currentSlide);
    // handlePager(idxCrt + 1);
    // console.log(works[idxCrt + 1]);
  }
}

// Show Prev Slider
function showPrev() {
  if (count === 0) {
    return
  } else {
    let currentSlide = works[count]
    const slide = new Animate(currentSlide);

    // current slider
    slide.downward();
    detailFade(count);
        // 수정) 페이저 컬러 할 때 count 부분 수정
    // pagerColor(count - 1);
    // pagerDecolor(count);

    // previous slider
    slide.move(works[count - 1]);
    setTimeout(() => {
      detailShow(count);
    }, delay / 2);

    count--;
  }
}


// Handle Slider Scroll
function handleScroll(e) {
  if(e.deltaY < 0) {
    showPrev();
  } else {
    showNext();
  }
}

window.addEventListener('wheel', handleScroll)


// Handle Pagers Color
function pagerColor(i) {
  pagers[i].classList.add('active');
}

function pagerDecolor(i) {
  pagers[i].classList.remove('active');
}

// function moveAway(idx) {
//   let currentSlide = works[idx]
//   const slide = new Animate(currentSlide);

//   slide.upward();
// }


// Hanlde Pagers Click
function handlePager(e, param) {
  const pagersArr = Array.from(pagers)
  const idx = pagersArr.indexOf(e.target);

  // works[idx]에 move넣기
  slide.move(works[idx]);
  for (let i = 0; i < pLength; i++){
    pagerDecolor(i);
  }
  pagerColor(idx);

  // idx보다 작은 숫자의 인덱스들은 upward


  // if(works[idx].style.transform = `translate(-70%, -200%)`){
  //   console.log(`clicked the current slider`)
  // }

  // if (param < idx) {
  //   let currentSlide = works[param]
  //   const slide = new Animate(currentSlide);
  
  //   slide.upward();
  // }
}

for (let pager of pagers) {
    pager.addEventListener('click', handlePager);
}






// Infinite Scroll
// const workSlide = document.querySelector('.work-list');
// const size = works[0].clientHeight;

// workSlide.addEventListener('transitionend', () => {
//   //console.log(works[count])
//   if (works[count].id === `js-lastClone`) {
//     count = works.length - 2;

//   }
// })