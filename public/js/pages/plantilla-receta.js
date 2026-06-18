import { obtenerIdReceta } from "../utils/url-receta.js";
import { pintarRecetaCompleta } from "../components/vista-receta.js";
import { obtenerRecetaPorId } from "../services/api-recetas.js";

async function init() {
  try {
    const id = obtenerIdReceta();

    if (!id) {
      window.location.href = "./index.html";
      return;
    }

    const receta = await obtenerRecetaPorId(id);

    pintarRecetaCompleta(receta);

  } catch (err) {
    console.error(err);
  }
}

init();