// js/main.js

document.addEventListener('DOMContentLoaded', () => {
    // --- Dark Mode Toggle ---
    const darkModeToggle = document.getElementById('darkModeToggle');
    const body = document.body;

    // Function to apply theme
    const applyTheme = (theme) => {
        if (theme === 'dark') {
            body.classList.add('dark-mode');
            darkModeToggle.textContent = '☀️';
        } else {
            body.classList.remove('dark-mode');
            darkModeToggle.textContent = '🌙';
        }
    };

    // Check for saved dark mode preference
    const savedTheme = localStorage.getItem('theme') || 'light';
    applyTheme(savedTheme);

    darkModeToggle.addEventListener('click', () => {
        const newTheme = body.classList.contains('dark-mode') ? 'light' : 'dark';
        localStorage.setItem('theme', newTheme);
        applyTheme(newTheme);
    });

    // --- Hamburger Menu Toggle ---
    const hamburgerButton = document.getElementById('hamburger-button');
    const navMenu = document.querySelector('.nav-menu');

    hamburgerButton.addEventListener('click', () => {
        navMenu.classList.toggle('is-active');
        const isExpanded = navMenu.classList.contains('is-active');
        hamburgerButton.setAttribute('aria-expanded', isExpanded);
    });
});