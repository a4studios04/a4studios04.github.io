// script.js for particle animations and more

// Particle Animations
function createParticles() {
    // Code for creating particles
}

// Interactive Casting Demo
function interactiveCasting() {
    // Code for interactive casting demo
}

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Button Ripple Effects
const buttons = document.querySelectorAll('.ripple');
buttons.forEach(button => {
    button.addEventListener('click', function (e) {
        const ripple = document.createElement('span');
        ripple.classList.add('ripple-effect');
        this.appendChild(ripple);

        // Position the ripple
        const rect = this.getBoundingClientRect();
        ripple.style.left = `${e.clientX - rect.left}px`;
        ripple.style.top = `${e.clientY - rect.top}px`;

        // Remove the ripple after animation
        ripple.addEventListener('animationend', () => {
            ripple.remove();
        });
    });
});

// Navbar Scroll Effects
const navbar = document.querySelector('.navbar');
window.onscroll = function() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
};

// Intersection Observer Animations
const observerTarget = document.querySelectorAll('.animate-on-scroll');
const options = { threshold: 0.1 };
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        } else {
            entry.target.classList.remove('fade-in');
        }
    });
}, options);

observerTarget.forEach(target => {
    observer.observe(target);
});

// Micro-interactions
const microInteractions = document.querySelectorAll('.micro-interaction');

microInteractions.forEach(item => {
    item.addEventListener('mouseenter', () => {
        item.classList.add('active');
    });
    item.addEventListener('mouseleave', () => {
        item.classList.remove('active');
    });
});