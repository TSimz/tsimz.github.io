const hamburger = document.querySelector('.hamburger');
const navList = document.querySelector('.top-nav-list');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active-hamburger');
    navList.classList.toggle('active-nav');
});