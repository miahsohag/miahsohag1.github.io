// Mobile nav toggle
function toggleMenu() {
  const links = document.querySelector('.nav-links');
  links.classList.toggle('open');
}

// Close menu on outside click
document.addEventListener('click', function(e) {
  const nav = document.querySelector('.nav-inner');
  if (!nav.contains(e.target)) {
    document.querySelector('.nav-links').classList.remove('open');
  }
});

// Scroll-in animation for cards and timeline entries
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.proj-card, .tl-entry, .pub-card, .skill-group, .edu-card').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(18px)';
  el.style.transition = 'opacity 0.45s ease, transform 0.45s ease';
  observer.observe(el);
});
