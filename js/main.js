/* =============================================
   HERANDENYSANA.COM — JavaScript principal
   ============================================= */

document.addEventListener('DOMContentLoaded', () => {

  // ── NAV SCROLL EFFECT ──
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
  });

  // ── REVEAL ON SCROLL ──
  const reveals = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('visible'), i * 80);
      }
    });
  }, { threshold: 0.1 });
  reveals.forEach(el => observer.observe(el));

  // ── CONTACT FORM ──
  // Conectar con tu proveedor de formularios preferido
  // Opciones: Formspree, EmailJS, Netlify Forms, etc.
  const form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      // TODO: Añadir integración con servicio de email
      // Ejemplo con Formspree:
      // fetch('https://formspree.io/f/YOUR_ID', { method: 'POST', body: new FormData(form) })
      alert('¡Gracias por tu mensaje! Te respondo en menos de 24 horas. 🌿');
      form.reset();
    });
  }

});
