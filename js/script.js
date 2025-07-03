// js/script.js
const orbit = document.querySelector('.orbit');
const orbitItems = document.querySelectorAll('.orbit-item');


// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});