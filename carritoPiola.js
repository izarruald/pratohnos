// Variables
const baseDeDatos = [
    {
        id: 1,
        producto: "Ñoquis de papa con salsa fileto" ,
        nombre:"Ñoquis",
        imagen: "./assets/img/ñoquisSalsa.jpg" ,
        precio: 125
    },
    {
        id: 2,
        producto: "Fideos de verdura con salsa bolognesa" ,
        nombre:"Fideos",
        imagen: "./assets/img/fideosVerdes.jpg",
        precio: 70
    },
    {
        id: 3, 
        producto: "Ravioles de ricota con salsa bolognesa",
        nombre:"Ravioles",
        imagen: "./assets/img/raviolesSalsa.jpg", 
        precio: 50
    },
    {
        id: 4, 
        producto: "Agnolotis de jamon y queso con salsa bolognesa" ,
        nombre:"Agnolotis",
        imagen: "./assets/img/pastas5.jpg ", 
        precio: 100
    }

];

let carrito = [];
let total = 0;
const DOMitems = document.querySelector('#items');
const DOMcarrito = document.querySelector('#carrito');
const DOMtotal = document.querySelector('#total');
const DOMbotonVaciar = document.querySelector('#boton-vaciar');

// Funciones

/**
 * Dibuja todos los productos a partir de la base de datos. No confundir con el carrito
 */
function renderizarProductos() {
    baseDeDatos.forEach((info) => {
        // Estructura
        const miNodo = document.createElement('div');
        miNodo.classList.add('card', 'col-sm-4');
        // Body
        const miNodoCardBody = document.createElement('div');
        miNodoCardBody.classList.add('card-body');
        // Titulo
        const miNodoTitle = document.createElement('h5');
        miNodoTitle.classList.add('card-title');
        miNodoTitle.textContent = info.nombre;
        // Imagen
        const miNodoImagen = document.createElement('img');
        miNodoImagen.classList.add('img-fluid');
        miNodoImagen.setAttribute('src', info.imagen);
        // Precio
        const miNodoPrecio = document.createElement('p');
        miNodoPrecio.classList.add('card-text');
        miNodoPrecio.textContent = info.precio + '$';
        // Boton 
        const miNodoBoton = document.createElement('button');
        miNodoBoton.classList.add('btn', 'btn-primary');
        miNodoBoton.textContent = '+';
        miNodoBoton.setAttribute('marcador', info.id);
        miNodoBoton.addEventListener('click', anyadirProductoAlCarrito);
        // Insertamos
        miNodoCardBody.appendChild(miNodoImagen);
        miNodoCardBody.appendChild(miNodoTitle);
        miNodoCardBody.appendChild(miNodoPrecio);
        miNodoCardBody.appendChild(miNodoBoton);
        miNodo.appendChild(miNodoCardBody);
        DOMitems.appendChild(miNodo);
    });
}

/**
 * Evento para añadir un producto al carrito de la compra
 */
function anyadirProductoAlCarrito(evento) {
    // Anyadimos el Nodo a nuestro carrito
    carrito.push(evento.target.getAttribute('marcador'))
    // Calculo el total
    calcularTotal();
    // Actualizamos el carrito 
    renderizarCarrito();
}

/**
 * Dibuja todos los productos guardados en el carrito
 */
function renderizarCarrito() {
    // Vaciamos todo el html
    DOMcarrito.textContent = '';
    // Quitamos los duplicados
    const carritoSinDuplicados = [...new Set(carrito)];
    // Generamos los Nodos a partir de carrito
    carritoSinDuplicados.forEach((item) => {
        // Obtenemos el item que necesitamos de la variable base de datos
        const miItem = baseDeDatos.filter((itemBaseDatos) => {
            // ¿Coincide las id? Solo puede existir un caso
            return itemBaseDatos.id === parseInt(item);
        });
        // Cuenta el número de veces que se repite el producto
        const numeroUnidadesItem = carrito.reduce((total, itemId) => {
            // ¿Coincide las id? Incremento el contador, en caso contrario no mantengo
            return itemId === item ? total += 1 : total;
        }, 0);
        // Creamos el nodo del item del carrito
        const miNodo = document.createElement('li');
        miNodo.classList.add('list-group-item', 'text-right', 'mx-2');
        miNodo.textContent = `${numeroUnidadesItem} x ${miItem[0].nombre} - ${miItem[0].precio}$`;
        // Boton de borrar
        const miBoton = document.createElement('button');
        miBoton.classList.add('btn', 'btn-danger', 'mx-5');
        miBoton.textContent = 'X';
        miBoton.style.marginLeft = '1rem';
        miBoton.dataset.item = item;
        miBoton.addEventListener('click', borrarItemCarrito);
        // Mezclamos nodos (Lo mandamos)
        miNodo.appendChild(miBoton);
        DOMcarrito.appendChild(miNodo);
    });
}

/**
 * Evento para borrar un elemento del carrito
 */
function borrarItemCarrito(evento) {
    // Obtenemos el producto ID que hay en el boton pulsado
    const id = evento.target.dataset.item;
    // Borramos todos los productos
    carrito = carrito.filter((carritoId) => {
        return carritoId !== id;
    });
    // volvemos a renderizar
    renderizarCarrito();
    // Calculamos de nuevo el precio
    calcularTotal();
}

/**
 * Calcula el precio total teniendo en cuenta los productos repetidos
 */
function calcularTotal() {
    // Limpiamos precio anterior
    total = 0;
    // Recorremos el array del carrito
    carrito.forEach((item) => {
        // De cada elemento obtenemos su precio
        const miItem = baseDeDatos.filter((itemBaseDatos) => {
            return itemBaseDatos.id === parseInt(item);
        });
        total = total + miItem[0].precio;
    });
    // Renderizamos el precio en el HTML
    DOMtotal.textContent = total.toFixed(2);
}

/**
 * Varia el carrito y vuelve a dibujarlo
 */
function vaciarCarrito() {
    // Limpiamos los productos guardados
    carrito = [];
    // Renderizamos los cambios
    renderizarCarrito();
    calcularTotal();
}

// Eventos
DOMbotonVaciar.addEventListener('click', vaciarCarrito);

// Inicio
renderizarProductos();


/* 
<div class="row">
<!-- Elementos generados a partir del JSON -->
<main id="items" class="col-lg-12 row"></main>
<!-- Carrito -->
<aside class="col-lg-12">
    <h2>Carrito</h2>
    <!-- Elementos del carrito -->
    <ul id="carrito" class="list-group"></ul>
    <hr>
    <!-- Precio total -->
    <p class="text-right">Total: <span id="total"></span>&euro;</p>
    <button id="boton-vaciar" class="btn btn-danger">Vaciar</button>
</aside>
</div> */

const calculateTotal = () => {
    let num = 0;
    cart.forEach((elem) => {num += elem.quantity * elem.item.precio;});
    return num;
};










//CARRITO PROPIO
 //JQUERY EVENTOS
 let carrito = [];

 $(document).ready(function() {
     //cambios en el dom
     $("#boton").prepend("<button class='btn btn-warning' id='btnSuscrip'>Suscribirse a Prato</button>"); //poner como primer hijo
     $("#btnSuscrip").click(function() {
         suscribir();
     });
     //llamada a renderizar
     renderizarProductos();
     //selector y ordenamiento
     $("#miSeleccion option[value='pordefecto']").attr("selected", true); //selected es el valor de por defecto (cada vez que se cargue la page sera este el valor por defecto)
     $("#miSeleccion").change(function() {
         ordenar();
     });
 });
 
 
 function renderizarProductos() {
     for (const producto of productos) {
         $(".milista").append(`<li class="list-group-item cards borderBlanco" id='cardsId'><h3 class='boxmodCentrar'> ${producto.nombre}</h3>
         <p class='display'>ID: ${producto.id}</p>
         <img src=${producto.foto} width="250" height="200">
         <p class='paddingT'> Producto: ${producto.producto}</p>
         <b class='paddingB'> $ ${producto.precio}</b>
         <button class='btn btn-danger boxmodCentrar' id='btn${producto.id}'>Comprar</button>
         </li>`);//CREA BTN CON CLASS Y ID
         //Eventos para cada boton
         $(`#btn${producto.id}`).on('click', function() {
             agregarAlCarrito(producto); //mando completo el objeto literal
             Swal.fire(
                 'Nuevo producto agrregado al carrito',
                 $('#btn').val(),
                 'success'
             )
         });
     }
 }
 
 
 function calcularTotalCarrito(){
     let total = 0;
     for (const producto of carrito) {
         total += producto.precio;
         console.log(total);
     }
     $(".carritoContador").append(`<h3>${total}</h3>`)
 }
 
 calcularTotalCarrito()
 
 
 
 function ordenar() {
     let seleccion = $("#miSeleccion").val(); //para tomar el valor del selector
     console.log(seleccion);
     //sort = ordena los elementos
     if (seleccion == "menor") {
         //ordenamos el array de productos por menor precio
         productos.sort(function(a, b) { return a.precio - b.precio });
     } else if (seleccion == "mayor") {
         //ordenamos el array de productos por mayor precio
         productos.sort(function(a, b) { return b.precio - a.precio });
     } else if (seleccion == "alfabetico") {
         productos.sort(function(a, b) {
             return a.producto.localeCompare(b.producto);//hace que quede por orden alfabetico
         });
     }
     $("li").remove();//borrar los li que ya teniamos, se renderizan nuevamente (averiguar bien la funcion del remove)
     renderizarProductos();//para que los vuelva a renderizar
     
 } 
 
 
  function suscribir() {
     $("#suscripcion").append(`
     <h4>Suscribite a Prato para obtener mejores descuentos</h4>
     <form id="miFormulario">
     <input type="text" id="email" placeholder="Aqui tu email">
     <button type="submit" class="btn btn-warning">Suscribite ahora</button>
     </form>`);
 
     //evento submit
     $("#miFormulario").submit(function(e) {
         //prevenir el comportamiento por defecto
         e.preventDefault();
         //aca una buena validacion
         Swal.fire(
             'Nueva suscripcion',
             $("#email").val(),
             'success'
         )
         //una ves suscripto vacia todo el espacio de subscripcion
         $("#suscripcion").empty();
     });
 } 
 
 
 function agregarAlCarrito(productoNuevo) {
     carrito.push(productoNuevo);
     console.log(carrito);
     muestraCarrito ()
     //sweet alert
     Swal.fire(
         'Nuevo producto agregado al carrito',
         productoNuevo.producto,
         'success'
     );
     
     localStorage.setItem("miCarrito", JSON.stringify(carrito));
     console.log(localStorage.getItem('miCarrito'))
 }
 
 
 
 
 function muestraCarrito (){
 /*     carrito.forEach(element => {$("#carrito").append(`
     <li>Producto:${element.producto} </li>`);}) */
     for (const element of carrito){$("#carrito").append(`
     <li>Producto:${element.producto} </li>`); 
     }
 }
