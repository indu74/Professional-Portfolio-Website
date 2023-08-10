

let menu = document.querySelector('.menu-icon');
menu.onclick = () => {
    menu.classList.toggle('move');
}

let header = document.querySelector('header');
window.addEventListener('scroll', () => {
    header.classList.toggle('header-active', window.scrollY > 0);
});
let menuIcon = document.querySelector('.menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.addEventListener('click', () => {
    navbar.classList.toggle('active');
});
