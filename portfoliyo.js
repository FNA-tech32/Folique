/* ===================================================================
   FOLIQUE — MODERN WEB DEVELOPMENT & CREATIVE SHOWCASE JAVASCRIPT
   =================================================================== */

/* ========== MENU ICON NAVBAR TOGGLE ========== */ 
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

if (menuIcon && navbar) {
    menuIcon.onclick = () => {
        menuIcon.classList.toggle('fa-xmark');
        navbar.classList.toggle('active');
    };
}

/* ========== SCROLL SECTIONS ACTIVE LINK & STICKY NAVBAR ========== */
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('header nav a');
const header = document.querySelector('header');

window.onscroll = () => {
    const scrollY = window.scrollY;

    sections.forEach(sec => {
        const offset = sec.offsetTop - 150;
        const height = sec.offsetHeight;
        const id = sec.getAttribute('id');

        if (scrollY >= offset && scrollY < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
            });
            const activeLink = document.querySelector('header nav a[href*="' + id + '"]');
            if (activeLink) {
                activeLink.classList.add('active');
            }
        }
    });

    /* Sticky Navbar */
    if (header) {
        header.classList.toggle('sticky', scrollY > 100);
    }

    /* Auto-close menu icon on scroll */
    if (menuIcon && navbar) {
        menuIcon.classList.remove('fa-xmark');
        navbar.classList.remove('active');
    }
};

/* Close mobile navbar when clicking any nav link */
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (menuIcon && navbar) {
            menuIcon.classList.remove('fa-xmark');
            navbar.classList.remove('active');
        }
    });
});

/* ========== SCROLL REVEAL ANIMATIONS ========== */
if (typeof ScrollReveal !== 'undefined') {
    ScrollReveal({ 
        reset: false,
        distance: '60px',
        duration: 1600,
        delay: 150 
    });

    ScrollReveal().reveal('.home-content, .heading, .contact-subtitle', { origin: 'top' });
    ScrollReveal().reveal('.home-img, .services-box, .portfolio-box, .contact-form-box, .contact-card', { origin: 'bottom', interval: 100 });
    ScrollReveal().reveal('.about-title', { origin: 'left' });
    ScrollReveal().reveal('.about-content', { origin: 'right' });
}

/* ========== TYPED JS ANIMATION ========== */
if (typeof Typed !== 'undefined') {
    new Typed('.multiple-text', {
        strings: [
            'Web Development',
            'Interactive UI/UX',
            'Creative Digital Apps',
            'Modern Web Engineering'
        ],
        typeSpeed: 90,
        backSpeed: 50,
        backDelay: 1200,
        loop: true
    });
}

/* ========== CONTACT FORM INTERACTION (PRIMARY & ALTERNATIVE DETAILS) ========== */
const contactForm = document.querySelector('#contactForm');
const formFeedback = document.querySelector('#formFeedback');

if (contactForm && formFeedback) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const fullName = contactForm.querySelector('input[name="fullname"]')?.value.trim() || 'Valued Visitor';
        const primaryEmail = contactForm.querySelector('input[name="email"]')?.value.trim() || '';
        const altContact = contactForm.querySelector('input[name="alt_contact"]')?.value.trim() || '';
        const subject = contactForm.querySelector('input[name="subject"]')?.value.trim() || 'General Inquiry';

        let responseMessage = `Thank you, ${fullName}! Your inquiry regarding "${subject}" has been received. `;
        if (primaryEmail && altContact) {
            responseMessage += `Folique will follow up via your primary email (${primaryEmail}) or your alternative detail (${altContact}).`;
        } else if (primaryEmail) {
            responseMessage += `Folique will follow up with you at ${primaryEmail}.`;
        } else {
            responseMessage += `Our team will review your message promptly.`;
        }

        formFeedback.textContent = responseMessage;
        formFeedback.className = 'form-feedback success';
        formFeedback.style.display = 'block';

        contactForm.reset();

        setTimeout(() => {
            formFeedback.style.display = 'none';
        }, 9000);
    });
}
