// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
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
const serviceCardObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry)
    if (entry.isIntersecting) {
      entry.target.classList.add('animateUp')
    } else {
      entry.target.classList.remove('animateUp')
    }
  });
});
const serviceCards = document.querySelectorAll('.service-card');
serviceCards.forEach((el) => serviceCardObserver.observe(el));

const projectCardObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry)
    if (entry.isIntersecting) {
      entry.target.classList.add('animateLeft')
    } else {
      entry.target.classList.remove('animateLeft')
    }
  });
});
const projectCards = document.querySelectorAll('.project-card');
projectCards.forEach((el) => projectCardObserver.observe(el));