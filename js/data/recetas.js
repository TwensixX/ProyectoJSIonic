/* export class Receta {
  constructor(
    imagen,
    titulo,
    descripcion,
    ingredientes = [],
    pasos = []
  ) {
    this.id = Date.now();
    this.imagen = imagen;
    this.titulo = titulo;
    this.descripcion = descripcion;
    this.ingredientes = ingredientes;
    this.pasos = pasos;
  }
} */

export const recetas = [
  {
    id: 1,
    imagen: "../resources/images/tortilla-de-patatas.jpg",
    titulo: "Tortilla de patatas",
    descripcion: `Tortilla de patatas es un plato tradicional de la gastronomía española elaborado principalmente a base de huevos y patatas, cocinados juntos hasta formar una preparación compacta, de textura suave y consistente. Se trata de una elaboración muy representativa de la cocina casera en España, caracterizada por su sencillez de ingredientes y su versatilidad como plato principal o acompañamiento. Puede servirse en frío o en caliente, y se consume habitualmente tanto en el ámbito doméstico como en bares y restaurantes. Es uno de los platos más reconocidos de la cocina española a nivel internacional, valorado por su equilibrio entre sabor, textura y facilidad de conservación.`,
    ingredientes: ["3 Patatas", "4 Huevos", "Aceite de oliva", "Sal"],
    pasos: [
      {
        descripcion: `Primero pelamos, lavamos y cortamos en trozos no muy grandes las patatas.`,
        imagen: "img/square-image.jpg",
      },
      {
        descripcion: `En una sartén echamos un chorreón de aceite y a fuego medio, añadimos las patatas, sal y tapamos. Dejamos que se hagan.`,
        imagen: "img/square-image.jpg",
      },
      {
        descripcion: `Las iremos moviendo de vez en cuando para que no se peguen. Cuando estén blandamos añadiremos el huevo que lo habremos batido.`,
        imagen: "img/square-image.jpg",
      },
      {
        descripcion: `Le damos la vuelta.`,
        imagen: "img/square-image.jpg",
      },
      {
        descripcion: `Emplatamos y a disfrutar!`,
        imagen: "img/square-image.jpg",
      },
    ],
  },
  {
    id: 2,
    imagen: "../resources/images/espaguetis-carbonara.jpg",
    titulo: "Pasta a la carbonara",
    descripcion: `La pasta carbonara es un plato tradicional de la gastronomía italiana que destaca por su sabor intenso y su textura cremosa. Se trata de una de las elaboraciones más representativas de la cocina italiana, ampliamente consumida tanto en el ámbito doméstico como en establecimientos de restauración. Habitualmente se sirve como plato principal y es reconocida internacionalmente por su sencillez, su valor gastronómico y la combinación equilibrada de sabores que ofrece. Su popularidad la ha convertido en una de las recetas de pasta más apreciadas y difundidas en todo el mundo.`,
    ingredientes: [
      "160gr espaguetis",
      "150gr guanciale",
      "1 huevo entero",
      "4 yemas de huevo",
      "Pimienta al gusto",
      "Pecorino rallado al gusto",
      "400ml de agua",
      "Aceite de oliva",
    ],
    pasos: [
      {
        descripcion: `Empezaremos por preparar los ingredientes, los que más me gustan de los que se pueden encontrar en casi todos los supermercados son los siguientes, pero si se puede ir a alguna tienda italiana, pues mejor que mejor.`,
        imagen: "img/square-image.jpg",
      },
      {
        descripcion: `Seguiremos poniendo a hervir el agua con un chorro de aceite de oliva y sal, y calentando la sartén con un chorrito de aceite de oliva, después añadimos el guanciale.`,
        imagen: "img/square-image.jpg",
      },
      {
        descripcion: `Mientras se va cocinando el guanciale y se va calentando el agua, añadimos en un bol un huevo entero y 4 yemas`,
        imagen: "img/square-image.jpg",
      },
      {
        descripcion: `Batimos los huevos y las yemas,añadiendo una pizca de pimienta y dos cucharadas soperas de queso rallado, y volvemos a batir todo junto.`,
        imagen: "img/square-image.jpg",
      },
      {
        descripcion: `Paramos el fuego del guanciale cuando veamos que está doradito, y añadimos los espaguetis cuando esté el agua hirviendo`,
        imagen: "img/square-image.jpg",
      },
      {
        descripcion: `Yo siempre hiervo la pasta un minuto menos de lo que indica en el envase, me gusta al dente, pero es cuestión de gustos. Antes de sacar los espaguetis, añadimos a la sartén con el guanciale un cucharón del agua de los espaguetis.`,
        imagen: "img/square-image.jpg",
      },
      {
        descripcion: `Escurrimos los espaguetis,nunca enjuagamos, muy importante! Añadimos los espaguetis a la sartén con el guanciale y a fuego muy muy lento, si no, se nos cuajará el huevo, esto es muy importante también. Añadimos la mezcla de huevo pimienta y queso, apagamos el fuego, y removemos rápido sin que el huevo se cuaje,y servimos.`,
        imagen: "img/square-image.jpg",
      },
      {
        descripcion: `Añadimos queso rallado y pimienta al gusto, y a disfrutar de esta deliciosa carbonara.`,
        imagen: "img/square-image.jpg",
      },
    ],
  },
];
