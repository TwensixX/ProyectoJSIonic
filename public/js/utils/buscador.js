//Busca y filtra entre las recetas ya existentes
export function iniciarBuscador() {
    const buscador = document.getElementById("buscador");

    buscador.addEventListener("input", () => {
        const texto = buscador.value.toLowerCase();
        const recetas = document.querySelectorAll(".receta");

        for (let receta of recetas) {
            const titulo = receta.querySelector("h2").textContent.toLowerCase();

            if (titulo.includes(texto)) {
                receta.style.display = "grid";
            } else {
                receta.style.display = "none";
            }
        }
    });
}