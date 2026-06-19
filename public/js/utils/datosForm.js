import { crearBloquePaso } from "../components/bloque-paso.js";
import { crearBloqueReceta } from "../components/tarjeta-receta.js";
import { Receta } from "../models/receta.js";

export function obtenerDatosFormulario() {
  const imagen = document.querySelector(".imgInput").files[0];

  const titulo = document.getElementById("tituloRecetaInput").value;

  const descripcion = document.getElementById("descRecetaInput").value;

  const ingredientes = [...document.querySelectorAll('[name="ingredientes[]"]')]
    .map((input) => input.value.trim())
    .filter((v) => v !== "");

  const pasos = [...document.querySelectorAll(".paso")]
    .map((paso) => {
      const img = paso.querySelector('[name="imgPasoInput"]')?.files[0] || null;
      const desc =
        paso.querySelector('[name="descPasoInput"]')?.value.trim() || "";

      return {
        descripcion: desc,
        imagen: img,
      };
    })
    .filter((p) => p.descripcion !== "" || p.imagen !== null);

  return new Receta(imagen, titulo, descripcion, ingredientes, pasos);
}

export function pintarFormulario(receta) {
  document.querySelector(".titulo-receta").value = receta.titulo;

  document.querySelector(".desc-receta").value = receta.descripcion;

  const preview = document.querySelector("#previewReceta");
  if (preview && receta.imagen) {
    preview.src = receta.imagen;
  }

  const contIng = document.querySelector("#listaIngredientes");
  contIng.innerHTML = "";

  

  // PASOS
  const contPasos = document.querySelector("#listaPasos");
  contPasos.innerHTML = "";

  receta.pasos.forEach((paso) => {
    crearBloquePaso(paso);
  });
}
