const KEY = "recetas";

export function guardarReceta(receta) {
  const recetas = obtenerRecetas();
  recetas.push(receta);

  localStorage.setItem(KEY, JSON.stringify(recetas));
}
export function obtenerRecetas() {
  return JSON.parse(localStorage.getItem(KEY)) || [];
}