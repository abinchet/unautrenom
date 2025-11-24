// Carrousel de texte avec animation fluide
document.addEventListener("DOMContentLoaded", function () {
  const texts = document.querySelectorAll(".text-carousel .text");
  let currentIndex = 0;

  function changeText() {
    // Ajouter la classe fade-out au texte actuel
    texts[currentIndex].classList.add("fade-out");
    texts[currentIndex].classList.remove("active");

    // Passer au texte suivant
    currentIndex = (currentIndex + 1) % texts.length;

    // Après un délai pour l'animation de sortie, afficher le nouveau texte
    setTimeout(() => {
      // Retirer fade-out de tous les textes
      texts.forEach((text) => {
        text.classList.remove("fade-out");
        text.classList.remove("active");
      });

      // Activer le nouveau texte
      texts[currentIndex].classList.add("active");
    }, 300); // Délai de 300ms pour l'animation de sortie
  }

  // Démarrer le carrousel toutes les 3 secondes
  setInterval(changeText, 2000);
});
