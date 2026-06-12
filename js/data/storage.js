const KEY = "recetas";

export function getRecetas() {
    return JSON.parse(localStorage.getItem(KEY)) || [];
}

export function guardarRecetas(recetas) {
    localStorage.setItem(KEY, JSON.stringify(recetas));
}

export function agregarReceta(receta) {
    const recetas = getRecetas();
    recetas.push(receta);
    guardarRecetas(recetas);
}

export function getRecetaById(id) {
    const recetas = getRecetas();
    return recetas.find(r => r.id === id);
}