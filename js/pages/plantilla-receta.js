import { getRecetaById } from "../data/storage.js";

const params = new URLSearchParams(window.location.search);
const id = params.get("id");

const receta = getRecetaById(id);

if (!receta) {
    console.error("Receta no encontrada");
} else {
    document.querySelector(".titulo").textContent = receta.titulo;
    document.querySelector(".descripcion").textContent = receta.descripcion;
    document.querySelector(".imagen").src = receta.imagen;
}