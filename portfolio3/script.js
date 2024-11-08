// Function to open a modal popup
function openModal(modalId) {
    document.getElementById(modalId).style.display = "block";
}

// Function to close a modal popup
function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
}

// Close modal when clicking outside of it
window.onclick = function(event) {
    const modals = document.getElementsByClassName("modal");
    for (let i = 0; i < modals.length; i++) {
        if (event.target == modals[i]) {
            modals[i].style.display = "none";
        }
    }
}

// Typing effect for text (if you want it to appear on a "Hi, I'm ..." section)
const typeWriterElement = document.getElementById("typewriter");
const textToType = "Data Analyst";
let typeIndex = 0;
let isDeleting = false;

function typeWriter() {
    if (typeIndex < textToType.length && !isDeleting) {
        typeWriterElement.innerHTML += textToType.charAt(typeIndex);
        typeIndex++;
        setTimeout(typeWriter, 100);
    } else if (typeIndex > 0 && isDeleting) {
        typeWriterElement.innerHTML = textToType.substring(0, typeIndex - 1);
        typeIndex--;
        setTimeout(typeWriter, 100);
    } else {
        isDeleting = !isDeleting;
        setTimeout(typeWriter, isDeleting ? 1000 : 300);
    }
}

// Start the typing effect (make sure there's an element with id "typewriter")
typeWriter();

// Smooth scroll for navigation (if the page has sections with corresponding anchor links)
document.querySelectorAll('a.nav-link').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth'
        });
    });
});

// Select all sections and corresponding nav links
const sections = document.querySelectorAll('.slide'); // Ensure each section has the 'slide' class
const navLinks = document.querySelectorAll('a.nav-link');

// IntersectionObserver setup with lower threshold
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1 // Trigger when at least 10% of the section is visible
};

const observer = new IntersectionObserver((entries) => {
    // Clear all active classes first to ensure only one link is active at a time
    navLinks.forEach(link => link.classList.remove('active'));

    entries.forEach(entry => {
        const sectionId = entry.target.getAttribute('id');
        const navLink = document.querySelector(`a[href="#${sectionId}"]`);

        if (entry.isIntersecting) {
            // Add active class only if the section is intersecting
            navLink.classList.add('active');
        }
    });
}, observerOptions);






