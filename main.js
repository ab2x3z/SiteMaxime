// Translations
const translations = {
  en: {
    nav: {
      services: 'Services',
      projects: 'Projects',
      about: 'About',
      contact: 'Contact'
    },
    hero: {
      title: 'Quality Construction & Remodeling Services',
      subtitle: 'Transform your space with our expert craftsmanship',
      cta: 'Get Free Quote'
    },
    services: {
      title: 'Our Services',
      renovation: {
        title: 'Home Renovation',
        desc: 'Complete home makeovers and renovations'
      },
      kitchen: {
        title: 'Kitchen Remodeling',
        desc: 'Custom kitchen designs and installations'
      },
      bathroom: {
        title: 'Bathroom Updates',
        desc: 'Modern bathroom renovations'
      },
      carpentry: {
        title: 'Custom Carpentry',
        desc: 'Bespoke woodwork and installations'
      }
    },
    projects: {
      title: 'Recent Projects',
      kitchen: {
        title: 'Modern Kitchen Renovation',
        desc: 'Complete kitchen remodel with custom cabinets'
      },
      bathroom: {
        title: 'Luxury Bathroom',
        desc: 'High-end bathroom renovation'
      },
      addition: {
        title: 'Home Addition',
        desc: 'Two-story addition with master suite'
      }
    },
    about: {
      title: 'About Us',
      content: 'With over 20 years of experience, we pride ourselves on delivering exceptional craftsmanship and customer service. Our team of skilled professionals is dedicated to bringing your vision to life while maintaining the highest standards of quality and safety.'
    },
    contact: {
      title: 'Contact Us',
      name: 'Name',
      email: 'Email',
      phone: 'Phone',
      message: 'Tell us about your project',
      submit: 'Send Message',
      getInTouch: 'Get In Touch',
      success: 'Thank you for your message! We will get back to you soon.'
    }
  },
  fr: {
    nav: {
      services: 'Services',
      projects: 'Projets',
      about: 'À propos',
      contact: 'Contact'
    },
    hero: {
      title: 'Services de Construction et de Rénovation de Qualité',
      subtitle: 'Transformez votre espace avec notre expertise artisanale',
      cta: 'Devis Gratuit'
    },
    services: {
      title: 'Nos Services',
      renovation: {
        title: 'Rénovation Résidentielle',
        desc: 'Transformations et rénovations complètes'
      },
      kitchen: {
        title: 'Rénovation de Cuisine',
        desc: 'Conception et installation de cuisines sur mesure'
      },
      bathroom: {
        title: 'Rénovation de Salle de Bain',
        desc: 'Rénovations modernes de salles de bain'
      },
      carpentry: {
        title: 'Menuiserie Sur Mesure',
        desc: 'Travaux de bois et installations personnalisées'
      }
    },
    projects: {
      title: 'Projets Récents',
      kitchen: {
        title: 'Rénovation de Cuisine Moderne',
        desc: 'Rénovation complète avec armoires sur mesure'
      },
      bathroom: {
        title: 'Salle de Bain de Luxe',
        desc: 'Rénovation haut de gamme'
      },
      addition: {
        title: 'Extension de Maison',
        desc: 'Extension de deux étages avec suite parentale'
      }
    },
    about: {
      title: 'À Propos de Nous',
      content: 'Avec plus de 20 ans d\'expérience, nous sommes fiers d\'offrir un artisanat et un service client exceptionnels. Notre équipe de professionnels qualifiés est dédiée à la réalisation de votre vision tout en maintenant les plus hauts standards de qualité et de sécurité.'
    },
    contact: {
      title: 'Contactez-Nous',
      name: 'Nom',
      email: 'Email',
      phone: 'Téléphone',
      message: 'Parlez-nous de votre projet',
      submit: 'Envoyer le Message',
      getInTouch: 'Contactez-Nous',
      success: 'Merci pour votre message ! Nous vous répondrons bientôt.'
    }
  }
};

// Current language
let currentLang = 'fr';

// Function to update content
function updateContent() {
  const t = translations[currentLang];
  const langButton = document.getElementById('langToggle');
  langButton.textContent = currentLang == 'en' ? 'FR' : 'EN';
  
  // Update navigation
  document.querySelectorAll('[localize]').forEach(element => {
    const key = element.getAttribute('localize');
    const keys = key.split('.');
    let value = translations[currentLang];
    keys.forEach(k => {
      value = value[k];
    });
    if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
      element.placeholder = value;
    } else {
      element.textContent = value;
    }
  });
}

// Language toggle
window.toggleLanguage = function() {
  currentLang = currentLang === 'en' ? 'fr' : 'en';
  updateContent();
  document.documentElement.lang = currentLang;
}

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
window.scrollToContact = function() {
  document.querySelector('#contact').scrollIntoView({
    behavior: 'smooth'
  });
}

// Handle form submission
window.handleSubmit = function(event) {
  event.preventDefault();
  const form = event.target;
  const formData = new FormData(form);
  
  alert(translations[currentLang].contact.success);
  form.reset();
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

// Initialize content
document.addEventListener('DOMContentLoaded', () => {
  updateContent();
});