// Selecciona todos los elementos con la clase "ani"
const elementos = document.querySelectorAll(".ani");

// Configura el Intersection Observer
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      const elemento = entry.target; // El elemento observado
      if (entry.isIntersecting) {
        // Hacer visible el elemento y activar la primera animación
        elemento.style.visibility = "visible";
        elemento.style.opacity = "1";
        elemento.classList.add("animate__animated", "animate__backInRight");

        // Al terminar la primera animación, activa la animación de pulso infinito
        elemento.addEventListener("animationend", () => {
          elemento.classList.remove("animate__backInRight");
          elemento.classList.add("pulse-infinite");
        });

        // Detén la observación para evitar que se repita
        observer.unobserve(elemento);
      }
    });
  },
  {
    threshold: 0.5, // El elemento debe estar al menos al 50% visible
  }
);

// Ocultar todos los elementos inicialmente y observarlos
elementos.forEach((elemento) => {
  elemento.style.visibility = "hidden";
  elemento.style.opacity = "0";

  // Agregar evento para detener la animación y cambiar el estilo al hacer clic
  elemento.addEventListener("click", () => {
    elemento.classList.remove("pulse-infinite"); // Quitar la animación infinita
    elemento.classList.add("clicked"); // Aplicar el estilo por defecto
  });

  observer.observe(elemento);
});
