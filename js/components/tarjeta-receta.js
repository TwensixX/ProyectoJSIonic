//Crea tarjetas de las distintas recetas guardadas en la BBDD
export function crearBloqueReceta(recetas) {
    const listaRecetas = document.getElementById("listaRecetas");

    const creaReceta = document.createElement("a");
    creaReceta.classList.add("receta");
    creaReceta.href = "./plantilla-receta.html";

    listaRecetas.append(creaReceta);

    const ponImagen = document.createElement("img");
    ponImagen.src = recetas.imagen;
    ponImagen.alt = recetas.titulo;

    const ponTitulo = document.createElement("h2");
    ponTitulo.textContent = recetas.titulo;

    const ponDesc = document.createElement("p");
    ponDesc.textContent = recetas.descripcion;

    creaReceta.append(ponImagen, ponTitulo, ponDesc);
}