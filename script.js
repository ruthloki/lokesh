// SportsPro 2026 - Enhanced JavaScript with all requested features

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all features
    initializeSportsSlideshow();
    initializeDarkMode();
    initializeMobileMenu();
    initializeNavigation();
    initializeCategoryFilters();
    initializeLiveScores();
    initializeEditableNames();
    initializeWinnerAnimations();
    initializeLoginModal();
    initializeFormValidation();
    initializeScrollEffects();
    
    console.log('🏆 SportsPro 2026 Platform Loaded Successfully!');
});

// Sports Image Slideshow
function initializeSportsSlideshow() {
    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;
    
    function showNextSlide() {
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add('active');
    }
    
    // Change slide every 2 seconds as requested
    setInterval(showNextSlide, 2000);
    
    // Preload images for smooth transitions
    slides.forEach(slide => {
        const img = new Image();
        const bgImage = slide.style.backgroundImage;
        if (bgImage) {
            img.src = bgImage.slice(5, -2); // Remove url(" and ")
        }
    });
}

// Dark Mode Toggle
function initializeDarkMode() {
    const darkModeToggle = document.getElementById('darkModeToggle');
    const html = document.documentElement;
    
    // Check for saved dark mode preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        html.classList.toggle('dark', savedTheme === 'dark');
    } else {
        // Default to system preference
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        html.classList.toggle('dark', prefersDark);
    }
    
    darkModeToggle.addEventListener('click', function() {
        html.classList.toggle('dark');
        const isDark = html.classList.contains('dark');
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
        
        // Add transition effect
        document.body.style.transition = 'background-color 0.3s ease, color 0.3s ease';
        setTimeout(() => {
            document.body.style.transition = '';
        }, 300);
    });
}

// Mobile Menu
function initializeMobileMenu() {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const mobileMenu = document.querySelector('.mobile-menu');
    
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
            
            // Animate hamburger icon
            const icon = this.querySelector('svg');
            icon.style.transform = mobileMenu.classList.contains('hidden') ? 'rotate(0deg)' : 'rotate(90deg)';
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            if (!mobileMenu.contains(event.target) && !mobileMenuBtn.contains(event.target)) {
                mobileMenu.classList.add('hidden');
                const icon = mobileMenuBtn.querySelector('svg');
                icon.style.transform = 'rotate(0deg)';
            }
        });
    }
}

// Smooth Navigation
function initializeNavigation() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                
                // Close mobile menu if open
                const mobileMenu = document.querySelector('.mobile-menu');
                if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
                    mobileMenu.classList.add('hidden');
                }
            }
        });
    });
}

// Game Category Filters
function initializeCategoryFilters() {
    const categoryTabs = document.querySelectorAll('.category-tab');
    const categoryCards = document.querySelectorAll('.category-card');
    
    categoryTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const category = this.getAttribute('data-category');
            
            // Update active tab
            categoryTabs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            
            // Filter cards with animation
            categoryCards.forEach(card => {
                const cardCategory = card.getAttribute('data-category');
                
                if (category === 'all' || cardCategory === category) {
                    card.style.display = 'block';
                    card.style.animation = 'fadeIn 0.5s ease-out';
                } else {
                    card.style.animation = 'fadeOut 0.3s ease-out';
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 300);
                }
            });
        });
    });
}

// Live Score Updates
function initializeLiveScores() {
    const liveScores = document.querySelectorAll('.live-score');
    
    function updateLiveScore(scoreElement) {
        const currentScore = scoreElement.textContent.trim();
        if (currentScore.includes(' - ')) {
            const scores = currentScore.split(' - ');
            let leftScore = parseInt(scores[0]);
            let rightScore = parseInt(scores[1]);
            
            // Randomly increment one of the scores
            if (Math.random() > 0.5) {
                leftScore += 1;
            } else {
                rightScore += 1;
            }
            
            // Update score with animation
            scoreElement.classList.add('score-update');
            scoreElement.textContent = `${leftScore} - ${rightScore}`;
            
            // Remove animation class after animation completes
            setTimeout(() => {
                scoreElement.classList.remove('score-update');
            }, 1000);
            
            // Show notification
            showScoreNotification(`Score Update: ${leftScore} - ${rightScore}`);
        }
    }
    
    // Update scores every 15-30 seconds randomly
    liveScores.forEach(scoreElement => {
        const updateInterval = Math.random() * 15000 + 15000; // 15-30 seconds
        setInterval(() => {
            if (Math.random() > 0.7) { // 30% chance to update
                updateLiveScore(scoreElement);
            }
        }, updateInterval);
    });
}

// Editable Player Names
function initializeEditableNames() {
    const editableNames = document.querySelectorAll('.editable-name');
    
    editableNames.forEach(nameElement => {
        nameElement.addEventListener('click', function() {
            if (this.classList.contains('editing')) return;
            
            const originalText = this.textContent;
            const teamId = this.getAttribute('data-team');
            
            // Create input element
            const input = document.createElement('input');
            input.type = 'text';
            input.value = originalText;
            input.className = 'editable-name editing';
            input.style.width = this.offsetWidth + 'px';
            input.style.fontSize = window.getComputedStyle(this).fontSize;
            input.style.fontWeight = window.getComputedStyle(this).fontWeight;
            
            // Replace element with input
            this.parentNode.replaceChild(input, this);
            input.focus();
            input.select();
            
            // Handle save
            function saveEdit() {
                const newText = input.value.trim() || originalText;
                const newNameElement = document.createElement('h3');
                newNameElement.className = 'text-xl font-bold text-gray-900 dark:text-white editable-name';
                newNameElement.setAttribute('data-team', teamId);
                newNameElement.textContent = newText;
                
                input.parentNode.replaceChild(newNameElement, input);
                
                // Reinitialize click handler for the new element
                initializeEditableNames();
                
                // Save to localStorage
                localStorage.setItem(`team-name-${teamId}`, newText);
                
                // Show success message
                showNotification(`Team name updated to "${newText}"`);
            }
            
            // Save on Enter or blur
            input.addEventListener('keypress', function(e) {
                if (e.key === 'Enter') {
                    saveEdit();
                }
            });
            
            input.addEventListener('blur', saveEdit);
            
            // Cancel on Escape
            input.addEventListener('keydown', function(e) {
                if (e.key === 'Escape') {
                    const originalElement = document.createElement('h3');
                    originalElement.className = 'text-xl font-bold text-gray-900 dark:text-white editable-name';
                    originalElement.setAttribute('data-team', teamId);
                    originalElement.textContent = originalText;
                    
                    input.parentNode.replaceChild(originalElement, input);
                    initializeEditableNames();
                }
            });
        });
    });
    
    // Load saved names
    editableNames.forEach(nameElement => {
        const teamId = nameElement.getAttribute('data-team');
        const savedName = localStorage.getItem(`team-name-${teamId}`);
        if (savedName) {
            nameElement.textContent = savedName;
        }
    });
}

// Winner Highlight Animations
function initializeWinnerAnimations() {
    const winnerRows = document.querySelectorAll('.winner-row');
    
    // Add trophy emoji and special effects to winners
    winnerRows.forEach(row => {
        const teamNameCell = row.querySelector('.font-medium, .font-bold');
        if (teamNameCell && !teamNameCell.textContent.includes('🏆')) {
            teamNameCell.textContent += ' 🏆';
        }
        
        // Add sparkle effect
        const sparkles = document.createElement('div');
        sparkles.className = 'absolute inset-0 pointer-events-none';
        sparkles.innerHTML = `
            <div class="absolute top-2 left-2 text-yellow-400 animate-ping">✨</div>
            <div class="absolute top-4 right-4 text-yellow-400 animate-ping" style="animation-delay: 0.5s;">⭐</div>
            <div class="absolute bottom-2 left-1/2 text-yellow-400 animate-ping" style="animation-delay: 1s;">💫</div>
        `;
        row.style.position = 'relative';
        row.appendChild(sparkles);
    });
}

// Login Modal
function initializeLoginModal() {
    const loginBtn = document.getElementById('loginBtn');
    const loginModal = document.getElementById('loginModal');
    const closeLoginModal = document.getElementById('closeLoginModal');
    
    if (loginBtn && loginModal) {
        loginBtn.addEventListener('click', function() {
            loginModal.classList.remove('hidden');
            document.body.style.overflow = 'hidden';
        });
    }
    
    if (closeLoginModal && loginModal) {
        closeLoginModal.addEventListener('click', function() {
            loginModal.classList.add('hidden');
            document.body.style.overflow = 'auto';
        });
    }
    
    // Close modal when clicking outside
    if (loginModal) {
        loginModal.addEventListener('click', function(e) {
            if (e.target === this) {
                this.classList.add('hidden');
                document.body.style.overflow = 'auto';
            }
        });
    }
    
    // Handle login form submission
    const loginForm = loginModal?.querySelector('form');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const email = this.querySelector('input[type="email"]').value;
            const password = this.querySelector('input[type="password"]').value;
            
            if (email && password) {
                // Simulate login process
                showNotification('Login successful! Welcome back.');
                loginModal.classList.add('hidden');
                document.body.style.overflow = 'auto';
                
                // Update UI for logged in state
                loginBtn.textContent = 'Dashboard';
                loginBtn.onclick = () => showNotification('Dashboard feature coming soon!');
            } else {
                showNotification('Please fill in all fields.', 'error');
            }
        });
    }
}

// Form Validation
function initializeFormValidation() {
    const forms = document.querySelectorAll('form');
    
    forms.forEach(form => {
        const inputs = form.querySelectorAll('input, select, textarea');
        
        inputs.forEach(input => {
            input.addEventListener('blur', function() {
                validateField(this);
            });
            
            input.addEventListener('input', function() {
                clearFieldError(this);
            });
        });
    });
}

function validateField(field) {
    const value = field.value.trim();
    let isValid = true;
    let errorMessage = '';
    
    // Required field validation
    if (field.hasAttribute('required') && !value) {
        isValid = false;
        errorMessage = 'This field is required.';
    }
    
    // Email validation
    if (field.type === 'email' && value) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
            isValid = false;
            errorMessage = 'Please enter a valid email address.';
        }
    }
    
    // Phone validation
    if (field.type === 'tel' && value) {
        const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
        if (!phoneRegex.test(value.replace(/[\s\-\(\)]/g, ''))) {
            isValid = false;
            errorMessage = 'Please enter a valid phone number.';
        }
    }
    
    // Show/hide error
    if (!isValid) {
        showFieldError(field, errorMessage);
    } else {
        clearFieldError(field);
    }
    
    return isValid;
}

function showFieldError(field, message) {
    clearFieldError(field);
    
    field.classList.add('border-red-500', 'dark:border-red-400');
    
    const errorDiv = document.createElement('div');
    errorDiv.className = 'field-error text-red-500 text-sm mt-1';
    errorDiv.textContent = message;
    
    field.parentNode.appendChild(errorDiv);
}

function clearFieldError(field) {
    field.classList.remove('border-red-500', 'dark:border-red-400');
    
    const existingError = field.parentNode.querySelector('.field-error');
    if (existingError) {
        existingError.remove();
    }
}

// Scroll Effects
function initializeScrollEffects() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeIn 0.8s ease-out forwards';
            }
        });
    }, observerOptions);
    
    // Observe sections and cards
    document.querySelectorAll('section, .tournament-card, .category-card, .match-card').forEach(element => {
        observer.observe(element);
    });
    
    // Header scroll effect
    let lastScrollY = window.scrollY;
    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        const currentScrollY = window.scrollY;
        
        if (currentScrollY > 100) {
            header.classList.add('backdrop-blur-xl', 'bg-white/90', 'dark:bg-dark-800/90');
        } else {
            header.classList.remove('backdrop-blur-xl', 'bg-white/90', 'dark:bg-dark-800/90');
        }
        
        // Hide/show header on scroll
        if (currentScrollY > lastScrollY && currentScrollY > 200) {
            header.style.transform = 'translateY(-100%)';
        } else {
            header.style.transform = 'translateY(0)';
        }
        
        lastScrollY = currentScrollY;
    });
}

// Utility Functions
function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = `fixed top-4 right-4 z-50 px-6 py-3 rounded-xl text-white font-medium transform transition-all duration-300 ${
        type === 'error' ? 'bg-red-500' : 'bg-green-500'
    }`;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
        notification.style.opacity = '1';
    }, 100);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        notification.style.opacity = '0';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

function showScoreNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'fixed top-20 right-4 z-50 px-4 py-2 bg-accent text-white rounded-lg text-sm font-medium transform transition-all duration-300';
    notification.innerHTML = `
        <div class="flex items-center space-x-2">
            <div class="w-2 h-2 bg-white rounded-full animate-pulse"></div>
            <span>${message}</span>
        </div>
    `;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
        notification.style.opacity = '1';
    }, 100);
    
    // Remove after 2 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        notification.style.opacity = '0';
        setTimeout(() => {
            if (document.body.contains(notification)) {
                document.body.removeChild(notification);
            }
        }, 300);
    }, 2000);
}

// Keyboard Shortcuts
document.addEventListener('keydown', function(e) {
    // Toggle dark mode with Ctrl/Cmd + D
    if ((e.ctrlKey || e.metaKey) && e.key === 'd') {
        e.preventDefault();
        document.getElementById('darkModeToggle').click();
    }
    
    // Open login modal with Ctrl/Cmd + L
    if ((e.ctrlKey || e.metaKey) && e.key === 'l') {
        e.preventDefault();
        document.getElementById('loginBtn').click();
    }
    
    // Close modals with Escape
    if (e.key === 'Escape') {
        const loginModal = document.getElementById('loginModal');
        if (loginModal && !loginModal.classList.contains('hidden')) {
            loginModal.classList.add('hidden');
            document.body.style.overflow = 'auto';
        }
    }
});

// Performance Monitoring
function initializePerformanceMonitoring() {
    // Monitor page load time
    window.addEventListener('load', function() {
        const loadTime = performance.now();
        console.log(`⚡ Page loaded in ${Math.round(loadTime)}ms`);
        
        if (loadTime > 3000) {
            console.warn('⚠️ Page load time is slow. Consider optimizing images and scripts.');
        }
    });
    
    // Monitor memory usage (if available)
    if ('memory' in performance) {
        setInterval(() => {
            const memory = performance.memory;
            if (memory.usedJSHeapSize > 50 * 1024 * 1024) { // 50MB
                console.warn('⚠️ High memory usage detected');
            }
        }, 30000);
    }
}

// Initialize performance monitoring
initializePerformanceMonitoring();

// Export functions for external use
window.SportsPro = {
    showNotification,
    showScoreNotification,
    validateField,
    initializeDarkMode,
    initializeLiveScores
};

// Service Worker Registration (for PWA capabilities)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('/sw.js')
            .then(function(registration) {
                console.log('🔧 ServiceWorker registration successful');
            })
            .catch(function(err) {
                console.log('❌ ServiceWorker registration failed');
            });
    });
}