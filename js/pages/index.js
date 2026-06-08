import { crearBloqueReceta } from "../components/tarjeta-receta.js";
import { iniciarBuscador } from "../utils/buscador.js";
import { recetas } from "../data/recetas.js";

for (let receta of recetas) {
    crearBloqueReceta(receta);
}

iniciarBuscador();