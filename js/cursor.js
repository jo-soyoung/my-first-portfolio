if (window.innerWidth > 1440) {
    const workPics = document. querySelectorAll('.work-pic');
    const mouseCursor = document.querySelector('.cursor');
    
    //Cursor Customizing Control
    for(let workPic of workPics) {
        workPic.addEventListener('mouseover', () => {
            mouseCursor.classList.remove('no-display');
        })
        workPic.addEventListener('mouseleave', () => {
            mouseCursor.classList.add('no-display');
        })

        workPic.addEventListener('mousemove', cursor);
        function cursor(e) {
            mouseCursor.style.top = `${e.pageY}px`;
            mouseCursor.style.left = `${e.pageX}px`;
        }
    }
}