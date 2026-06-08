//Crea un bloque para cada paso de la receta
export function crearBloquePaso() {
  const listaPasos = document.getElementById("listaPasos");

  const creaDiv = document.createElement("div");
  creaDiv.classList.add("paso");

  const creaTextArea = document.createElement("textarea");
  creaTextArea.name = "pasos[]";

  const creaBoton = document.createElement("button");
  creaBoton.type = "button";

  const icon = document.createElement("i");
  icon.classList.add("fa-solid", "fa-minus");

  creaBoton.appendChild(icon);

  creaBoton.addEventListener("click", () => {
    creaDiv.remove();
  });

  const creaImgPaso = document.createElement("div");
  creaImgPaso.classList.add("img-paso");

  const creaLabelImg = document.createElement("label");
  creaLabelImg.classList.add("img-upload-paso");

  const creaInputImg = document.createElement("input");
  creaInputImg.type = "file";
  creaInputImg.classList.add("imgInput");
  creaInputImg.accept = "image/*";

  const creaSpanImg = document.createElement("span");
  creaSpanImg.classList.add("placeholder");
  creaSpanImg.textContent = "Selecciona una imagen del paso"
  
  const creaImg = document.createElement("img");
  creaImg.classList.add("preview");
  creaImg.alt = "Vista previa";

  creaLabelImg.append(creaInputImg, creaSpanImg, creaImg);
  creaImgPaso.appendChild(creaLabelImg);

  creaDiv.append(creaTextArea, creaBoton, creaImgPaso);
  listaPasos.appendChild(creaDiv);

  const botonAnadePaso = document.getElementById("anadePaso");
  listaPasos.insertBefore(creaDiv, botonAnadePaso);
}
