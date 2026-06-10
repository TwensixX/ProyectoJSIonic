import { contadorTextArea } from "../utils/textarea-counter.js";

//Crea un bloque para cada paso de la receta
export function crearBloquePaso() {
  const listaPasos = document.getElementById("listaPasos");

  const creaDiv = document.createElement("div");
  creaDiv.classList.add("paso");

  const creaTextArea = document.createElement("textarea");
  creaTextArea.classList.add("desc-paso");
  creaTextArea.maxLength = 2000;

  const creaBoton = document.createElement("button");
  creaBoton.type = "button";

  const creaP = document.createElement("p");
  creaP.classList.add("counter");
  creaP.textContent = "0 / 2000"

  const icon = document.createElement("i");
  icon.classList.add("fa-solid", "fa-minus");

  creaBoton.appendChild(icon);

  creaBoton.addEventListener("click", () => {
    creaDiv.remove();
  });

  const creaImgPaso = document.createElement("div");
  creaImgPaso.classList.add("img-paso");

  const creaLabelImg = document.createElement("label");
  creaLabelImg.classList.add("img-upload");

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

  creaDiv.append(creaTextArea, creaBoton, creaP, creaImgPaso);

  const botonAnadePaso = document.getElementById("anadePaso");
  listaPasos.insertBefore(creaDiv, botonAnadePaso);
  contadorTextArea();
}
