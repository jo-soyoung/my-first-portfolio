const scroll = document.querySelector(".js-scroll");
const nav = document.querySelector(".js-nav");

const productSection1 = document.querySelector(".section2")
const productSection2 = document.querySelector(".section3")
const productSection3 = document.querySelector(".section4")

const DISPLAY_FALSE = "display-false";
const DISPLAY_TRUE = "display-true";

nav.classList.add(DISPLAY_FALSE);


function handleDisplayFalse() {
    console.log("what happened?")
//    scroll.classList.add(DISPLAY_FALSE);
}

//function handleDisplayTrue() {
//    
//}

productSection1.addEventListener("mouseover", handleDisplayFalse);
