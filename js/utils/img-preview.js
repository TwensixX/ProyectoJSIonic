export function initImagePreviews() {
  document.addEventListener("change", function (e) {
    const input = e.target;

    if (!input.classList.contains("imgInput")) return;

    const file = input.files[0];
    if (!file) return;

    const reader = new FileReader();

    reader.onload = function (event) {
      const contenedor = input.closest(".img-receta, .img-paso");

      const img = contenedor.querySelector(".preview");
      const placeholder = contenedor.querySelector(".placeholder");

      img.src = event.target.result;
      img.style.display = "block";
      placeholder.style.display = "none";
    };

    reader.readAsDataURL(file);
  });
}