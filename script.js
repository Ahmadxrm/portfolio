document.addEventListener('DOMContentLoaded', () => {
    // Current Year Update
    document.getElementById('year').textContent = new Date().getFullYear();

    // Mobile Navigation Toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const navLinksItems = document.querySelectorAll('.nav-links li a');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('active'); // Optional: animate hamburger
    });

    // Close mobile menu when a link is clicked
    navLinksItems.forEach(item => {
        item.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });

    // Scroll Reveal Animation (Simple version)
    const sections = document.querySelectorAll('section');
    
    const revealCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // observer.unobserve(entry.target); // keep observing if we want it to trigger every time
            }
        });
    };

    const revealOptions = {
        threshold: 0.15
    };

    const revealObserver = new IntersectionObserver(revealCallback, revealOptions);

    sections.forEach(section => {
        section.classList.add('hidden'); // Add initial hidden state via JS or CSS
        revealObserver.observe(section);
    });
});
