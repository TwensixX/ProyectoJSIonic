import { borrarReceta } from "../services/api-recetas.js";

//Crea tarjetas de las distintas recetas guardadas en la BBDD
export function crearBloqueReceta(recetas) {
  const listaRecetas = document.getElementById("listaRecetas");

  const creaReceta = document.createElement("a");
  creaReceta.classList.add("receta");
  creaReceta.href = `./plantilla-receta.html?id=${recetas.id}`;

  const ponImagen = document.createElement("img");
  ponImagen.src = recetas.imagen || "./resources/square-image.jpg";
  ponImagen.alt = recetas.titulo || "Receta";

  const ponTitulo = document.createElement("h2");
  ponTitulo.textContent = recetas.titulo;

  const ponDesc = document.createElement("p");
  ponDesc.textContent = recetas.descripcion || "";

  const ponBoton = document.createElement("input");
  ponBoton.type = "button";
  ponBoton.classList.add("btn-borra-receta");
  ponBoton.value = "Borrar receta";

  ponBoton.addEventListener("click", async (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (!confirm(`¿Borrar "${recetas.titulo}"?`)) {
      return;
    }

    try {
      await borrarReceta(recetas.id);

      creaReceta.remove();
    } catch (error) {
      console.error(error);
      alert("No se pudo borrar la receta");
    }
  });

  const favIcon = document.createElement("i");
  favIcon.classList.add("fa-regular", "fa-star");
  favIcon.tabIndex = "0";

  creaReceta.append(ponImagen, ponTitulo, ponDesc, ponBoton, favIcon);

  listaRecetas.appendChild(creaReceta);
}
