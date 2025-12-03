// Smooth scrolling for anchor links
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

// Form validation and submission
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.querySelector('form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // Basic validation
            const name = document.querySelector('input[name="name"]').value;
            const email = document.querySelector('input[name="email"]').value;
            const phone = document.querySelector('input[name="phone"]').value;
            const message = document.querySelector('textarea[name="message"]').value;

            if (!name || !email || !phone || !message) {
                alert('Mohon lengkapi semua field yang diperlukan.');
                return;
            }

            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert('Mohon masukkan alamat email yang valid.');
                return;
            }

            // Phone validation (Indonesian format)
            const phoneRegex = /^(\+62|62|0)[8-9][0-9]{7,11}$/;
            if (!phoneRegex.test(phone.replace(/\s|-/g, ''))) {
                alert('Mohon masukkan nomor telepon yang valid.');
                return;
            }

            // Show loading state
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            submitBtn.textContent = 'Mengirim...';
            submitBtn.classList.add('loading');

            // Simulate form submission (replace with actual API call)
            setTimeout(() => {
                alert('Terima kasih! Pesan Anda telah dikirim. Kami akan segera menghubungi Anda.');
                contactForm.reset();
                submitBtn.textContent = originalText;
                submitBtn.classList.remove('loading');
            }, 2000);
        });
    }
});

// Add fade-in animation to sections on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-up');
        }
    });
}, observerOptions);

// Observe all sections
document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});

// Lazy load images (if any)
const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            img.classList.remove('lazy');
            observer.unobserve(img);
        }
    });
});

// Mobile menu toggle (if needed in future)
function toggleMobileMenu() {
    const nav = document.querySelector('nav');
    nav.classList.toggle('mobile-menu-open');
}

// Performance optimization: Preload critical resources
function preloadCriticalResources() {
    // Preload hero background if it's an image
    const heroImage = new Image();
    heroImage.src = 'images/photobooth-event.avif'; // Update path as needed

    // Preload important scripts/styles if not already loaded
}

// Call preload function when DOM is ready
document.addEventListener('DOMContentLoaded', preloadCriticalResources);

// Service Worker registration (for PWA capabilities)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                console.log('Service Worker registered');
            })
            .catch(error => {
                console.log('Service Worker registration failed');
            });
    });
}

// Analytics (replace with your actual tracking code)
function trackEvent(eventName, parameters) {
    // Google Analytics or other tracking implementation
    console.log('Event tracked:', eventName, parameters);
}

// Track form submissions
document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', function() {
            trackEvent('contact_form_submit', {
                page: window.location.pathname,
                timestamp: new Date().toISOString()
            });
        });
    }
});

// Gallery lightbox functionality
function createLightbox() {
    const galleryImages = document.querySelectorAll('.gallery-grid img');
    galleryImages.forEach(img => {
        img.addEventListener('click', function() {
            const lightbox = document.createElement('div');
            lightbox.style.cssText = `
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0,0,0,0.8);
                display: flex;
                justify-content: center;
                align-items: center;
                z-index: 10000;
                cursor: pointer;
            `;

            const lightboxImg = document.createElement('img');
            lightboxImg.src = this.src;
            lightboxImg.style.cssText = `
                max-width: 90%;
                max-height: 90%;
                object-fit: contain;
            `;

            lightbox.appendChild(lightboxImg);
            document.body.appendChild(lightbox);

            lightbox.addEventListener('click', function() {
                document.body.removeChild(lightbox);
            });
        });
    });
}

// Initialize lightbox when DOM is ready
document.addEventListener('DOMContentLoaded', createLightbox);
