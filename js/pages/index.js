import { crearBloqueReceta } from "../components/tarjeta-receta.js";
import { iniciarBuscador } from "../utils/buscador.js";
import { recetas } from "../data/recetas.js";

/* CREA TARJETAS DE LAS RECETAS EN BBDD */
const recetas = getRecetas();

recetas.forEach(receta => {
    crearBloqueReceta(receta);
});

/* INICIA BUSCADOR DE RECETAS */
iniciarBuscador();
