export function toggleEstrellaFav() {
  document.addEventListener("click", function (event) {
    if (event.target.matches(".receta i")) {
      event.preventDefault();
      event.stopPropagation();

      const star = event.target;

      star.classList.toggle("activo");

      if (star.classList.contains("fa-regular")) {
        star.classList.replace("fa-regular", "fa-solid");
      } else {
        star.classList.replace("fa-solid", "fa-regular");
      }
    }
  });
}
