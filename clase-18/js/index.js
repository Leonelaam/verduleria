const libros = [{
    titulo: "Cien años de soledad",
    autor:"Gabriel Garcia Marquez",
    precio:1000,
    url: "https://www.lifeder.com/wp-content/uploads/2017/12/100-a%C3%B1os-de-soledad-150x150lifederimagen.jpg"
},{
    titulo: "El señor de las moscas",
    autor:"William Golding",
    precio:800,
    url: "https://www.lifeder.com/wp-content/uploads/2017/12/El-se%C3%B1or-de-las-moscaslifederimagen.jpg"
},{
    titulo: "Viaje al centro de la tierra",
    autor:"Julio Verne",
    precio:600,
    url: "https://www.lifeder.com/wp-content/uploads/2017/12/Viaje-al-centro-de-la-tierra-150x150lifederimagen.jpg"
},
{
    titulo: "Don Quijote de la Mancha",
    autor:"Miguel de Cervantes",
    precio:1000,
    url: "https://www.lifeder.com/wp-content/uploads/2017/12/Don-Quijote-de-la-Mancha-150x150lifederimagen.jpg"
},
{
    titulo: "Moby Dick",
    autor:"Herman Melville",
    precio:400,
    url: "https://www.lifeder.com/wp-content/uploads/2017/12/Moby-Dick-150x150lifederimagen.jpg"
},
{
    titulo: "El viejo y el mar",
    autor:"Ernest Hemingway",
    precio:800,
    url: "https://www.lifeder.com/wp-content/uploads/2017/12/El-viejo-y-el-mar-150x150lifederimagen.jpg"
},
{
    titulo: "Veinte mil leguas de viaje submarino",
    autor:"Julio Verne",
    precio:400,
    url: "https://www.lifeder.com/wp-content/uploads/2017/12/veinte-mil-leguaslifederimagen.jpg"
}];

//Tu codigo JS va acá

// recorro el arreglo y retorno resultado de libros filtrados por autor
function filtrarAutor(arr, autor) {
    const resultado = arr.filter((item) => item.autor === autor);
    return resultado;
}
// obtengo el elemento

function mostrarFiltrados() {
    let valueAutores = document.getElementById("autor");
    let contenedor = document.getElementById("libros");
    // creo una variable que contenga la funcion filtrar autor con 2 parametros
    const arrayLibros = filtrarAutor(libros, valueAutores.value);
    // console.log(arrayLibros)
    contenedor.innerHTML = "";

    arrayLibros.forEach((libro)=>{
    contenedor.innerHTML += 
    `<div class="card" style="width: 18rem;">
    <div class="card-body">
    <img src="${libro.url}" class="card-img-top" alt="...">
    </div>
    <div class="card-body">
      <p class="card-text">Autora: ${libro.autor}</p>
      <p class="card-text">Autora: ${libro.precio}</p>
    </div>
  </div>`
})
    
}






