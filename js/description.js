const workPics = document.querySelectorAll('.work-pic');
const descs = document.querySelectorAll('.desc');

workPicsArr = Array.from(workPics)

class Opacity {
    constructor(desc) {
        this.desc = desc;
    }
    invisible() {
        this.desc.style.opacity = 0;
    }
    visible() {
        this.desc.style.opacity = 1;
    }
}

function showDesc(e) {
    const idx = workPicsArr.indexOf(e.target);
    const desc = new Opacity(descs[idx]);

    descs[idx].classList.remove('no-display');

    desc.invisible();
    setTimeout(() => {
        desc.visible();
    }, 250)
}

for (let pic of workPics) {
    pic.addEventListener('click', showDesc);
}
