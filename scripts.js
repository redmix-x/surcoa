// Mobile menu toggle
const menuToggle = document.getElementById('mobile-menu');
const nav = document.querySelector('header nav');

menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    nav.classList.toggle('active');
});
