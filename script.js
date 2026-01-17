// MOBILE MENU
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// EMAILJS INIT
(function () {
    emailjs.init("kRzEa8o7qctOhB57s"); // ← replace
})();

// CONTACT FORM
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', function (e) {
    e.preventDefault();

    emailjs.sendForm(
        'service_lxf9ivy',   // ← replace
        'template_alvjjm7',  // ← replace
        this
    ).then(() => {
        alert('Message sent successfully! Check your email.');
        contactForm.reset();
    }, (error) => {
        alert('Failed to send message.');
        console.error(error);
    });
});
