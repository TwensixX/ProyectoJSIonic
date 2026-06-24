export class Receta {
  constructor(
    imagen,
    titulo,
    descripcion,
    ingredientes,
    pasos,
    favorito = 0
  ) {
    this.imagen = imagen;
    this.titulo = titulo;
    this.descripcion = descripcion;
    this.ingredientes = ingredientes;
    this.pasos = pasos;
    this.favorito = favorito;
  }
}