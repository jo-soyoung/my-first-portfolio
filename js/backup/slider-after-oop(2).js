const works = document.querySelectorAll('.work');
const btns = document.querySelectorAll("button");
const details = document.querySelectorAll('.work-detail');

const wLength = works.length;
let count = 0;
let delay = 1000;

const [prev, next] = btns;

// Btn Control
next.addEventListener("click", showNext);
prev.addEventListener("click", showPrev);


// Detail Fade Control
function detailShow(x) {
  details[x].style.opacity = 1;
}

function detailFade(x) {
  details[x].style.opacity = 0;
}


// OOP
class Animate {
  constructor(current){
    this.current = current;
  }

  upward() {
    setTimeout(() => {
      this.current.style.transform = `translate(-50%, -350%) rotate(-10deg)`;
    }, delay / 10);
  }
  downward() {
    setTimeout(() => {
      this.current.style.transform = `translate(-50%, -50%) rotate(10deg)`;
    }, delay / 10);
  }
  move(arg) {
    setTimeout(() => {
      arg.style.transform = `translate(-70%, -200%) rotate(10deg)`;
    }, delay / 2);

    setTimeout(() => {
      arg.style.transform = `translate(-70%, -200%) rotate(0deg)`;
    }, delay);
    
    setTimeout(() => {
      arg.style.transform = `translate(-70%, -200%)`;
    }, delay * 1.5);
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
      }, delay * 1.5);
    }
})();


// Show Next Slider
function showNext() {
  if (count === wLength - 1) {
    return
  } else {
    let currentSlide = works[count]
    const slide = new Animate(currentSlide);

    // current slider   
    slide.upward();
    detailFade(count);

    // next slider
    slide.move(works[count + 1]);
    setTimeout(() => {
      detailShow(count);
    }, delay * 1.5);
    
    count++;
  }
}

// Show Prev Slider
function showPrev() {
  if (count === 0) {
    return
  } else {
    // current slider
    let currentSlide = works[count]
    const slide = new Animate(currentSlide);
    slide.downward();
    detailFade(count);

    // previous slider
    slide.move(works[count - 1]);
    setTimeout(() => {
      detailShow(count);
    }, delay * 1.5);

    count--;
  }
}


// Slider Scroll Control
function wheelController(e) {
  console.log(e)
  if(e.deltaY < 0) {
    showPrev();
  } else {
    showNext();
  }
}

window.addEventListener('wheel', wheelController)






















const pagers = document.querySelectorAll('.pagers li')

const pagersArr = Array.from(pagers)

// Slider Pager Control
for (let pager of pagers) {
    pager.addEventListener('click', (e) => {
        const i = pagersArr.indexOf(e.target);
        // work rotate control
        for (let i = 0; i < works.length; i++){
            works[i].classList.remove('rotate')
        }
        works[i].classList.add('rotate');

        // pager active control
        for (let j = 0; j < pagers.length; j++) {
            pagers[j].classList.remove('active')
        }
        e.target.classList.add('active')
    })
}