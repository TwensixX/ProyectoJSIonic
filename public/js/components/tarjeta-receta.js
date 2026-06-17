//Crea tarjetas de las distintas recetas guardadas en la BBDD
export function crearBloqueReceta(recetas) {
  const listaRecetas = document.getElementById("listaRecetas");

  const creaReceta = document.createElement("a");
  creaReceta.classList.add("receta");
  creaReceta.href = "./plantilla-receta.html?id=" + recetas.id;

  const ponImagen = document.createElement("img");
  ponImagen.src = recetas.imagen || "./resources/default.jpg";
  ponImagen.alt = recetas.titulo || "Receta";
  ponImagen.name = "imagen";

  const ponTitulo = document.createElement("h2");
  ponTitulo.textContent = recetas.titulo;
  ponTitulo.name = "titulo";

  const ponDesc = document.createElement("p");
  ponDesc.textContent = recetas.descripcion || "";
  ponDesc.name = "desc";

  const ponBoton = document.createElement("input");
  ponBoton.type = "button";
  ponBoton.classList.add("btn-borra-receta");
  ponBoton.value = "Borrar receta";

  creaReceta.append(ponImagen, ponTitulo, ponDesc, ponBoton);
  listaRecetas.appendChild(creaReceta);
}
