// Enhanced JavaScript for Red Cross website - Part 2 & 3

document.addEventListener('DOMContentLoaded', function() {
    // Alert banner close functionality
    const alertBanner = document.getElementById('alertBanner');
    const alertClose = document.querySelector('.alert-close');
    
    if (alertClose && alertBanner) {
        alertClose.addEventListener('click', function() {
            alertBanner.style.display = 'none';
        });
    }

    // Enhanced Mobile Navigation Toggle
    const navToggle = document.getElementById('navToggle');
    const mainNav = document.getElementById('mainNav');
    
    if (navToggle && mainNav) {
        // Create overlay element
        const overlay = document.createElement('div');
        overlay.className = 'nav-overlay';
        document.body.appendChild(overlay);
        
        navToggle.addEventListener('click', function() {
            const isOpen = mainNav.classList.toggle('nav--open');
            navToggle.innerHTML = isOpen ? '&times;' : '&#9776;';
            overlay.style.display = isOpen ? 'block' : 'none';
            document.body.style.overflow = isOpen ? 'hidden' : '';
            
            // Enhanced accessibility
            if (isOpen) {
                navToggle.setAttribute('aria-expanded', 'true');
                // Focus first link when opened
                setTimeout(() => {
                    const firstLink = mainNav.querySelector('a');
                    if (firstLink) firstLink.focus();
                }, 100);
            } else {
                navToggle.setAttribute('aria-expanded', 'false');
            }
        });
        
        // Close menu when clicking overlay
        overlay.addEventListener('click', function() {
            mainNav.classList.remove('nav--open');
            navToggle.innerHTML = '&#9776;';
            overlay.style.display = 'none';
            document.body.style.overflow = '';
            navToggle.setAttribute('aria-expanded', 'false');
        });
        
        // Close menu when clicking nav links (on mobile)
        document.querySelectorAll('.nav__link').forEach(link => {
            link.addEventListener('click', function() {
                if (window.innerWidth <= 768) {
                    mainNav.classList.remove('nav--open');
                    navToggle.innerHTML = '&#9776;';
                    overlay.style.display = 'none';
                    document.body.style.overflow = '';
                    navToggle.setAttribute('aria-expanded', 'false');
                }
            });
        });
        
        // Close menu when pressing Escape key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && mainNav.classList.contains('nav--open')) {
                mainNav.classList.remove('nav--open');
                navToggle.innerHTML = '&#9776;';
                overlay.style.display = 'none';
                document.body.style.overflow = '';
                navToggle.setAttribute('aria-expanded', 'false');
                navToggle.focus();
            }
        });
    }

    // Enhanced image loading - add loading="lazy" to all images
    document.querySelectorAll('img').forEach(img => {
        if (!img.getAttribute('loading')) {
            img.setAttribute('loading', 'lazy');
        }
        
        // Add error handling for broken images
        img.addEventListener('error', function() {
            this.alt = 'Image not available';
            this.style.backgroundColor = '#f8f9fa';
            this.style.padding = '2rem';
            this.innerHTML = '<span>Image not available</span>';
        });
    });

    // Interactive Map Functionality for Get Help page
    initializeInteractiveMap();
    
    // Donation amount selection
    initializeDonationAmounts();

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

    // Add focus styles for keyboard navigation
    document.addEventListener('keyup', function(e) {
        if (e.key === 'Tab') {
            document.documentElement.classList.add('keyboard-navigation');
        }
    });

    document.addEventListener('mousedown', function() {
        document.documentElement.classList.remove('keyboard-navigation');
    });
});

// Interactive Map for Get Help page
function initializeInteractiveMap() {
    const stateAreas = document.querySelectorAll('.state-area');
    const mapOverlay = document.getElementById('mapOverlay');
    
    if (stateAreas.length > 0 && mapOverlay) {
        stateAreas.forEach(area => {
            area.addEventListener('mouseenter', function() {
                const state = this.getAttribute('data-state');
                const shelters = this.getAttribute('data-shelters');
                mapOverlay.innerHTML = `<strong>${state}</strong><br>${shelters} shelters available`;
                mapOverlay.style.display = 'block';
            });
            
            area.addEventListener('mouseleave', function() {
                mapOverlay.style.display = 'none';
            });
            
            area.addEventListener('click', function() {
                const state = this.getAttribute('data-state');
                alert(`Searching for shelters in ${state}... (This would connect to real data in a production environment)`);
            });
        });
    }
}

// Donation amount selection
function initializeDonationAmounts() {
    const donationRadios = document.querySelectorAll('input[name="amount"]');
    const customAmount = document.getElementById('customAmount');
    
    if (donationRadios.length > 0 && customAmount) {
        donationRadios.forEach(radio => {
            radio.addEventListener('change', function() {
                if (this.value) {
                    customAmount.value = '';
                }
            });
        });
        
        customAmount.addEventListener('focus', function() {
            donationRadios.forEach(radio => {
                radio.checked = false;
            });
        });
        
        customAmount.addEventListener('input', function() {
            if (this.value) {
                donationRadios.forEach(radio => {
                    radio.checked = false;
                });
            }
        });
    }
}

// Enhanced CSS for keyboard navigation
const keyboardStyles = `
.keyboard-navigation a:focus,
.keyboard-navigation button:focus,
.keyboard-navigation input:focus,
.keyboard-navigation textarea:focus,
.keyboard-navigation select:focus {
    outline: 3px solid #e74c3c !important;
    outline-offset: 2px !important;
}
`;

const styleSheet = document.createElement('style');
styleSheet.textContent = keyboardStyles;
document.head.appendChild(styleSheet);