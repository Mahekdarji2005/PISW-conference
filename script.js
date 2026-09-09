// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80, // Adjust for fixed header
                behavior: 'smooth'
            });
            
            // Update active state in nav
            document.querySelectorAll('.nav-link').forEach(link => {
                link.classList.remove('active');
            });
            if(this.classList.contains('nav-link')) {
                this.classList.add('active');
            }
        }
    });
});
