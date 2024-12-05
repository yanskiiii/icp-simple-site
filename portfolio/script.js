// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Scroll Animations (Fade In)
window.addEventListener('scroll', function () {
    const elements = document.querySelectorAll('.fade-in');
    elements.forEach(element => {
        const position = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (position < windowHeight - 100) {
            element.classList.add('visible');
        }
    });
});

// Sticky Navbar
const navbar = document.querySelector('header');
const sticky = navbar.offsetTop;

window.addEventListener('scroll', function () {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add('sticky');
    } else {
        navbar.classList.remove('sticky');
    }
});

// Mobile Navigation Menu Toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});
