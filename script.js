// ============================================================
// Xtreme-Park Mendoza — Interactividad
// ============================================================

// Toggle menú móvil
const nav = document.getElementById('nav');
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

function closeMenu() {
  nav.classList.remove('open');
  navToggle.classList.remove('open');
  navToggle.setAttribute('aria-expanded', 'false');
}

navToggle.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  navToggle.classList.toggle('open', isOpen);
  navToggle.setAttribute('aria-expanded', String(isOpen));
});

navLinks.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', closeMenu);
});

// Estado visual de la navbar al hacer scroll
const handleScroll = () => nav.classList.toggle('scrolled', window.scrollY > 30);
window.addEventListener('scroll', handleScroll, { passive: true });
handleScroll();

// Animación de aparición al hacer scroll
const revealElements = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
);
revealElements.forEach((el) => revealObserver.observe(el));

// Año actual en el footer
document.getElementById('year').textContent = new Date().getFullYear();
