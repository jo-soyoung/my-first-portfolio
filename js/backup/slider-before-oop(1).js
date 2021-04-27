const works = document.querySelectorAll('.work');
const btns = document.querySelectorAll("button");
const details = document.querySelectorAll('.work-detail');

const wLength = works.length;
let rotate = 0;
let transition = 1000;

const [prev, next] = btns;


// Btn Control
function detailShow(x) {
  details[x].style.opacity = 1;
}

function detailFade(x) {
  details[x].style.opacity = 0;
}

next.addEventListener("click", showNext);
prev.addEventListener("click", showPrev);


// Init
(() => {
    for (let i = 0; i < wLength; i++) {
      works[i].style.transition = `${transition / 2}ms ease`;
  
      if (i === 0) {
        setTimeout(() => {
          works[i].style.transform = `translate(-70%, -200%) rotate(10deg)`;
        }, transition / 2);

        setTimeout(() => {
          works[i].style.transform = `translate(-70%, -200%) rotate(0deg)`;
        }, transition);
        
        setTimeout(() => {
          works[i].style.transform = `translate(-70%, -200%)`;
          detailShow(i);
        }, transition * 1.5);
       }
    }
})();


// Show Next Slider
  function showNext() {
    let x = rotate;
    if (x === wLength - 1) {
        return
    } else {
      // current slider
      works[x].style.transform = `translate(-50%, -350%) rotate(-10deg)`;
      detailFade(x);

      // next slider
      setTimeout(() => {
          works[x + 1].style.transform = `translate(-70%, -200%) rotate(10deg)`;
      }, transition / 2);
      setTimeout(() => {
        works[x + 1].style.transform = `translate(-70%, -200%) rotate(0deg)`;
      }, transition);
      setTimeout(() => {
        works[x + 1].style.transform = `translate(-70%, -200%)`;
        detailShow(x + 1);
    }, transition * 1.5);

    rotate = x + 1;
    }
  }

// Show Prev Slider
function showPrev() {
  let x = rotate;
  if (x === 0) {
    return    
  } else {
    // current slider
    works[x].style.transform = `translate(-50%, -50%) rotate(10deg)`;
    detailFade(x);

    // previous slider
    setTimeout(() => {
      works[x - 1].style.transform = `translate(-70%, -200%) rotate(10deg)`;
    }, transition / 2);
    setTimeout(() => {
      works[x - 1].style.transform = `translate(-70%, -200%) rotate(0deg)`;
    }, transition);
    setTimeout(() => {
      works[x - 1].style.transform = `translate(-70%, -200%)`;
      detailShow(x - 1);
    }, transition * 1.5);

    rotate = x - 1;
  }
}





// Slider Scroll Control
function wheelController(e) {
    for (let work of works) {
        if(e.deltaY < 0) {
            showPrev();
        } else {
            showNext();
        }
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