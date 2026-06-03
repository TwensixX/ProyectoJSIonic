export function crearBloqueReceta(recetas) {
    const bloqueReceta = document.getElementById("receta");
    const creaH2 = document.createElement("h2");
    creaH2.textContent = recetas.nombre;

    bloqueReceta.appendChild(creaH2);
}

export function ponerDescripcionReceta(recetas) {

}