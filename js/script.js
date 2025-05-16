const hamburguesa = document.querySelector(".hamburguesa");
const navMenu = document.querySelector("nav ul");

hamburguesa.addEventListener("click", () => {
    navMenu.classList.toggle("verMenu");
});
// Animación flip al hacer clic en imágenes
document.querySelectorAll('.galeria img').forEach(img => {
  img.addEventListener('click', () => {
    img.classList.remove('flip'); // Reinicia si ya la tenía
    void img.offsetWidth; // Fuerza reflow
    img.classList.add('flip');
  });
});
