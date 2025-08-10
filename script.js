// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar scroll effect
window.addEventListener('scroll', function () {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile menu toggle functionality
function setupMobileMenu() {
    const mobileToggle = document.querySelector('.mobile-menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const socialNav = document.querySelector('.social-nav');

    if (mobileToggle) {
        mobileToggle.addEventListener('click', function () {
            navLinks.classList.toggle('active');
            socialNav.classList.toggle('active');
        });
    }
}

// Animate skill bars on scroll
const observerOptions = {
    threshold: 0.5,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function (entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const skillBars = entry.target.querySelectorAll('.skill-progress');
            skillBars.forEach(bar => {
                const width = bar.style.width;
                bar.style.width = '0';
                setTimeout(() => {
                    bar.style.width = width;
                }, 100);
            });
        }
    });
}, observerOptions);

// Observe skills section for animation
const skillsSection = document.querySelector('.skills-categories');
if (skillsSection) {
    observer.observe(skillsSection);
}

// Form submission handler
const contactForm = document.querySelector('form');
if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();

        // Get form data
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            message: document.getElementById('message').value
        };

        // For now, just show an alert. Later you can integrate with a backend service
        console.log('Form submitted:', formData);
        alert('Thank you for your message! I\'ll get back to you soon.');

        // Reset the form
        this.reset();
    });
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function () {
    setupMobileMenu();

    // Add typing effect to hero title if you want
    const heroTitle = document.querySelector('.hero-text h1');
    if (heroTitle) {
        // Optional: Add a typing animation effect
        heroTitle.style.opacity = '1';
    }

    // Track resume downloads
    const resumeBtn = document.querySelector('.resume-btn');
    if (resumeBtn) {
        resumeBtn.addEventListener('click', function () {
            console.log('Resume downloaded at:', new Date().toISOString());
            // You can add Google Analytics tracking here later
        });
    }
});

// Optional: Add a simple analytics tracker
function trackEvent(category, action, label) {
    // This is where you'd integrate Google Analytics
    console.log('Event tracked:', { category, action, label });

    // Example for Google Analytics (add this when you have GA set up):
    // if (typeof gtag !== 'undefined') {
    //     gtag('event', action, {
    //         'event_category': category,
    //         'event_label': label
    //     });
    // }
}

// Track project card clicks
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('click', function () {
        const projectTitle = this.querySelector('.project-title').textContent;
        trackEvent('Projects', 'View', projectTitle);
    });
});

// Track article clicks
document.querySelectorAll('.read-more').forEach(link => {
    link.addEventListener('click', function () {
        const articleTitle = this.closest('.article-card').querySelector('.article-title').textContent;
        trackEvent('Articles', 'Read', articleTitle);
    });
});