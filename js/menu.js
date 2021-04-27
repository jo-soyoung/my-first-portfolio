// Menu Control
const burgerBtn = document.querySelector('.hamburger')
const header = document.querySelector('header')

burgerBtn.addEventListener('click', () => {
    header.classList.toggle('open')
})
