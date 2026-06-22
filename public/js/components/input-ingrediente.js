//Crea un input para escribir y un botón para borrar los input
export function crearInputIngrediente(valor = "") {
  const listaIngredientes = document.querySelector("#listaIngredientes ul");

  const creaLi = document.createElement("li");

  const creaInputTexto = document.createElement("input");
  creaInputTexto.type = "text";
  creaInputTexto.name = "ingredientes[]";
  creaInputTexto.value = valor;
  creaInputTexto.classList.add("ingrediente");
  creaInputTexto.maxLength = 40;

  const creaBoton = document.createElement("button");
  creaBoton.type = "button";  
  
  const icon = document.createElement("i");
  icon.classList.add("fa-solid", "fa-minus");
  
  creaBoton.appendChild(icon);
  
  creaBoton.addEventListener("click", () => {
    creaLi.remove();
  });

  creaLi.append(creaInputTexto, creaBoton);
  listaIngredientes.appendChild(creaLi);
}
