//Crea tarjetas de las distintas recetas guardadas en la BBDD
export function crearBloqueReceta(recetas) {
    const listaRecetas = document.getElementById("listaRecetas");

    const creaTarjeta = document.createElement("a");
    creaTarjeta.classList.add("receta");
    creaReceta.href = `./plantilla-receta.html?id=${recetas.id}`;

    const ponImagen = document.createElement("img");
    ponImagen.src = recetas.imagen;
    ponImagen.alt = recetas.titulo;

    const ponTitulo = document.createElement("h2");
    ponTitulo.textContent = recetas.titulo;

    const ponDesc = document.createElement("p");
    ponDesc.textContent = recetas.descripcion;

    creaTarjeta.append(ponImagen, ponTitulo, ponDesc);
    listaRecetas.append(creaTarjeta);
}