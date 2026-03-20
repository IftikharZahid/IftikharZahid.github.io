'use strict';

document.addEventListener('DOMContentLoaded', () => {

    /* ── Lucide icons ── */
    lucide.createIcons();

    /* ── Navbar scroll state ── */
    const navbar = document.getElementById('navbar');

    const updateNavbar = () => {
        navbar.classList.toggle('scrolled', window.scrollY > 48);
    };

    window.addEventListener('scroll', updateNavbar, { passive: true });
    updateNavbar(); // run once on load

    /* ── Mobile menu toggle ── */
    const menuBtn = document.getElementById('mobile-menu-btn');
    const mobileNav = document.getElementById('mobile-nav');

    menuBtn?.addEventListener('click', () => {
        const isOpen = mobileNav.classList.toggle('open');
        menuBtn.setAttribute('aria-expanded', isOpen);
    });

    // Close on any mobile link click
    mobileNav?.querySelectorAll('.mobile-link, .btn').forEach(link => {
        link.addEventListener('click', () => {
            mobileNav.classList.remove('open');
            menuBtn?.setAttribute('aria-expanded', 'false');
        });
    });

    /* ── Scroll reveal (IntersectionObserver) ── */
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
                revealObserver.unobserve(entry.target); // animate once
            }
        });
    }, {
        threshold: 0.12,
        rootMargin: '0px 0px -40px 0px'
    });

    document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

    /* ── Smooth anchor scrolling (accounts for fixed navbar height) ── */
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', (e) => {
            const target = document.querySelector(anchor.getAttribute('href'));
            if (!target) return;
            e.preventDefault();

            const navHeight = navbar.offsetHeight;
            const targetTop = target.getBoundingClientRect().top + window.scrollY - navHeight - 16;

            window.scrollTo({ top: targetTop, behavior: 'smooth' });
        });
    });

});