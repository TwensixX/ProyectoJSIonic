import { crearIngrediente } from "../components/input-ingrediente.js";

receta.ingredientes.forEach((ingrediente) => {
  const input = crearIngrediente(ingrediente);

  listaIngredientes.appendChild(input);
});
