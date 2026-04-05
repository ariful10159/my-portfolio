// ===================================
// Portfolio Header/Hero JavaScript
// ===================================

// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {
    // ===================================
    // Theme Toggle (Dark/Light)
    // ===================================
    const themeToggle = document.getElementById('themeToggle');
    const themeIcon = document.getElementById('themeIcon');
    const savedTheme = localStorage.getItem('portfolioTheme');

    function applyTheme(theme) {
        const isLight = theme === 'light';
        document.body.classList.toggle('light-theme', isLight);

        if (themeIcon) {
            themeIcon.className = isLight ? 'fas fa-sun' : 'fas fa-moon';
        }

        if (themeToggle) {
            const nextModeLabel = isLight ? 'Switch to dark mode' : 'Switch to light mode';
            themeToggle.setAttribute('aria-label', nextModeLabel);
            themeToggle.setAttribute('title', nextModeLabel);
        }
    }

    applyTheme(savedTheme === 'light' ? 'light' : 'dark');

    if (themeToggle) {
        themeToggle.addEventListener('click', function() {
            const isCurrentlyLight = document.body.classList.contains('light-theme');
            const nextTheme = isCurrentlyLight ? 'dark' : 'light';
            applyTheme(nextTheme);
            localStorage.setItem('portfolioTheme', nextTheme);
        });
    }
    
    // ===================================
    // Mobile Menu Toggle
    // ===================================
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');
    
    if (hamburger && navMenu) {
        // Toggle menu on hamburger click
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
            
            // Prevent body scroll when menu is open
            if (navMenu.classList.contains('active')) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = '';
            }
        });
        
        // Close menu when nav link is clicked
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
                document.body.style.overflow = '';
            });
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            const isClickInsideNav = navMenu.contains(event.target);
            const isClickOnHamburger = hamburger.contains(event.target);
            
            if (!isClickInsideNav && !isClickOnHamburger && navMenu.classList.contains('active')) {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    }
    
    // ===================================
    // Sticky Header on Scroll
    // ===================================
    const header = document.getElementById('header');
    let lastScrollTop = 0;
    const scrollThreshold = 100;
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // Add scrolled class for blur effect
        if (scrollTop > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        
        lastScrollTop = scrollTop;
    });
    
    // ===================================
    // Smooth Scroll for Anchor Links
    // ===================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Skip if href is just "#"
            if (href === '#') {
                e.preventDefault();
                return;
            }
            
            const target = document.querySelector(href);
            
            if (target) {
                e.preventDefault();
                const headerHeight = header.offsetHeight;
                const targetPosition = target.offsetTop - headerHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // ===================================
    // Active Nav Link on Scroll
    // ===================================
    const sections = document.querySelectorAll('section[id]');
    
    function updateActiveNavLink() {
        const scrollPosition = window.pageYOffset + 200;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
            
            if (navLink && scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinks.forEach(link => link.classList.remove('active'));
                navLink.classList.add('active');
            }
        });
    }
    
    window.addEventListener('scroll', updateActiveNavLink);
    
    // ===================================
    // Intersection Observer for Animations
    // ===================================
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);
    
    // Observe animated elements
    const animatedElements = document.querySelectorAll('.hero-content, .hero-image, .floating-badge');
    animatedElements.forEach(el => observer.observe(el));
    
    // ===================================
    // Scroll Indicator Hide on Scroll
    // ===================================
    const scrollIndicator = document.querySelector('.scroll-indicator');
    
    if (scrollIndicator) {
        window.addEventListener('scroll', function() {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            
            if (scrollTop > 200) {
                scrollIndicator.style.opacity = '0';
                scrollIndicator.style.pointerEvents = 'none';
            } else {
                scrollIndicator.style.opacity = '1';
                scrollIndicator.style.pointerEvents = 'auto';
            }
        });
        
        // Smooth scroll to next section when clicking scroll indicator
        scrollIndicator.addEventListener('click', function() {
            const hero = document.getElementById('hero');
            const nextSection = hero.nextElementSibling;
            
            if (nextSection) {
                nextSection.scrollIntoView({ behavior: 'smooth' });
            } else {
                window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
            }
        });
    }
    
    // ===================================
    // Parallax Effect for Hero Elements (Optional)
    // ===================================
    const heroImage = document.querySelector('.hero-image');
    const heroContent = document.querySelector('.hero-content');
    
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const parallaxSpeed = 0.5;
        
        if (scrolled < window.innerHeight) {
            if (heroImage) {
                heroImage.style.transform = `translateY(${scrolled * parallaxSpeed}px)`;
            }
            if (heroContent) {
                heroContent.style.transform = `translateY(${scrolled * parallaxSpeed * 0.3}px)`;
            }
        }
    });
    
    // ===================================
    // Typing Effect for Hero Title (Optional Enhancement)
    // ===================================
    function typingEffect(element, text, speed = 100) {
        if (!element) return;
        
        let i = 0;
        element.textContent = '';
        
        function type() {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
                setTimeout(type, speed);
            }
        }
        
        type();
    }
    
    // Uncomment to enable typing effect
    // const heroTitle = document.querySelector('.hero-title .highlight');
    // if (heroTitle) {
    //     const originalText = heroTitle.textContent;
    //     typingEffect(heroTitle, originalText, 80);
    // }
    
    // ===================================
    // Cursor Glow Effect (Optional Enhancement)
    // ===================================
    function createCursorGlow() {
        const cursorGlow = document.createElement('div');
        cursorGlow.classList.add('cursor-glow');
        document.body.appendChild(cursorGlow);
        
        let mouseX = 0, mouseY = 0;
        let glowX = 0, glowY = 0;
        
        document.addEventListener('mousemove', function(e) {
            mouseX = e.clientX;
            mouseY = e.clientY;
        });
        
        function animate() {
            const dx = mouseX - glowX;
            const dy = mouseY - glowY;
            
            glowX += dx * 0.1;
            glowY += dy * 0.1;
            
            cursorGlow.style.left = glowX + 'px';
            cursorGlow.style.top = glowY + 'px';
            
            requestAnimationFrame(animate);
        }
        
        animate();
    }
    
    // Uncomment to enable cursor glow effect
    // if (window.innerWidth > 768) {
    //     createCursorGlow();
    // }
    
    // ===================================
    // Keyboard Navigation Enhancement
    // ===================================
    // Add keyboard support for buttons and links
    const interactiveElements = document.querySelectorAll('a, button, .social-icon, .social-icon-link');
    
    interactiveElements.forEach(element => {
        element.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.click();
            }
        });
    });
    
    // ===================================
    // Performance: Debounce Scroll Events
    // ===================================
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
    
    // Apply debounce to scroll-heavy functions
    const debouncedUpdateNav = debounce(updateActiveNavLink, 100);
    window.addEventListener('scroll', debouncedUpdateNav);
    
    // ===================================
    // Console Welcome Message
    // ===================================
    console.log('%c👋 Welcome to my Portfolio!', 'color: #FF7A00; font-size: 20px; font-weight: bold;');
    console.log('%cBuilt with ❤️ by Imamul Kabir Anan', 'color: #B4B4B8; font-size: 14px;');
    console.log('%cInterested in the code? Check out my GitHub!', 'color: #6B6B70; font-size: 12px;');
    
    // ===================================
    // Contact Form Validation & Submission
    // ===================================
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        const formInputs = {
            name: document.getElementById('name'),
            email: document.getElementById('email'),
            subject: document.getElementById('subject'),
            message: document.getElementById('message'),
            button: contactForm.querySelector('.btn-send')
        };

        // Form validation rules
        const validateField = (field, value) => {
            const rules = {
                name: {
                    minLength: 2,
                    pattern: /^[a-zA-Z\s]*$/,
                    errorMessages: {
                        required: 'Name is required',
                        minLength: 'Name must be at least 2 characters',
                        pattern: 'Name can only contain letters and spaces'
                    }
                },
                email: {
                    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    errorMessages: {
                        required: 'Email is required',
                        pattern: 'Please enter a valid email address'
                    }
                },
                subject: {
                    minLength: 5,
                    errorMessages: {
                        required: 'Subject is required',
                        minLength: 'Subject must be at least 5 characters'
                    }
                },
                message: {
                    minLength: 10,
                    errorMessages: {
                        required: 'Message is required',
                        minLength: 'Message must be at least 10 characters'
                    }
                }
            };

            const rule = rules[field];
            if (!value.trim()) {
                return rule.errorMessages.required;
            }
            if (rule.minLength && value.trim().length < rule.minLength) {
                return rule.errorMessages.minLength;
            }
            if (rule.pattern && !rule.pattern.test(value)) {
                return rule.errorMessages.pattern;
            }
            return null;
        };

        // Display error message
        const showError = (fieldName, errorMessage) => {
            const errorElement = document.getElementById(`${fieldName}Error`);
            const formGroup = formInputs[fieldName].parentElement;
            
            if (errorMessage) {
                errorElement.textContent = errorMessage;
                errorElement.classList.add('show');
                formGroup.classList.add('error');
            } else {
                errorElement.textContent = '';
                errorElement.classList.remove('show');
                formGroup.classList.remove('error');
            }
        };

        // Real-time validation on input
        Object.keys(formInputs).forEach(key => {
            if (key !== 'button' && formInputs[key]) {
                formInputs[key].addEventListener('input', function() {
                    const error = validateField(key, this.value);
                    showError(key, error);
                });

                formInputs[key].addEventListener('blur', function() {
                    const error = validateField(key, this.value);
                    showError(key, error);
                });
            }
        });

        // Form submission
        contactForm.addEventListener('submit', async function(e) {
            e.preventDefault();

            // Validate all fields
            let hasErrors = false;
            Object.keys(formInputs).forEach(key => {
                if (key !== 'button') {
                    const error = validateField(key, formInputs[key].value);
                    showError(key, error);
                    if (error) hasErrors = true;
                }
            });

            if (hasErrors) return;

            // Show loading state
            const originalText = formInputs.button.innerHTML;
            formInputs.button.innerHTML = '<i class="fas fa-spinner fa-spin"></i> <span class="btn-text">Sending...</span>';
            formInputs.button.disabled = true;

            try {
                // Prepare form data
                const formData = new FormData(contactForm);
                const data = {
                    name: formData.get('name'),
                    email: formData.get('email'),
                    subject: formData.get('subject'),
                    message: formData.get('message')
                };

                // Simulate submission (in production, send to backend via fetch)
                // For now, we'll show a success message after 1.5 seconds
                await new Promise(resolve => setTimeout(resolve, 1500));

                // Success message
                contactForm.innerHTML = `
                    <div style="text-align: center; padding: 2rem; background: rgba(16, 185, 129, 0.1); border: 1px solid rgba(16, 185, 129, 0.3); border-radius: 16px;">
                        <i style="font-size: 3rem; color: #10B981; display: block; margin-bottom: 1rem;" class="fas fa-check-circle"></i>
                        <h3 style="color: var(--text-primary); font-size: 1.5rem; margin-bottom: 0.5rem;">Message Sent Successfully!</h3>
                        <p style="color: var(--text-secondary); margin-bottom: 1.5rem;">Thank you for reaching out. I'll get back to you soon!</p>
                        <button type="button" onclick="location.reload()" style="padding: 0.75rem 2rem; background: var(--orange-primary); color: var(--text-primary); border: none; border-radius: 12px; font-weight: 600; cursor: pointer;">Send Another Message</button>
                    </div>
                `;
            } catch (error) {
                console.error('Form submission error:', error);
                formInputs.button.innerHTML = originalText;
                formInputs.button.disabled = false;
                showError('message', 'An error occurred. Please try again.');
            }
        });
    }

    // ===================================
    // Back-to-Top Button
    // ===================================
    const backToTopButton = document.getElementById('backToTop');
    if (backToTopButton) {
        // Show/hide button based on scroll position
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 300) {
                backToTopButton.classList.add('show');
            } else {
                backToTopButton.classList.remove('show');
            }
        });

        // Smooth scroll to top
        backToTopButton.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

});

// ===================================
// Load Performance Optimization
// ===================================
// Lazy load images when they come into viewport
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    imageObserver.unobserve(img);
                }
            }
        });
    });
    
    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// ===================================
// Service Worker Registration (Optional - for PWA)
// ===================================
// if ('serviceWorker' in navigator) {
//     window.addEventListener('load', function() {
//         navigator.serviceWorker.register('/sw.js').then(
//             function(registration) {
//                 console.log('ServiceWorker registration successful');
//             },
//             function(err) {
//                 console.log('ServiceWorker registration failed: ', err);
//             }
//         );
//     });
// }
