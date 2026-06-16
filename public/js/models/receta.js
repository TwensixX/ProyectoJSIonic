export class Receta {
  constructor(imagen, titulo, descripcion, ingredientes, pasos) {
    this.id = Date.now();
    this.imagen = imagen;
    this.titulo = titulo;
    this.descripcion = descripcion;
    this.ingredientes = ingredientes;
    this.pasos = pasos;
  }
}