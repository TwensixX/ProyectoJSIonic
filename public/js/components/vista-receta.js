export function pintarRecetaCompleta(receta) {
  const img = document.getElementById("imgReceta");
  img.src = receta.imagen;

  const tituloRec = document.getElementById("tituloReceta");
  tituloRec.textContent = receta.titulo;

  const descRec = document.getElementById("descReceta");
  descRec.textContent = receta.descripcion;

  const listaIng = document.querySelector("#listaIngredientes ul");
  listaIng.innerHTML = "";

  receta.ingredientes.forEach((ingr) => {
    const creaLi = document.createElement("li");
    creaLi.textContent = ingr;
    listaIng.appendChild(creaLi);
  });

  const listaPasos = document.querySelector("#listaPasos ol");
  listaPasos.innerHTML = "";

  receta.pasos.forEach((paso) => {
    const creaLi = document.createElement("li");
    creaLi.classList.add("paso");

    const creaP = document.createElement("p");
    creaP.textContent = paso.descripcion;

    const creaDivImg = document.createElement("div");
    creaDivImg.classList.add("img-paso");
    const creaImg = document.createElement("img");
    creaImg.classList.add("preview");
    creaImg.src = paso.imagen;
    creaDivImg.appendChild(creaImg);

    creaLi.append(creaP, creaDivImg);

    if (paso.imagen === null || paso.imagen === undefined) {
      creaLi.removeChild(creaDivImg);
      creaLi.style.marginBottom = "0";
    }

    listaPasos.appendChild(creaLi);
  });

  const btnEditar = document.createElement("a");
  btnEditar.textContent = "Editar";
  btnEditar.id = "editarReceta"

  btnEditar.addEventListener("click", () => {
    window.location.href = `./form-receta.html?id=${receta.id}`;
  });

  const btnVolver = document.createElement("a");
  btnVolver.textContent = "Volver";
  btnVolver.href = "./index.html";

  const bttsForm = document.querySelector(".btts-form");
  bttsForm.append(btnEditar, btnVolver);
}

