// PARTICLES BACKGROUND ANIMATION
function createParticles() {
    const particlesContainer = document.getElementById('particles');
    const particleCount = window.innerWidth > 768 ? 50 : 20;

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        // Random position
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        
        // Random animation duration
        const duration = Math.random() * 10 + 15;
        particle.style.animationDuration = duration + 's';
        
        // Random animation delay
        particle.style.animationDelay = Math.random() * 5 + 's';
        
        // Random movement
        const randomX = (Math.random() - 0.5) * 200;
        const randomY = (Math.random() - 0.5) * 200;
        
        particle.style.setProperty('--tx', randomX + 'px');
        particle.style.setProperty('--ty', randomY + 'px');
        
        particlesContainer.appendChild(particle);
    }
}

// Initialize particles on page load
window.addEventListener('load', createParticles);

// INTERACTIVE CASTING DEMO
function startCasting() {
    const videoInput = document.getElementById('videoInput');
    const demoOutput = document.getElementById('demoOutput');
    const castingStatus = document.getElementById('castingStatus');
    const castingDetail = document.getElementById('castingDetail');
    
    // Show demo output
    demoOutput.style.display = 'block';
    
    // Simulate connection sequence
    const statuses = [
        { text: 'Connecting to device...', detail: 'Samsung Smart TV (Living Room)' },
        { text: 'Handshaking protocol...', detail: 'DLNA/UPnP established' },
        { text: 'Buffering stream...', detail: 'Network: 50 Mbps' },
        { text: 'Casting active', detail: '▶️ Playing on Samsung Smart TV' }
    ];
    
    let statusIndex = 0;
    const statusInterval = setInterval(() => {
        if (statusIndex < statuses.length) {
            castingStatus.textContent = statuses[statusIndex].text;
            castingDetail.textContent = statuses[statusIndex].detail;
            statusIndex++;
        } else {
            clearInterval(statusInterval);
        }
    }, 600);
    
    // Scroll to demo section
    demoOutput.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

function stopCasting() {
    const demoOutput = document.getElementById('demoOutput');
    const castingStatus = document.getElementById('castingStatus');
    const castingDetail = document.getElementById('castingDetail');
    
    castingStatus.textContent = 'Casting stopped';
    castingDetail.textContent = 'Ready for next cast';
    
    setTimeout(() => {
        demoOutput.style.display = 'none';
    }, 1000);
}

// SMOOTH SCROLL ENHANCEMENT
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// BUTTON RIPPLE EFFECT
const buttons = document.querySelectorAll('.btn, .btn-small, .contact-btn');

buttons.forEach(button => {
    button.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('ripple');
        
        // Add ripple styling if not already in CSS
        if (!document.querySelector('style[data-ripple]')) {
            const style = document.createElement('style');
            style.setAttribute('data-ripple', 'true');
            style.textContent = `
                .ripple {
                    position: absolute;
                    border-radius: 50%;
                    background: rgba(255, 255, 255, 0.6);
                    transform: scale(0);
                    animation: ripple-animation 0.6s ease-out;
                    pointer-events: none;
                }
                
                @keyframes ripple-animation {
                    to {
                        transform: scale(4);
                        opacity: 0;
                    }
                }
            `;
            document.head.appendChild(style);
        }
        
        this.style.position = 'relative';
        this.style.overflow = 'hidden';
        this.appendChild(ripple);
        
        setTimeout(() => ripple.remove(), 600);
    });
});

// NAVBAR HIDE/SHOW ON SCROLL
let lastScrollTop = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    // Add subtle background effect on scroll
    if (scrollTop > 100) {
        navbar.style.borderBottomColor = 'rgba(0, 212, 255, 0.3)';
    } else {
        navbar.style.borderBottomColor = 'rgba(0, 212, 255, 0.1)';
    }
    
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});

// INTERSECTION OBSERVER FOR ANIMATIONS
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('.project-card, .skill-item, .stat').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'all 0.6s ease';
    observer.observe(el);
});

// MOUSE GLOW EFFECT (OPTIONAL ENHANCEMENT)
document.addEventListener('mousemove', (e) => {
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;
    
    // Subtle glow position update (can be enhanced further)
    document.documentElement.style.setProperty('--mouse-x', x);
    document.documentElement.style.setProperty('--mouse-y', y);
});

// PREVENT INITIAL ANIMATION JANK
window.addEventListener('load', () => {
    document.body.style.opacity = '1';
});

// CONTACT BUTTON HANDLERS
document.querySelectorAll('.contact-btn').forEach(btn => {
    btn.addEventListener('mouseover', function() {
        this.style.textShadow = '0 0 10px rgba(0, 212, 255, 0.8)';
    });
    
    btn.addEventListener('mouseout', function() {
        this.style.textShadow = 'none';
    });
});

console.log('%cA4Studios - Building Systems That Work', 'color: #00d4ff; font-size: 16px; font-weight: bold; text-shadow: 0 0 20px rgba(0, 212, 255, 0.5);');
console.log('%cPowered by pure JavaScript, CSS, and determination.', 'color: #b0b9c6; font-size: 12px;');
