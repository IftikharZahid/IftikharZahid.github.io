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

    /* ── Techie Chatbot ── */
    const toggleBtn = document.getElementById('techie-chatbot-toggle-btn');
    const closeBtn = document.getElementById('techie-chatbot-close-btn');
    const chatbotContainer = document.getElementById('techie-chatbot-container');
    const sendBtn = document.getElementById('techie-chatbot-send-btn');
    const inputField = document.getElementById('techie-chatbot-input-field');
    const messagesContainer = document.getElementById('techie-chatbot-messages');

    if (toggleBtn) {
        toggleBtn.addEventListener('click', () => {
            chatbotContainer.classList.toggle('active');
            if (chatbotContainer.classList.contains('active')) {
                inputField.focus();
            }
        });

        closeBtn.addEventListener('click', () => {
            chatbotContainer.classList.remove('active');
        });

        const techieDataMap = [
            {
                keywords: ['name', 'who are you', 'your name', 'techie'],
                answer: "My name is Techie. I was trained by <strong>Iftikhar Zahid</strong> to help you learn about The Seeks Academy!"
            },
            {
                keywords: ['seeks', 'academy', 'what is', 'about'],
                answer: "The Seeks Academy is a modern academic platform in Fort Abbas, established in 2016. It serves Classes 9–12 with a purpose-built mobile app and web admin dashboard."
            },
            {
                keywords: ['student', 'enrolled', 'how many'],
                answer: "The Seeks Academy currently has 253 enrolled students across 4 academic classes."
            },
            {
                keywords: ['teacher', 'faculty', 'staff'],
                answer: "The academy has 10 expert teachers and 9 faculty members managing academics."
            },
            {
                keywords: ['feature', 'what can', 'modules', 'app do'],
                answer: "The app includes: Student Dashboard, Attendance Tracking, Results & Exams, Timetable Management, Fee Management, and Notices & Messaging."
            },
            {
                keywords: ['download', 'app', 'install', 'get'],
                answer: "You can download The Seeks Academy app on Google Play and the App Store. It's secured with Firebase Authentication and syncs across devices."
            },
            {
                keywords: ['dashboard', 'portal'],
                answer: "Students get a clean personalised home screen with quick access to Assignments, Teachers, Results, Timetable, Attendance, Fees, Notices, and Help."
            },
            {
                keywords: ['admin', 'web', 'management'],
                answer: "The companion web admin dashboard gives staff complete control over students, faculty, exams, fee records, complaints, and notifications — all secured with Firebase."
            },
            {
                keywords: ['attendance'],
                answer: "The app features automated attendance records with detailed history. Parents and students can monitor presence at any time."
            },
            {
                keywords: ['result', 'exam', 'grade'],
                answer: "Exam results are published instantly with detailed subject-wise breakdowns and performance trends over time."
            },
            {
                keywords: ['timetable', 'schedule', 'class'],
                answer: "Digital class timetables sync instantly so students always have the correct schedule for every section."
            },
            {
                keywords: ['fee', 'payment', 'dues'],
                answer: "Students can track monthly fee status, outstanding dues, and payment confirmations through the app."
            },
            {
                keywords: ['contact', 'reach', 'social', 'facebook'],
                answer: "You can find The Seeks Academy on Facebook at facebook.com/TheSeeksAcademyFTA, or visit the Contact page on this website."
            },
            {
                keywords: ['location', 'where', 'fort abbas', 'address'],
                answer: "The Seeks Academy is located in Fort Abbas, Pakistan."
            },
            {
                keywords: ['video', 'course', 'lesson'],
                answer: "The app has a Course Video Library where students can watch and revisit lesson recordings organised by subject and class section. There are 7 video galleries available."
            },
            {
                keywords: ['hi', 'hello', 'hey', 'greetings'],
                answer: "Hello! I'm Techie. Ask me anything about The Seeks Academy — features, students, faculty, or how to download the app!"
            }
        ];

        function appendMessage(text, sender) {
            const msgDiv = document.createElement('div');
            msgDiv.className = `chatbot-message ${sender}`;
            msgDiv.innerHTML = text;
            messagesContainer.appendChild(msgDiv);
            messagesContainer.scrollTop = messagesContainer.scrollHeight;
        }

        function generateResponse(text) {
            const lowerText = text.toLowerCase();
            let bestMatch = null;

            for (let item of techieDataMap) {
                for (let kw of item.keywords) {
                    if (lowerText.includes(kw)) {
                        bestMatch = item.answer;
                        break;
                    }
                }
                if (bestMatch) break;
            }

            return bestMatch || "As Techie, I only know the details on this page. Try asking about the academy's features, students, faculty, app download, or contact info.";
        }

        function handleSend() {
            const text = inputField.value.trim();
            if (!text) return;

            appendMessage(text, 'user');
            inputField.value = '';

            setTimeout(() => {
                const response = generateResponse(text);
                appendMessage(response, 'bot');
            }, 500);
        }

        sendBtn.addEventListener('click', handleSend);
        inputField.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') handleSend();
        });
    }

});