if (window.innerWidth > 1440) {
  const worklist = document.querySelector('.work-list');
  const works = document.querySelectorAll('.work');
  const details = document.querySelectorAll('.work-detail');
  const titles = document.querySelectorAll('.work-title-list .work-title');
  const pagers = document.querySelectorAll('.pagers li');
  const scrollInfo = document.querySelector('.scroll');
  
  const wLength = works.length;
  let count = 0;
  let delay = 1000;
  
  
  // Detail Fade Control
  function detailShow(i) {
    details[i].style.opacity = 1;
  }
  
  function detailFade(i) {
    details[i].style.opacity = 0;
  }


  // Handle Pagers Color
  function pagerColor(i) {
     pagers[i].classList.add('active');
  }
    
  function pagerDecolor(i) {
    pagers[i].classList.remove('active');
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
    move(arg) {
      arg.style.transform = `translate(-70%, -200%)`;
    }
  }
  const slide = new Animate(works[count]);

  class Animate2 {
    constructor(current){
      this.current = current;
    }
    upward() {
      this.current.style.transform = `translateY(0%)`;
    }
    downward() {
      this.current.style.transform = `translateY(1500%)`;
    }
    middle(arg) {
      arg.style.transform = `translateY(900%)`;
    }
  }
  const slideTitle = new Animate2(titles[count]);
  
  
  // Init
  (() => {
      for (let i = 0; i < wLength; i++) {
        works[i].style.transition = `${delay / 2}ms ease`;
        titles[i].style.transition = `${delay / 2}ms ease`;
      }
  
      if (count === 0) {
        slideTitle.middle(titles[count]);
        slide.move(works[count]);
        setTimeout(() => {
          detailShow(count);
        }, delay / 2);
      }

      worklist.querySelectorAll('.work-title').forEach(function (title) {
        title.classList.add('sr-only');
      })
  })();
  
  
  // Show Next Slider
  function showNext() {
    if (count === wLength - 1) {
      return
    } else {
      let currentSlide = works[count];
      let currentTitle = titles[count];
      const slide = new Animate(currentSlide);
      const slideTitle = new Animate2(currentTitle);
  
      // current slider
      slideTitle.downward();
      slide.upward();
      detailFade(count);
      pagerColor(count + 1);
      pagerDecolor(count);
  
      // next slider
      slideTitle.middle(titles[count + 1]);
      slide.move(works[count + 1]);
      setTimeout(() => {
        detailShow(count);
      }, delay / 2);
      
      count++;
    }
  }
  
  // Show Prev Slider
  function showPrev() {
    if (count === 0) {
      return
    } else {
      let currentSlide = works[count];
      let currentTitle = titles[count];
      const slide = new Animate(currentSlide);
      const slideTitle = new Animate2(currentTitle);

      // current slider
      slideTitle.upward();
      slide.downward();
      detailFade(count);
      pagerColor(count - 1);
      pagerDecolor(count);
  
      // previous slider
      slideTitle.middle(titles[count - 1]);
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
    //remove scroll notification
    scrollInfo.style.opacity = 0;
    scrollInfo.style.pointerEvents = `none`;
  }

  window.addEventListener('wheel', handleScroll)
}