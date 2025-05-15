// Smooth scroll for nav links
document.querySelectorAll('a.nav-link').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const href = link.getAttribute('href');
    const offsetTop = document.querySelector(href).offsetTop;

    window.scrollTo({
      top: offsetTop - 60, // offset for fixed headers if any
      behavior: 'smooth'
    });
  });
});
