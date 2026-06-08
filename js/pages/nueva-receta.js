import { crearInputIngrediente } from "../components/input-ingrediente.js";
import { crearBloquePaso } from "../components/bloque-paso.js";
import { initImagePreviews } from "../utils/img-preview.js";

/* CREAR INPUT INGREDIENTE */
const bttnAnadeIngr = document.getElementById("anadeIngr");
bttnAnadeIngr.addEventListener('click', crearInputIngrediente);

/* CREAR BLOQUE PASO */
const bttnAnadePaso = document.getElementById("anadePaso");
bttnAnadePaso.addEventListener('click', crearBloquePaso);

/* PREVIEW IMAGEN */
initImagePreviews();