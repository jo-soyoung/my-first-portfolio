const title = document.querySelector(".title");



window.addEventListener("scroll", (event) => {
    let scroll = this.scrollY;
    // console.log(scroll)

    if (scroll > 60) {
        title.classList.add("scrolled");
    } else {
        title.classList.remove("scrolled");
    }
});

