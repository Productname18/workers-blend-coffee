const revealElements = document.querySelectorAll(
  ".product-card, .ingredient-card, .store-card, .story-content"
);

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  },
  { threshold: 0.15 }
);

revealElements.forEach((element) => {
  element.style.opacity = "0";
  element.style.transform = "translateY(35px)";
  element.style.transition = "opacity .8s ease, transform .8s ease";
  observer.observe(element);
});
const musicButton = document.getElementById("musicButton");
const brandMusic = document.getElementById("brandMusic");

musicButton.addEventListener("click", () => {
  if (brandMusic.paused) {
    brandMusic.play();
    musicButton.textContent = "⏸ Pause Worker’s Blend Music";
  } else {
    brandMusic.pause();
    musicButton.textContent = "▶ Play Worker’s Blend Music";
  }
});

brandMusic.addEventListener("ended", () => {
  musicButton.textContent = "▶ Play Worker’s Blend Music";
});
