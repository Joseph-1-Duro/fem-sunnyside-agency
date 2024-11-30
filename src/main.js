const hamburger = document.getElementById('hamburger');
const mobileMenu = document.querySelector('.mobile-menu');

let isMenuOpen = false;

hamburger.addEventListener('click', () => {
    if (!isMenuOpen) {
        mobileMenu.classList.add('open')
        isMenuOpen = true;
    } else {
        mobileMenu.classList.remove('open');
        isMenuOpen = false;
    }
})

// close window on window resize
window.addEventListener('resize', () => {
    if (window.innerWidth >= 800) {
        mobileMenu.classList.remove('open');
        isMenuOpen = false;
    }
})