// ===== Portfolio Website - JavaScript =====

document.addEventListener('DOMContentLoaded', () => {
    // Initialize all animations
    initScrollAnimations();
    initLanguageBars();
    initChatbot();
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

// ===== Chatbot =====
function initChatbot() {
    const toggleBtn = document.getElementById('chatbot-toggle-btn');
    const closeBtn = document.getElementById('chatbot-close-btn');
    const chatbotContainer = document.getElementById('chatbot-container');
    const sendBtn = document.getElementById('chatbot-send-btn');
    const inputField = document.getElementById('chatbot-input-field');
    const messagesContainer = document.getElementById('chatbot-messages');

    if(!toggleBtn) return;

    toggleBtn.addEventListener('click', () => {
        chatbotContainer.classList.toggle('active');
        if (chatbotContainer.classList.contains('active')) {
            inputField.focus();
        }
    });

    closeBtn.addEventListener('click', () => {
        chatbotContainer.classList.remove('active');
    });

    const cvDataMap = [
        {
            keywords: ['name', 'who are you', 'your name'],
            answer: "My name is Iftikhar Zahid."
        },
        {
            keywords: ['role', 'title', 'profession', 'what do you do', 'job'],
            answer: "I am a Mobile & Web App Developer."
        },
        {
            keywords: ['experience', 'years', 'how long'],
            answer: "I have 04+ Years of experience as a specialized developer."
        },
        {
            keywords: ['repo', 'repositories', 'github', 'projects count'],
            answer: "I have 20+ repositories on my GitHub."
        },
        {
            keywords: ['contact', 'email', 'website', 'social', 'facebook', 'reach'],
            answer: "You can find me at <a href='https://zahid.codes' target='_blank' style='color:var(--primary-orange)'>zahid.codes</a>, on GitHub at IftikharZahid, on Facebook at IftikharXahid, or email me at iftikhar@zahid.codes."
        },
        {
            keywords: ['about', 'bio', 'who', 'yourself'],
            answer: "I am a passionate Mobile and Web App Developer with strong experience in React, React Native, Firebase, and modern JavaScript technologies. I focus on scalable apps with clean architecture."
        },
        {
            keywords: ['interest', 'interests', 'hobbies'],
            answer: "My main interests are Mobile Dev and Web Dev."
        },
        {
            keywords: ['language', 'languages'],
            answer: "I know English, Korean, and French."
        },
        {
            keywords: ['skills', 'technical', 'tech stack', 'frameworks'],
            answer: "My technical skills include React & React Native, Tailwind CSS, Redux Toolkit, API Integration, Firebase, MongoDB, and Python & AI."
        },
        {
            keywords: ['work', 'companies', 'employment'],
            answer: "I have worked at Tech Solutions Inc as a Senior Mobile & Web Developer, Digital Innovations as a Full Stack Engineer, and Data Corp as a Python Automation Specialist."
        },
        {
            keywords: ['project', 'portfolio', 'gallery', 'theseeksacademy'],
            answer: "My recent showcase is TheSeeksAcademy, an educational platform built using TypeScript."
        },
        {
            keywords: ['hi', 'hello', 'hey', 'greetings'],
            answer: "Hello! You can ask me anything about Iftikhar's CV, such as his skills, experience, projects, or contact info."
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

        for (let item of cvDataMap) {
            for (let kw of item.keywords) {
                if (lowerText.includes(kw)) {
                    bestMatch = item.answer;
                    break;
                }
            }
            if (bestMatch) break;
        }

        if (bestMatch) {
            return bestMatch;
        } else {
            return "I can only provide details that are on my CV page. You can try asking about my skills, experience, projects, contact info, or about me.";
        }
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
