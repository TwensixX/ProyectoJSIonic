if (document.querySelector("#listaRecetas")) {
  import("./pages/index.js");
}

if (document.querySelector("#formReceta")) {
  import("./pages/nueva-receta.js");
}

if (document.querySelector("#vistaReceta")) {
  import("./pages/plantilla-receta.js");
}