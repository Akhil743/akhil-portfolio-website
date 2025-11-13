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

// Enhanced form submission handler with Web3Forms
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', async function (e) {
        e.preventDefault();

        const submitBtn = document.getElementById('submit-btn');
        const btnText = submitBtn.querySelector('.btn-text');
        const btnLoading = submitBtn.querySelector('.btn-loading');
        const formMessage = document.getElementById('form-message');

        // Show loading state
        btnText.style.display = 'none';
        btnLoading.style.display = 'inline';
        submitBtn.disabled = true;

        try {
            const formData = new FormData(contactForm);
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                body: formData
            });

            const data = await response.json();

            if (data.success) {
                // Show success message
                formMessage.textContent = 'Thank you! Your message has been sent successfully. I\'ll get back to you soon.';
                formMessage.className = 'form-message success';
                formMessage.style.display = 'block';
                
                // Reset form
                contactForm.reset();
                
                // Track success
                trackEvent('Contact', 'Submit', 'Success');
            } else {
                throw new Error('Form submission failed');
            }
        } catch (error) {
            // Show error message
            formMessage.textContent = 'Oops! Something went wrong. Please try again or email me directly.';
            formMessage.className = 'form-message error';
            formMessage.style.display = 'block';
            
            // Track error
            trackEvent('Contact', 'Submit', 'Error');
        } finally {
            // Reset button state
            btnText.style.display = 'inline';
            btnLoading.style.display = 'none';
            submitBtn.disabled = false;

            // Hide message after 5 seconds
            setTimeout(() => {
                formMessage.style.display = 'none';
            }, 5000);
        }
    });
}


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

// Project filtering functionality
function setupProjectFilters() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', function () {
            const filter = this.getAttribute('data-filter');

            // Update active button
            filterBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');

            // Filter projects
            projectCards.forEach(card => {
                const category = card.getAttribute('data-category');
                if (filter === 'all' || category === filter) {
                    card.classList.remove('hidden');
                } else {
                    card.classList.add('hidden');
                }
            });

            // Track filter event
            trackEvent('Projects', 'Filter', filter);
        });
    });
}

// Initialize project filters when DOM is loaded
document.addEventListener('DOMContentLoaded', function () {
    setupMobileMenu();
    setupProjectFilters();

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