// On attend que la page soit complètement chargée
document.addEventListener('DOMContentLoaded', function () {
  console.log('La page est chargée !');

  const sections = document.querySelectorAll('section');

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  });

  sections.forEach(function (section) {
    observer.observe(section);
  });
});

// Menu hamburger
const hamburger = document.getElementById('hamburger');
const navLiens = document.getElementById('nav-liens');

hamburger.addEventListener('click', function () {
  navLiens.classList.toggle('ouvert');
});