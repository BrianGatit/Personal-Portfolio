// Typed.js initialization
const typed = new Typed('.multiple-text', {
    strings: ['Frontend Developer', 'Graphic Designer', 'UI/UX Designer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

// Toggle menu icon navbar
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
});

// Scroll sections active link & sticky header
const sections = document.querySelectorAll('section');