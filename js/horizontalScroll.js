// Scroll Horizontally
const workSection = document.querySelector('.work-section')
const scrollInfo = document.querySelector('.scroll');

workSection.addEventListener('wheel', e => {
    const toLeft = e.deltaY < 0 && workSection.scrollLeft > 0;
    const toRight = e.deltaY > 0 && workSection.scrollLeft < workSection.scrollWidth - workSection.clientWidth;

    if (toLeft || toRight) {
        e.preventDefault();
        workSection.scrollLeft += e.deltaY;
    }

    //remove scroll notification
    scrollInfo.style.opacity = 0;
    scrollInfo.style.pointerEvents = `none`;
})

