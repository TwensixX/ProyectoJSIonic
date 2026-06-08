export function initImagePreviews() {
  const wrappers = document.querySelectorAll(".img-receta");

  wrappers.forEach((wrapper) => {
    const input = wrapper.querySelector(".imgInput");
    const img = wrapper.querySelector(".preview");
    const placeholder = wrapper.querySelector(".placeholder");

    input.addEventListener("change", () => {
      const file = input.files?.[0];

      if (!file) return;

      const reader = new FileReader();

      reader.onload = (e) => {
        img.src = e.target.result;
        img.style.display = "block";
        placeholder.style.display = "none";
      };

      reader.readAsDataURL(file);
    });
  });
}