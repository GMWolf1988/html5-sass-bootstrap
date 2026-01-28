/**
 * Sidebar Module
 * ==========================================================================
 * Handles sidebar toggle, mobile navigation, and submenu functionality.
 */

export class Sidebar {
    constructor() {
        this.sidebar = document.getElementById('sidebar');
        this.sidebarToggle = document.getElementById('sidebarToggle');
        this.wrapper = document.querySelector('.wrapper');
        this.overlay = null;
        
        if (this.sidebar && this.sidebarToggle) {
            this.init();
        }
    }
    
    init() {
        this.createOverlay();
        this.bindEvents();
    }
    
    createOverlay() {
        this.overlay = document.createElement('div');
        this.overlay.className = 'sidebar-overlay';
        this.wrapper.appendChild(this.overlay);
    }
    
    bindEvents() {
        // Toggle button click
        this.sidebarToggle.addEventListener('click', () => this.toggle());
        
        // Overlay click
        this.overlay.addEventListener('click', () => this.close());
        
        // Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.isOpen()) {
                this.close();
            }
        });
        
        // Window resize
        window.addEventListener('resize', this.debounce(() => {
            if (window.innerWidth >= 992 && this.isOpen()) {
                this.close();
            }
        }, 250));
    }
    
    toggle() {
        if (this.isOpen()) {
            this.close();
        } else {
            this.open();
        }
    }
    
    open() {
        this.sidebar.classList.add('active');
        this.overlay.classList.add('active');
        document.body.classList.add('sidebar-open');
    }
    
    close() {
        this.sidebar.classList.remove('active');
        this.overlay.classList.remove('active');
        document.body.classList.remove('sidebar-open');
    }
    
    isOpen() {
        return this.sidebar.classList.contains('active');
    }
    
    debounce(func, wait) {
        let timeout;
        return (...args) => {
            clearTimeout(timeout);
            timeout = setTimeout(() => func.apply(this, args), wait);
        };
    }
}
