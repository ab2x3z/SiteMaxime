// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth',
      block: 'center'
    });
  });
});

// Function to scroll to contact section
window.scrollToContact = function () {
  document.querySelector('#contact').scrollIntoView({
    behavior: 'smooth'
  });
}

// Add shadow to header on scroll
window.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  if (window.scrollY > 0) {
    header.style.boxShadow = '0 2px 5px rgba(0,0,0,0.1)';
  } else {
    header.style.boxShadow = 'none';
  }
});

// Scroll animations
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate')
    } else {
      entry.target.classList.remove('animate')
    }
  });
});
const serviceCards = document.querySelectorAll('.service-card');
serviceCards.forEach((el) => observer.observe(el));

const projectCards = document.querySelectorAll('.project-card');
projectCards.forEach((el) => observer.observe(el));

const teamMembers = document.querySelectorAll('.team-member');
teamMembers.forEach((el) => observer.observe(el));

// Display selected file names
document.addEventListener('DOMContentLoaded', () => {
  const fileInput = document.getElementById('file-upload');
  const fileListDisplay = document.getElementById('file-list');

  if (fileInput && fileListDisplay) {
    fileInput.addEventListener('change', (event) => {
      fileListDisplay.innerHTML = ''; // Clear previous list
      const files = event.target.files;
      if (files.length > 0) {
        const list = document.createElement('ul');

        for (let i = 0; i < files.length; i++) {
          const listItem = document.createElement('li');
          listItem.textContent = files[i].name;
          list.appendChild(listItem);
        }
        fileListDisplay.appendChild(list);
      }
    });
  }

  // Hamburger Menu Toggle
  const hamburgerButton = document.querySelector('.hamburger-button');
  const navMenu = document.querySelector('.nav-menu');

  if (hamburgerButton && navMenu) {
    const navLinksInMenu = navMenu.querySelectorAll('.nav-links a, .lang-switcher a');

    hamburgerButton.addEventListener('click', () => {
      const isOpen = navMenu.classList.toggle('open');
      hamburgerButton.classList.toggle('open');
      hamburgerButton.setAttribute('aria-expanded', isOpen.toString());
    });

    // Close menu when a link is clicked
    navLinksInMenu.forEach(link => {
      link.addEventListener('click', () => {
        // Only close if the menu is currently open
        if (navMenu.classList.contains('open')) {
          navMenu.classList.remove('open');
          hamburgerButton.classList.remove('open');
          hamburgerButton.setAttribute('aria-expanded', 'false');
        }
      });
    });
  }
});