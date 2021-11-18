//JQUERY EVENTOS
let carrito = [];

$(document).ready(function() {
    //cambios en el dom
    $("#fila_prueba").css({ background: "red", color: "white" });
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


function renderizarProductos() {
    for (const producto of productos) {
        $(".milista").append(`<li class="list-group-item cards" id='cardsId'><h3 class='boxmodCentrar'> ${producto.nombre}</h3>
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


function agregarAlCarrito(productoNuevo) {
    carrito.push(productoNuevo);
    console.log(carrito);
    //sweet alert
    Swal.fire(
        'Nuevo producto agregado al carrito',
        productoNuevo.producto,
        'success'
    );
    localStorage.setItem("miCarrito", JSON.stringify(carrito));
}





//PRODUCTOS
const productos = [{ id: 1, producto: "Ñoquis de papa con salsa fileto" ,nombre:"Ñoquis",foto: "./assets/img/ñoquisSalsa.jpg" ,precio: 125 },
{ id: 2, producto: "Fideos de verdura con salsa bolognesa" ,nombre:"Fideos",foto: "./assets/img/fideosVerdes.jpg", precio: 70 },
{ id: 3, producto: "Ravioles de ricota con salsa bolognesa",nombre:"Ravioles",foto: "./assets/img/raviolesSalsa.jpg", precio: 50 },
{ id: 4, producto: "Agnolotis de jamon y queso con salsa bolognesa" ,nombre:"Agnolotis",foto: "./assets/img/pastas5.jpg ", precio: 100 }
]; 

//tabla con DOM
let tabla = document.createElement("table");
tabla.setAttribute("class", "table table-striped");
let tablaBody = document.createElement("tbody");

for (const producto of productos) {
    //crear las filas con sus celdas
    let fila = document.createElement("tr");
    //plantillas literales
    fila.innerHTML = `<td> ${producto.id}</td>
    <td>${producto.producto}</td>
    <td><b>$ ${producto.precio}</b></td>`;
    
    //guarda la final
    tablaBody.appendChild(fila);
}


// tabla va a ser el padre de tablaBody
tabla.appendChild(tablaBody); 
//agrega la tabla al documento por el ID "inferior"
document.getElementById("inferior").appendChild(tabla);


//Evento onchange desde html (OPCION 3, desde html)
//ONCHANGE (detecta cuando se pasa de un campo a otro)
function activarValidador(entrada) {
    let edadInput = entrada.value;
    if (edadInput < 1 || edadInput > 100) {//Debajo de 1 y superior a 100
        alert("Edad invalida!");
    }
}


$(document).ready(function(){
    $(".btn1").click(function(){
        $("#inferior")
        .slideUp(2000);// se desplaza hacia abajo con una duracion de 2s
    });
    $(".btn2").click(function(){
      $("#inferior").slideDown(2000);
    });
  });

//AJAX
//Llamada GET
function obtenerDatos() {
    //URL de datos
    const URLGET = "http://hp-api.herokuapp.com/api/characters/house/gryffindor";
    //.DONE: cuando se termine de obtener ese Get se activa la funcion callback. function callback que recibe un resultado y un estado ()
    $.get(URLGET).done(function(resultado, estado) {
        //manera de ver la obtencion de datos (succes = acceso)
        console.log("El estado que retorna la API es: " + estado);
        if (estado == "success") {
            //solo los libros (resultado.books)
            let libros = resultado.slice(0,3);
            //por cada libro de libros 
            libros.forEach(libro => {
                //libros = ID de index
                //ForEach                   
                $("#libros").append("<tr><td>" + libro.name + "</td><td>" + libro.house + "</td><td><img   width='80' height='100' src=" + libro.image + "></td></tr>");
            });
        }
    });
}  

obtenerDatos();

$(document).ready(function(){
    $(".boton1").click(function(){
        $("#tablaHarry").slideUp(3000);// se desplaza hacia abajo con una duracion de 2s
    });
    $(".boton2").click(function(){
      $("#tablaHarry").slideDown(500);
    });
  });