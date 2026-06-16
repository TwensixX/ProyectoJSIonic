import { Receta } from "../models/receta.js";

export function obtenerDatosFormulario() {
  const imagen = document.querySelector(".imgInput").files[0];

  const titulo = document.getElementById("tituloReceta").value;

  const descripcion = document.getElementById("descReceta").value;

  const ingredientes = [...document.querySelectorAll('[name="ingredientes[]"]')]
    .map(input => input.value.trim())
    .filter(v => v !== "");

  const pasos = [...document.querySelectorAll(".paso")]
    .map(paso => {
      const img = paso.querySelector('[name="imgPaso"]')?.files[0] || null;
      const desc = paso.querySelector('[name="descPaso"]')?.value.trim() || "";

      return {
        descripcion: desc,
        imagen: img
      };
    })
    .filter(p => p.descripcion !== "" || p.imagen !== null);

  return new Receta(
    imagen,
    titulo,
    descripcion,
    ingredientes,
    pasos
  );
}
