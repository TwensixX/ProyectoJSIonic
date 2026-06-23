import { obtenerRecetas } from "../services/api-recetas.js";
import { crearBloqueReceta } from "../components/tarjeta-receta.js";
import { iniciarBuscador } from "../utils/buscador.js";

async function init() {
  try {
    const recetas = await obtenerRecetas();

    recetas.forEach(receta => {
      crearBloqueReceta(receta);
    });

  } catch (err) {
    console.error("Error cargando recetas:", err);
  }
}

init();

iniciarBuscador();

toggleEstrellaFav();
