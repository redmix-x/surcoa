document.querySelector('section#contact form').addEventListener('submit', function(event) {
    event.preventDefault();
    // Simulate form submission
    setTimeout(() => {
        window.location.href = 'thank-you.html';
    }, 500);
});
