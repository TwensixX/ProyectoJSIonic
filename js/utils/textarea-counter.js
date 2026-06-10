/* Cuenta los caracteres del textarea */
export function contadorTextArea() {
  const textAreaReceta = document.getElementById("descReceta");
  const counter = document.getElementById("counter");
  const maxReceta = textAreaReceta.maxLength;

  counter.textContent = `0 / ${maxReceta}`;

  textAreaReceta.addEventListener("input", () => {
    const length = textAreaReceta.value.length;
    counter.textContent = `${length} / ${maxReceta}`;

    if (length === 1500) {
      counter.style.color = "#e30000";
    } else if (length >= 1400 && length !== 1500) {
      counter.style.color = "#cd6d00";
    } else {
      counter.style.color = "#000000";
    }
  });

  const textAreaPaso = document.querySelectorAll(".desc-paso");

  textAreaPaso.forEach((tAPaso) => {
    const counter = tAPaso.parentElement.querySelector(".counter");
    const maxPaso = tAPaso.maxLength;

    counter.textContent = `0 / ${maxPaso}`;

    tAPaso.addEventListener("input", () => {
      const length = tAPaso.value.length;
      counter.textContent = `${length} / ${maxPaso}`;

      if (length === maxPaso) {
        counter.style.color = "#e30000";
      } else if (length >= 1900 && length !== 2000) {
        counter.style.color = "#cd6d00";
      } else {
        counter.style.color = "#000000";
      }
    });
  });
}
