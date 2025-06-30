// Initialize AOS Library for scroll animations
AOS.init({
  duration: 800,
  once: true
});

// Set current year in footer
const yearEl = document.getElementById('year');
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}
