/**
 * Forms Module
 * ==========================================================================
 * Handles form validation and submission.
 */

export class Forms {
    constructor() {
        this.contactForm = document.querySelector('.contact-form');
        this.searchForm = document.querySelector('.search-form');
        
        this.init();
    }
    
    init() {
        if (this.contactForm) {
            this.initContactForm();
        }
        
        if (this.searchForm) {
            this.initSearchForm();
        }
    }
    
    initContactForm() {
        this.contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            this.handleContactSubmit();
        });
        
        // Real-time validation
        this.contactForm.querySelectorAll('input, textarea').forEach(input => {
            input.addEventListener('blur', () => this.validateInput(input));
            input.addEventListener('input', () => this.clearValidation(input));
        });
    }
    
    handleContactSubmit() {
        const inputs = this.contactForm.querySelectorAll('input, textarea');
        let isValid = true;
        
        inputs.forEach(input => {
            if (!this.validateInput(input)) {
                isValid = false;
            }
        });
        
        if (isValid) {
            this.submitForm();
        }
    }
    
    validateInput(input) {
        if (input.hasAttribute('required') && !input.value.trim()) {
            input.classList.add('is-invalid');
            return false;
        }
        
        // Email validation
        if (input.type === 'email' && input.value.trim()) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(input.value)) {
                input.classList.add('is-invalid');
                return false;
            }
        }
        
        input.classList.remove('is-invalid');
        return true;
    }
    
    clearValidation(input) {
        input.classList.remove('is-invalid');
    }
    
    submitForm() {
        const submitBtn = this.contactForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;
        
        // Simulate API call
        setTimeout(() => {
            submitBtn.textContent = 'Sent!';
            submitBtn.classList.add('btn-success');
            
            setTimeout(() => {
                this.contactForm.reset();
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
                submitBtn.classList.remove('btn-success');
            }, 2000);
        }, 1000);
    }
    
    initSearchForm() {
        this.searchForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const input = this.searchForm.querySelector('input');
            const term = input.value.trim();
            
            if (term) {
                console.log('Searching for:', term);
                // Implement search logic here
            }
        });
    }
}
