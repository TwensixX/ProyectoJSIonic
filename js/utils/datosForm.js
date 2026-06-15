import { fileToBase64 } from "./imageConverter.js";

export async function recogerDatosReceta(form) {
  const formData = new FormData(form);

  const receta = {
    id: Date.now(),
    titulo: "",
    descripcion: "",
    ingredientes: [],
    imagen: null,
    pasos: [],
  };

  const imagenInput = form.querySelector('input[name="imagen"]');

  receta.imagen = await fileToBase64(imagenInput?.files?.[0]);

  const ingredientesInputs = form.querySelectorAll(
    'input[name="ingredientes[]"]',
  );

  ingredientesInputs.forEach((input) => {
    if (input.value.trim() !== "") {
      receta.ingredientes.push(input.value.trim());
    }
  });

  const pasos = form.querySelectorAll(".paso");

  for (const paso of pasos) {
    const descripcion =
      paso.querySelector('textarea[name="descPaso"]')?.value || "";

    const imgFile = paso.querySelector('input[name="imgPaso"]')?.files?.[0];

    const imgBase64 = await fileToBase64(imgFile);

    receta.pasos.push({
      descripcion: descripcion.trim(),
      imagen: imgBase64,
    });
  }

  return receta;
}
