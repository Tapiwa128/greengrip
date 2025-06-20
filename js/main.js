// Main JavaScript for Greengrip Energy

// Mobile Menu Toggle
function toggleMenu() {
  const navLinks = document.getElementById('nav-links');
  navLinks.classList.toggle('active');
  document.body.classList.toggle('no-scroll');
}

// Slideshow Functionality
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  const slides = document.getElementsByClassName("slide");
  const dots = document.getElementsByClassName("dot");
  
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  
  for (i = 0; i < slides.length; i++) {
    slides[i].classList.remove("fade");
  }
  
  for (i = 0; i < dots.length; i++) {
    dots[i].classList.remove("active");
  }
  
  slides[slideIndex-1].classList.add("fade");
  dots[slideIndex-1].classList.add("active");
}

// Auto-advance slides
let slideInterval = setInterval(() => {
  plusSlides(1);
}, 5000);

// Pause slideshow on hover
const slideshow = document.querySelector('.slideshow-container');
slideshow.addEventListener('mouseenter', () => {
  clearInterval(slideInterval);
});

slideshow.addEventListener('mouseleave', () => {
  slideInterval = setInterval(() => {
    plusSlides(1);
  }, 5000);
});

// Scroll to top button functionality
// Navbar scroll effect
window.addEventListener('scroll', function() {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Mobile menu toggle
function toggleMenu() {
  const navLinks = document.getElementById('nav-links');
  navLinks.classList.toggle('active');
  document.body.classList.toggle('no-scroll');
}






// Animate stats counters
function animateStats() {
  const statNumbers = document.querySelectorAll('.stat-number');
  
  statNumbers.forEach(stat => {
    const target = parseInt(stat.getAttribute('data-count'));
    const increment = target / 100;
    let current = 0;
    
    const timer = setInterval(() => {
      current += increment;
      stat.textContent = Math.floor(current);
      
      if (current >= target) {
        stat.textContent = target;
        clearInterval(timer);
      }
    }, 20);
  });
}

// Intersection Observer for animations
const observerOptions = {
  threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      if (entry.target.classList.contains('stats-grid')) {
        animateStats();
      }
      entry.target.classList.add('animate');
    }
  });
}, observerOptions);

// Observe elements that should animate
document.querySelectorAll('.section, .stats-grid').forEach(section => {
  observer.observe(section);
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    
    const targetId = this.getAttribute('href');
    if (targetId === '#') return;
    
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  });
});

// Form submission handling
const contactForm = document.getElementById('contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Form validation
    const name = this.elements['name'].value.trim();
    const email = this.elements['email'].value.trim();
    const message = this.elements['message'].value.trim();
    
    if (!name || !email || !message) {
      alert('Please fill in all fields');
      return;
    }
    
    // Submit form (in a real implementation, this would be an AJAX call)
    this.submit();
  });
}