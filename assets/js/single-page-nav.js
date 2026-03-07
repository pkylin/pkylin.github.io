// Single Page Navigation JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Get all navigation links that are anchors
    const navLinks = document.querySelectorAll('.masthead__menu a[href^="#"]');
    const sections = document.querySelectorAll('.section[id]');
    
    // Smooth scrolling for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                // Remove active class from all nav links
                navLinks.forEach(l => l.classList.remove('active'));
                
                // Add active class to clicked link
                this.classList.add('active');
                
                // Smooth scroll to target
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                
                // Update URL without causing page jump
                history.pushState(null, null, '#' + targetId);
            }
        });
    });
    
    // Highlight active section on scroll
    function highlightActiveSection() {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 120; // Account for header height
            const sectionHeight = section.offsetHeight;
            
            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });
        
        // Update active navigation link
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + current) {
                link.classList.add('active');
            }
        });
    }
    
    // Listen for scroll events
    window.addEventListener('scroll', highlightActiveSection);
    
    // Set initial active section
    highlightActiveSection();
    
    // Handle browser back/forward buttons
    window.addEventListener('popstate', function() {
        const hash = window.location.hash;
        if (hash) {
            const targetElement = document.querySelector(hash);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
    
    // Set active link on page load if there's a hash in URL
    const initialHash = window.location.hash;
    if (initialHash) {
        const activeLink = document.querySelector(`a[href="${initialHash}"]`);
        if (activeLink) {
            navLinks.forEach(l => l.classList.remove('active'));
            activeLink.classList.add('active');
        }
    } else {
        // Set first navigation item as active by default
        if (navLinks.length > 0) {
            navLinks[0].classList.add('active');
        }
    }
});