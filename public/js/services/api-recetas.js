import { transformarBase64 } from "../utils/fileToBase64.js";

export async function prepararReceta(receta) {
  const imagen = await transformarBase64(receta.imagen);

  const pasos = await Promise.all(
    receta.pasos.map(async (p) => ({
      descripcion: p.descripcion,
      imagen: p.imagen ? await transformarBase64(p.imagen) : null
    }))
  );

  return {
    ...receta,
    imagen,
    pasos
  };
}

export async function enviarReceta(receta) {
  const response = await fetch("/api/recetas", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(receta)
  });

  if (!response.ok) {
    throw new Error("Error al enviar la receta");
  }

  return response.json();
}

export async function obtenerRecetas() {
  const res = await fetch("/api/recetas");

  if (!res.ok) {
    throw new Error("Error al obtener recetas");
  }

  return await res.json();
}

export async function obtenerRecetaPorId(id) {
  const res = await fetch(`/api/recetas/${id}`);

  if (!res.ok) {
    throw new Error("Error al obtener la receta por id");
  }

  return await res.json();
}

export async function borrarReceta(id) {
  const res = await fetch(`/api/recetas/${id}`, {
    method: "DELETE"
  });

  if (!res.ok) {
    throw new Error("Error al borrar la receta");
  }

  return await res.json();
}