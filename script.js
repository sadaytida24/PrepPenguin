/* =====================================================
   PREP PENGUIN - MAIN JAVASCRIPT FILE
   ===================================================== */

/* =====================================================
   THEME FUNCTIONALITY
   ===================================================== */

// Toggle between light and dark theme
function toggleTheme() {
    document.body.classList.toggle('dark');
    const themeBtn = document.querySelector('.theme-toggle');
    themeBtn.textContent = document.body.classList.contains('dark') ? '☀️' : '🌙';
    
    // Save theme preference to localStorage
    localStorage.setItem('theme', document.body.classList.contains('dark') ? 'dark' : 'light');
}

// Load saved theme from localStorage
function loadTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark');
        document.querySelector('.theme-toggle').textContent = '☀️';
    }
}

/* =====================================================
   MOBILE MENU FUNCTIONALITY
   ===================================================== */

// Toggle mobile navigation menu
function toggleMobileMenu() {
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.toggle('active');
}

// Close mobile menu when clicking outside
document.addEventListener('click', function(event) {
    const navMenu = document.getElementById('nav-menu');
    const mobileBtn = document.querySelector('.mobile-menu-btn');
    
    if (!navMenu.contains(event.target) && !mobileBtn.contains(event.target)) {
        navMenu.classList.remove('active');
    }
});

/* =====================================================
   NEWSLETTER FORM FUNCTIONALITY
   ===================================================== */

// Handle newsletter form submission
function handleNewsletter(event) {
    event.preventDefault();
    const email = event.target.querySelector('input[type="email"]').value;
    
    // Simple validation
    if (email && email.includes('@')) {
        alert(`Thank you for subscribing with email: ${email}`);
        event.target.reset();
    } else {
        alert('Please enter a valid email address');
    }
}

/* =====================================================
   SMOOTH SCROLLING FUNCTIONALITY
   ===================================================== */

// Setup smooth scrolling for navigation links
function setupSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                
                // Close mobile menu after clicking a link
                const navMenu = document.getElementById('nav-menu');
                navMenu.classList.remove('active');
            }
        });
    });
}

/* =====================================================
   SCROLL ANIMATIONS
   ===================================================== */

// Setup intersection observer for fade-in animations
function setupAnimations() {
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

    // Apply animation styles and observe elements
    document.querySelectorAll('.animate-fade-in').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

/* =====================================================
   NAVBAR SCROLL EFFECTS
   ===================================================== */

// Add glassmorphism effect to navbar on scroll
function setupNavbarScrollEffect() {
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        
        if (window.scrollY > 100) {
            // Add glassmorphism effect when scrolled
            navbar.style.backgroundColor = document.body.classList.contains('dark') ? 
                'rgba(42, 42, 42, 0.95)' : 'rgba(255, 255, 255, 0.95)';
            navbar.style.backdropFilter = 'blur(10px)';
        } else {
            // Reset to solid background at top
            navbar.style.backgroundColor = document.body.classList.contains('dark') ? 
                '#2a2a2a' : 'white';
            navbar.style.backdropFilter = 'none';
        }
    });
}

/* =====================================================
   COURSE CARD INTERACTIONS
   ===================================================== */

// Add click handlers to course cards
function setupCourseCardInteractions() {
    document.querySelectorAll('.course-card').forEach(card => {
        card.addEventListener('click', function() {
            const courseTitle = this.querySelector('.course-title').textContent;
            alert(`You clicked on: ${courseTitle}\n\nThis would normally redirect to the course page.`);
        });
        
        // Add cursor pointer style
        card.style.cursor = 'pointer';
    });
}

/* =====================================================
   FORM VALIDATION HELPERS
   ===================================================== */

// Email validation function
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Show success message
function showSuccessMessage(message) {
    const successDiv = document.createElement('div');
    successDiv.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: var(--success);
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 0.5rem;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        z-index: 10000;
        opacity: 0;
        transition: opacity 0.3s ease;
    `;
    successDiv.textContent = message;
    document.body.appendChild(successDiv);
    
    // Fade in
    setTimeout(() => successDiv.style.opacity = '1', 100);
    
    // Remove after 3 seconds
    setTimeout(() => {
        successDiv.style.opacity = '0';
        setTimeout(() => document.body.removeChild(successDiv), 300);
    }, 3000);
}

/* =====================================================
   ENHANCED NEWSLETTER FORM
   ===================================================== */

// Enhanced newsletter form handler
function handleNewsletterEnhanced(event) {
    event.preventDefault();
    const emailInput = event.target.querySelector('input[type="email"]');
    const email = emailInput.value.trim();
    const submitBtn = event.target.querySelector('button[type="submit"]');
    
    // Disable button during processing
    submitBtn.disabled = true;
    submitBtn.textContent = 'Subscribing...';
    
    // Validate email
    if (!email) {
        alert('Please enter your email address');
        resetSubmitButton(submitBtn);
        return;
    }
    
    if (!isValidEmail(email)) {
        alert('Please enter a valid email address');
        resetSubmitButton(submitBtn);
        return;
    }
    
    // Simulate API call
    setTimeout(() => {
        showSuccessMessage('Successfully subscribed to newsletter!');
        event.target.reset();
        resetSubmitButton(submitBtn);
    }, 1500);
}

// Reset submit button state
function resetSubmitButton(button) {
    button.disabled = false;
    button.textContent = 'Subscribe';
}

/* =====================================================
   SEARCH FUNCTIONALITY (BONUS)
   ===================================================== */

// Simple search functionality for courses
function setupSearch() {
    // Create search input (you can add this to HTML if needed)
    const searchInput = document.getElementById('course-search');
    
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            const searchTerm = this.value.toLowerCase();
            const courseCards = document.querySelectorAll('.course-card');
            
            courseCards.forEach(card => {
                const title = card.querySelector('.course-title').textContent.toLowerCase();
                const description = card.querySelector('.course-description').textContent.toLowerCase();
                
                if (title.includes(searchTerm) || description.includes(searchTerm)) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    }
}

/* =====================================================
   LAZY LOADING FOR IMAGES (FUTURE ENHANCEMENT)
   ===================================================== */

// Setup lazy loading for future image implementation
function setupLazyLoading() {
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    imageObserver.unobserve(img);
                }
            });
        });

        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    }
}

/* =====================================================
   KEYBOARD NAVIGATION
   ===================================================== */

// Setup keyboard navigation for accessibility
function setupKeyboardNavigation() {
    document.addEventListener('keydown', function(e) {
        // Close mobile menu with Escape key
        if (e.key === 'Escape') {
            const navMenu = document.getElementById('nav-menu');
            navMenu.classList.remove('active');
        }
        
        // Toggle theme with Ctrl/Cmd + D
        if ((e.ctrlKey || e.metaKey) && e.key === 'd') {
            e.preventDefault();
            toggleTheme();
        }
    });
}

/* =====================================================
   PERFORMANCE MONITORING
   ===================================================== */

// Simple performance logging
function logPerformance() {
    if ('performance' in window) {
        window.addEventListener('load', () => {
            const loadTime = performance.now();
            console.log(`Page loaded in ${loadTime.toFixed(2)}ms`);
        });
    }
}

/* =====================================================
   INITIALIZATION
   ===================================================== */

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('🐧 Prep Penguin website loaded successfully!');
    
    // Core functionality
    loadTheme();
    setupSmoothScrolling();
    setupAnimations();
    setupNavbarScrollEffect();
    setupKeyboardNavigation();
    
    // Enhanced features
    setupCourseCardInteractions();
    setupSearch();
    setupLazyLoading();
    
    // Performance monitoring
    logPerformance();
    
    // Update newsletter form handler to use enhanced version
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.onsubmit = handleNewsletterEnhanced;
    }
});

/* =====================================================
   ERROR HANDLING
   ===================================================== */

// Global error handler
window.addEventListener('error', function(e) {
    console.error('JavaScript error:', e.error);
    // In production, you might want to send this to a logging service
});

// Handle unhandled promise rejections
window.addEventListener('unhandledrejection', function(e) {
    console.error('Unhandled promise rejection:', e.reason);
    e.preventDefault();
});

/* =====================================================
   UTILITY FUNCTIONS
   ===================================================== */

// Debounce function for performance optimization
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Throttle function for scroll events
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// Export functions for testing (if needed)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        toggleTheme,
        isValidEmail,
        debounce,
        throttle
    };
}