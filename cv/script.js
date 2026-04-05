// ===== Portfolio Website - JavaScript =====

document.addEventListener('DOMContentLoaded', () => {
    // Initialize all animations
    initScrollAnimations();
    initLanguageBars();
});

// ===== Scroll-based Fade-in Animations =====
function initScrollAnimations() {
    const fadeElements = document.querySelectorAll('.fade-in');

    const observerOptions = {
        root: null,
        rootMargin: '0px 0px -50px 0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    fadeElements.forEach(el => observer.observe(el));
}

// ===== Animated Language Skill Bars =====
function initLanguageBars() {
    const languageBars = document.querySelectorAll('.language-bar-fill');

    const barObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                barObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    languageBars.forEach(bar => barObserver.observe(bar));
}

// ===== Lightbox Gallery =====
let currentLightboxIndex = 0;
let galleryImages = [];

function openLightbox(element) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const counter = document.getElementById('lightbox-counter');

    // Collect all gallery images
    galleryImages = Array.from(document.querySelectorAll('.gallery-item img'));
    const clickedImg = element.querySelector('img');
    currentLightboxIndex = galleryImages.indexOf(clickedImg);

    lightboxImg.src = clickedImg.src;
    lightboxImg.alt = clickedImg.alt;
    counter.textContent = `${currentLightboxIndex + 1} / ${galleryImages.length}`;

    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeLightbox(event) {
    // Only close if clicking the backdrop, close button, or lightbox itself
    if (event.target.classList.contains('lightbox') || 
        event.target.classList.contains('lightbox-close')) {
        const lightbox = document.getElementById('lightbox');
        lightbox.classList.remove('active');
        document.body.style.overflow = '';
    }
}

function navigateLightbox(event, direction) {
    event.stopPropagation();
    currentLightboxIndex += direction;

    if (currentLightboxIndex < 0) currentLightboxIndex = galleryImages.length - 1;
    if (currentLightboxIndex >= galleryImages.length) currentLightboxIndex = 0;

    const lightboxImg = document.getElementById('lightbox-img');
    const counter = document.getElementById('lightbox-counter');

    lightboxImg.src = galleryImages[currentLightboxIndex].src;
    lightboxImg.alt = galleryImages[currentLightboxIndex].alt;
    counter.textContent = `${currentLightboxIndex + 1} / ${galleryImages.length}`;
}

// Keyboard navigation for lightbox
document.addEventListener('keydown', (e) => {
    const lightbox = document.getElementById('lightbox');
    if (!lightbox.classList.contains('active')) return;

    if (e.key === 'Escape') {
        lightbox.classList.remove('active');
        document.body.style.overflow = '';
    } else if (e.key === 'ArrowLeft') {
        navigateLightbox(e, -1);
    } else if (e.key === 'ArrowRight') {
        navigateLightbox(e, 1);
    }
});
