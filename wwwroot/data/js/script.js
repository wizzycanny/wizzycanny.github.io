// Smooth scrolling for internal links (navigation links)
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent default anchor behavior

        const targetId = this.getAttribute('href'); // Get the target section
        if (targetId.startsWith("#")) {
            document.querySelector(targetId).scrollIntoView({
                behavior: 'smooth'  // Smooth scrolling effect
            });
        }
    });
});

// Navigation bar: Add "active" class to the current section link
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('main section');
    const navLinks = document.querySelectorAll('nav ul li a');

    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 60; // Offset for fixed nav bar
        if (window.scrollY >= sectionTop) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active'); // Add active class to current section
        }
    });
});

// Scroll animations: Fade-in sections when they appear on screen
const fadeInElements = document.querySelectorAll('.fade-in');

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible'); // Add visible class when in view
            observer.unobserve(entry.target); // Stop observing once visible
        }
    });
}, {
    threshold: 0.1  // Trigger when 10% of the element is visible
});

// Observe all fade-in elements
fadeInElements.forEach(el => {
    observer.observe(el);
});

// Button interaction: Change color on click (demo purpose)
document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', () => {
        button.style.backgroundColor = '#ff416c'; // Change background on click
        setTimeout(() => {
            button.style.backgroundColor = '#ff4b2b'; // Reset after 500ms
        }, 500);
    });
});

// Back-to-top button
const backToTopButton = document.createElement('button');
backToTopButton.innerText = '↑ Top';
backToTopButton.classList.add('back-to-top');
document.body.appendChild(backToTopButton);

// Show/hide the back-to-top button based on scroll position
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopButton.classList.add('visible');
    } else {
        backToTopButton.classList.remove('visible');
    }
});

// Scroll to top when back-to-top button is clicked
backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
