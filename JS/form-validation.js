// Form Validation for Red Cross website - Part 3 Requirement

document.addEventListener('DOMContentLoaded', function() {
    initializeFormValidation();
});

function initializeFormValidation() {
    // Contact Form Validation
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', validateContactForm);
    }
    
    // Enquiry Form Validation
    const enquiryForm = document.getElementById('enquiryForm');
    if (enquiryForm) {
        enquiryForm.addEventListener('submit', validateEnquiryForm);
    }
    
    // Donation Form Validation
    const donationForm = document.querySelector('.donation-form form');
    if (donationForm) {
        donationForm.addEventListener('submit', validateDonationForm);
    }
    
    // Real-time input validation
    initializeRealTimeValidation();
}

function validateContactForm(e) {
    e.preventDefault();
    
    const form = e.target;
    const name = form.querySelector('#name');
    const email = form.querySelector('#email');
    const subject = form.querySelector('#subject');
    const message = form.querySelector('#message');
    
    let isValid = true;
    
    clearErrors(form);
    
    // Name validation
    if (!name.value.trim()) {
        showError(name, 'Please enter your name');
        isValid = false;
    } else if (name.value.trim().length < 2) {
        showError(name, 'Name must be at least 2 characters long');
        isValid = false;
    }
    
    // Email validation
    if (!email.value.trim()) {
        showError(email, 'Please enter your email address');
        isValid = false;
    } else if (!isValidEmail(email.value)) {
        showError(email, 'Please enter a valid email address');
        isValid = false;
    }
    
    // Subject validation
    if (!subject.value.trim()) {
        showError(subject, 'Please enter a subject');
        isValid = false;
    } else if (subject.value.trim().length < 5) {
        showError(subject, 'Subject must be at least 5 characters long');
        isValid = false;
    }
    
    // Message validation
    if (!message.value.trim()) {
        showError(message, 'Please enter your message');
        isValid = false;
    } else if (message.value.trim().length < 10) {
        showError(message, 'Message must be at least 10 characters long');
        isValid = false;
    }
    
    if (isValid) {
        simulateAjaxSubmission(form, 'Thank you for your message! We will get back to you within 24 hours.');
    }
    
    return false;
}

function validateEnquiryForm(e) {
    e.preventDefault();
    
    const form = e.target;
    const enquiryType = form.querySelector('#enquiryType');
    const name = form.querySelector('#name');
    const email = form.querySelector('#email');
    const phone = form.querySelector('#phone');
    const message = form.querySelector('#message');
    
    let isValid = true;
    
    clearErrors(form);
    
    // Enquiry Type validation
    if (!enquiryType.value) {
        showError(enquiryType, 'Please select an enquiry type');
        isValid = false;
    }
    
    // Name validation
    if (!name.value.trim()) {
        showError(name, 'Please enter your full name');
        isValid = false;
    } else if (name.value.trim().length < 2) {
        showError(name, 'Name must be at least 2 characters long');
        isValid = false;
    }
    
    // Email validation
    if (!email.value.trim()) {
        showError(email, 'Please enter your email address');
        isValid = false;
    } else if (!isValidEmail(email.value)) {
        showError(email, 'Please enter a valid email address');
        isValid = false;
    }
    
    // Phone validation (optional but must be valid if provided)
    if (phone.value.trim() && !isValidPhone(phone.value)) {
        showError(phone, 'Please enter a valid 10-digit phone number');
        isValid = false;
    }
    
    // Message validation
    if (!message.value.trim()) {
        showError(message, 'Please enter your enquiry details');
        isValid = false;
    } else if (message.value.trim().length < 20) {
        showError(message, 'Please provide more details (at least 20 characters)');
        isValid = false;
    }
    
    if (isValid) {
        const enquiryTypeText = enquiryType.options[enquiryType.selectedIndex].text;
        simulateAjaxSubmission(form, `Thank you for your ${enquiryTypeText.toLowerCase()} enquiry! We will contact you within 2 business days.`);
    }
    
    return false;
}

function validateDonationForm(e) {
    e.preventDefault();
    
    const form = e.target;
    const firstName = form.querySelector('#firstName');
    const lastName = form.querySelector('#lastName');
    const email = form.querySelector('#email');
    const customAmount = form.querySelector('#customAmount');
    const selectedAmount = form.querySelector('input[name="amount"]:checked');
    
    let isValid = true;
    
    clearErrors(form);
    
    // Name validation
    if (!firstName.value.trim()) {
        showError(firstName, 'Please enter your first name');
        isValid = false;
    } else if (firstName.value.trim().length < 2) {
        showError(firstName, 'First name must be at least 2 characters long');
        isValid = false;
    }
    
    if (!lastName.value.trim()) {
        showError(lastName, 'Please enter your last name');
        isValid = false;
    } else if (lastName.value.trim().length < 2) {
        showError(lastName, 'Last name must be at least 2 characters long');
        isValid = false;
    }
    
    // Email validation
    if (!email.value.trim()) {
        showError(email, 'Please enter your email address');
        isValid = false;
    } else if (!isValidEmail(email.value)) {
        showError(email, 'Please enter a valid email address');
        isValid = false;
    }
    
    // Amount validation
    const customAmountValue = customAmount.value.trim();
    if (!selectedAmount && !customAmountValue) {
        showError(customAmount, 'Please select a donation amount or enter a custom amount');
        isValid = false;
    } else if (customAmountValue && (isNaN(customAmountValue) || parseFloat(customAmountValue) < 1)) {
        showError(customAmount, 'Please enter a valid donation amount (minimum $1)');
        isValid = false;
    }
    
    if (isValid) {
        const amount = customAmountValue || selectedAmount.value;
        simulateAjaxSubmission(form, `Thank you for your generous donation of $${amount}! Your support makes a difference. A confirmation email has been sent to ${email.value}.`);
    }
    
    return false;
}

function initializeRealTimeValidation() {
    // Email validation on blur
    document.querySelectorAll('input[type="email"]').forEach(input => {
        input.addEventListener('blur', function() {
            if (this.value.trim() && !isValidEmail(this.value)) {
                showError(this, 'Please enter a valid email address');
            } else {
                clearError(this);
            }
        });
    });
    
    // Required field validation on blur
    document.querySelectorAll('input[required], textarea[required], select[required]').forEach(input => {
        input.addEventListener('blur', function() {
            if (!this.value.trim()) {
                showError(this, 'This field is required');
            } else {
                clearError(this);
            }
        });
    });
    
    // Phone validation on blur
    document.querySelectorAll('input[type="tel"]').forEach(input => {
        input.addEventListener('blur', function() {
            if (this.value.trim() && !isValidPhone(this.value)) {
                showError(this, 'Please enter a valid 10-digit phone number');
            } else {
                clearError(this);
            }
        });
    });
}

// Validation helper functions
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function isValidPhone(phone) {
    const phoneRegex = /^[0-9]{10}$/;
    return phoneRegex.test(phone.replace(/\D/g, ''));
}

// UI helper functions
function showError(input, message) {
    clearError(input);
    
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.textContent = message;
    errorDiv.style.color = '#e74c3c';
    errorDiv.style.fontSize = '0.875rem';
    errorDiv.style.marginTop = '0.25rem';
    
    input.classList.add('error');
    input.parentNode.appendChild(errorDiv);
}

function clearError(input) {
    input.classList.remove('error');
    const errorDiv = input.parentNode.querySelector('.error-message');
    if (errorDiv) {
        errorDiv.remove();
    }
}

function clearErrors(form) {
    form.querySelectorAll('.error-message').forEach(error => error.remove());
    form.querySelectorAll('input, textarea, select').forEach(input => {
        input.classList.remove('error');
    });
}

function simulateAjaxSubmission(form, message) {
    const submitButton = form.querySelector('button[type="submit"]');
    const originalText = submitButton.textContent;
    
    // Show loading state
    submitButton.textContent = 'Sending...';
    submitButton.disabled = true;
    
    // Simulate API call delay
    setTimeout(() => {
        showSuccessMessage(form, message);
        form.reset();
        submitButton.textContent = originalText;
        submitButton.disabled = false;
        
        // Scroll to success message
        const successMessage = form.parentNode.querySelector('.success-message');
        if (successMessage) {
            successMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    }, 2000);
}

function showSuccessMessage(form, message) {
    // Remove any existing success messages
    const existingSuccess = form.parentNode.querySelector('.success-message');
    if (existingSuccess) {
        existingSuccess.remove();
    }
    
    const successDiv = document.createElement('div');
    successDiv.className = 'success-message';
    successDiv.innerHTML = `
        <div style="display: flex; align-items: center; gap: 0.5rem;">
            <i class="fas fa-check-circle" style="color: #155724;"></i>
            <span>${message}</span>
        </div>
    `;
    
    form.parentNode.insertBefore(successDiv, form);
    
    // Remove success message after 8 seconds
    setTimeout(() => {
        if (successDiv.parentNode) {
            successDiv.remove();
        }
    }, 8000);
}