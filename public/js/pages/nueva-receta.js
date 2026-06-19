import { crearInputIngrediente } from "../components/input-ingrediente.js";
import { crearBloquePaso } from "../components/bloque-paso.js";
import { initImagePreviews } from "../utils/img-preview.js";
import { contadorTextArea } from "../utils/textarea-counter.js";
import { obtenerDatosFormulario, pintarFormulario } from "../utils/datosForm.js";
import { prepararReceta, enviarReceta, obtenerRecetaPorId } from "../services/api-recetas.js";
import { obtenerIdReceta } from "../utils/url-receta.js";

/* CREAR INPUT INGREDIENTE */
const bttnAnadeIngr = document.getElementById("anadeIngr");
bttnAnadeIngr.addEventListener("click", crearInputIngrediente);

/* CREAR BLOQUE PASO */
const bttnAnadePaso = document.getElementById("anadePaso");
bttnAnadePaso.addEventListener("click", crearBloquePaso);

/* PREVIEW IMAGEN */
initImagePreviews();

/* CONTADOR TEXTAREA */
contadorTextArea();

/* GUARDAR RECETAS */
const form = document.querySelector("#formReceta");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const receta = obtenerDatosFormulario();

  const recetaPreparada = await prepararReceta(receta);

  await enviarReceta(recetaPreparada);

  window.location.href = "../../plantilla-receta.html"

  console.log("Receta enviada al servidor");
});

/*  */
const id = obtenerIdReceta();

async function init() {
  if (id) {
    const receta = await obtenerRecetaPorId(id);
    pintarFormulario(receta);
  }
}

init();