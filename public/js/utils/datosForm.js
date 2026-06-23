import { crearBloquePaso } from "../components/bloque-paso.js";
import { crearBloqueReceta } from "../components/tarjeta-receta.js";
import { Receta } from "../models/receta.js";

export function obtenerDatosFormulario() {
  const imagen = document.querySelector(".imgInput").files[0];

  const titulo = document.getElementById("tituloRecetaInput").value;

  const descripcion = document.getElementById("descRecetaInput").value;

  const categoria = document.getElementById("categoria").value;

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

  return new Receta(imagen, titulo, descripcion, categoria, ingredientes, pasos);
}

export function rellenarFormulario(receta) {
  document.querySelector("titulo-receta").value = receta.titulo;
  document.querySelector("desc-receta").value = receta.descripcion;

  const contIng = document.getElementById("listaIngredientes");
  contIng.innerHTML = "";

  receta.ingredientes.forEach(i => {
    const input = document.createElement("input");
    input.name = "ingredientes[]";
    input.value = i;
    contIng.appendChild(input);
  });

  const contPasos = document.getElementById("listaPasos");
  contPasos.innerHTML = "";

  receta.pasos.forEach(p => {
    const div = document.createElement("div");
    div.classList.add("paso");

    const textarea = document.createElement("textarea");
    textarea.name = "descPaso";
    textarea.value = p.descripcion;

    div.appendChild(textarea);
    contPasos.appendChild(div);
  });
}