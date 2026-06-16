import { obtenerDatosFormulario } from "../utils/datosForm.js";

export async function enviarReceta() {
  const receta = obtenerDatosFormulario();

  const formData = new FormData();

  // JSON principal
  formData.append("data", JSON.stringify(receta));

  // imagen principal
  formData.append("imagen", receta.imagen);

  // imágenes de pasos
  receta.pasos.forEach((paso, i) => {
    if (paso.imagen) {
      formData.append(`paso-${i}`, paso.imagen);
    }
  });

  const res = await fetch("/api/recetas", {
    method: "POST",
    body: formData
  });

  if (!res.ok) {
    throw new Error("Error al enviar la receta");
  }

  return await res.json();
}