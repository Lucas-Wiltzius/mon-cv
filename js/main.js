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

// On sélectionne tous les liens
const liens = document.querySelectorAll('.nav-liens a')

liens.forEach(function (lien) {
  lien.addEventListener('click', function () {
    navLiens.classList.remove('ouvert');
  });
});

// Barres de progression
const barres = document.querySelectorAll('.barre-progression');

const observerBarres = new IntersectionObserver(function(entries) {
  entries.forEach(function(entry) {
    if (entry.isIntersecting) {
      const progression = entry.target.dataset.progression;
      entry.target.style.width = progression + '%';
    }
  });
});

barres.forEach(function(barre) {
  observerBarres.observe(barre);
});