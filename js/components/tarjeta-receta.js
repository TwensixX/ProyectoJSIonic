//Crea tarjetas de las distintas recetas guardadas en la BBDD
export function crearBloqueReceta(recetas) {
    const listaRecetas = document.getElementById("listaRecetas");

    const creaReceta = document.createElement("a");
    creaReceta.classList.add("receta");4
    creaReceta.href = "./nueva-receta.html";

    listaRecetas.append(creaReceta);

    const ponImagen = document.createElement("img");
    ponImagen.src = recetas.imagen;
    ponImagen.alt = recetas.nombre;

    const ponTitulo = document.createElement("h2");
    ponTitulo.textContent = recetas.nombre;

    const ponDesc = document.createElement("p");
    ponDesc.textContent = recetas.descripcion;

    creaReceta.append(ponImagen, ponTitulo, ponDesc);
}