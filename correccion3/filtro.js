// Tenemos un li de productos

const productos = [
  {nombre: "Zapato negro", tipo: "zapato", color: "negro", img: "./taco-negro.jpg"},
  {nombre: "Zapato azul", tipo: "zapato", color: "azul", img: "./taco-azul.jpg"},
  {nombre: "Bota negra", tipo: "bota", color: "negro", img: "./bota-negra.jpg"},
  {nombre: "Bota azul", tipo: "bota", color: "azul", img: "./bota-azul.jpg"},
  {nombre: "Zapato rojo", tipo: "zapato", color: "rojo", img: "./zapato-rojo.jpg"}
]

//es getElementById
const lista = document.getElementById("lista-de-productos")
//input no lleva punto
const $input = document.querySelector('input');

for (let i = 0; i < productos.length; i++) {
  let d = document.createElement("div")
  d.classList.add("producto")

  let titulo = document.createElement("p")
  titulo.classList.add("titulo")
  titulo.textContent = productos[i].nombre
  
  let imagen = document.createElement("img");
  imagen.setAttribute('src', productos[i].img);

  d.appendChild(titulo)
  d.appendChild(imagen)

  lista.appendChild(d)
}

//displayProductos no se utiliza
//displayProductos(productos)
const botonDeFiltro = document.querySelector("button");

botonDeFiltro.onclick = function() {
  while (lista.firstChild) {
    lista.removeChild(lista.firstChild);
  }

  const texto = $input.value;
  console.log(texto);
  const productosFiltrados = filtrado(productos, texto );

  for (let i = 0; i < productosFiltrados.length; i++) {
    let d = document.createElement("div")
    d.classList.add("producto")
  
    let titulo = document.createElement("p")
    titulo.classList.add("titulo")
    titulo.textContent = productosFiltrados[i].nombre
    
    let imagen = document.createElement("img");
    imagen.setAttribute('src', productosFiltrados[i].img);
  
    d.appendChild(titulo)
    d.appendChild(imagen)
  
    lista.appendChild(d)
  }
}

const filtrado = (productos = [], texto) => {
  return productos.filter(item => item.tipo.includes(texto) || item.color.includes(texto));
}  