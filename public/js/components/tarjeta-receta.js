import { borrarReceta, recetaFavorita } from "../services/api-recetas.js";

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

  const creaBttnFav = document.createElement("i");

  // pintar estado inicial
  if (recetas.favorito == 1) {
    creaBttnFav.classList.add("fa-solid", "fa-star", "activado");
  } else {
    creaBttnFav.classList.add("fa-regular", "fa-star");
  }

  creaBttnFav.addEventListener("click", async (e) => {
    e.preventDefault();
    e.stopPropagation();

    // invertir estado real
    recetas.favorito = recetas.favorito === 1 ? 0 : 1;

    try {
      await recetaFavorita(recetas.id, recetas.favorito);

      // sincronizar UI con estado real
      if (recetas.favorito === 1) {
        creaBttnFav.classList.remove("fa-regular");
        creaBttnFav.classList.add("fa-solid", "activado");
      } else {
        creaBttnFav.classList.remove("fa-solid", "activado");
        creaBttnFav.classList.add("fa-regular");
      }
    } catch (err) {
      console.error(err);
    }
  });

  creaReceta.append(ponImagen, ponTitulo, ponDesc, ponBoton, creaBttnFav);

  listaRecetas.appendChild(creaReceta);
}
