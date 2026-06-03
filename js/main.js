import { ponerTituloReceta } from "./utils/principal";
import { recetas } from "./data/recetas";

for (const receta of recetas) {
    ponerTituloReceta(receta);
}