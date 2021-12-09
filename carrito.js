
//JQUERY
let carrito = [];
//declaro array de productos tiene ambito global y aqui cargaré lo que viene de .json
let productosJSON = [];
let dolarVenta;

$(document).ready(function() {
    //asincronia
    //dentro de obtener Valor Dolar realizo la llamada a obtenerJsonProductos porque son dependientes
    obtenerValorDolar();
    //cambios en el DOM
    $("#fila_prueba");
    $("#boton").prepend(" <a href='./views/contacto.html'><button class='btn btn-warning' id='btnSuscrip'>Suscribir a pratto</button></a>");
   
    $("#btnSuscrip").click(function() {
        suscribir();
    });

    //Selector con ordenamiento
    $("#miSeleccion").on('change', function() {
        ordenar();
    });
    $("#miSeleccion option[value='pordefecto']").attr("selected", true);
});

function renderizarProductos() {
    for (const producto of productosJSON) {
        $(".milista").append(`<li class="col-sm-3 cards borderNegro list-group-item">
        <h3 style="display: none"> ID: ${producto.id} </h3>
        <p class='boxmodCentrar kitchen' > - ${producto.nombre} -</p>
        <img class='boxmodCentrar' src=${producto.foto} width="250" height="200">
        
        <p><strong> $ ${producto.precio} </strong></p>
        <p> Precio en U$ ${(producto.precio/dolarVenta).toFixed(1)}</p>
        <button class='btn btn-danger' id='btn${producto.id}'>Comprar</button>
        </li>`);
        //Evento para cada boton
        $(`#btn${producto.id}`).on('click', function() {
            agregarAlCarrito(producto);
        });
    }
}

class productoCarrito {
    constructor(obj) {
        this.id = obj.id;
        this.foto = obj.foto;
        this.nombre = obj.nombre;
        this.precio = obj.precio;
        this.cantidad = 1;
    }
}

function agregarAlCarrito(productoNuevo) {
    let encontrado = carrito.find(prod => prod.id == productoNuevo.id);
    if (encontrado == undefined) {
        let productoAAgregar = new productoCarrito(productoNuevo);
        carrito.push(productoAAgregar);
        console.log(carrito);
        Swal.fire(
            'Nuevo producto agregado al carro',
            productoNuevo.nombre,
            'success'
        );
        $("#tablabody").append(`
        
        <tr class='sizeTabla' id='fila${productoAAgregar.id}'>
            <td>${productoAAgregar.id}</td>
            <td>${productoAAgregar.nombre}</td>
            <td id='${productoAAgregar.id}'>${productoAAgregar.cantidad}</td>
            <td>$ ${productoAAgregar.precio}</td>
            <td><button class='btn btn-light' id='elimina${productoAAgregar.id}'>🗑️</button>
        </tr>`);
        $(`#elimina${productoAAgregar.id}`).click(function() {
            console.log("ENtre");
            let posEliminar = carrito.findIndex(p => p.id == productoAAgregar.id);
            carrito.splice(posEliminar, 1);
            $(`#fila${productoAAgregar.id}`).remove();
            console.log(carrito);
            $("#gastoTotal").html(`Total: $${calcularMontoTotal()}`);
        });
    } else {
        let posicion = carrito.findIndex(p => p.id == productoNuevo.id);
        //console.log(posicion);
        carrito[posicion].cantidad += 1;
        $(`#${productoNuevo.id}`).html(carrito[posicion].cantidad);
        console.log(carrito);
    }
    $("#gastoTotal").html(`Total: $${calcularMontoTotal()}`);

}

function suscribir() {
    $("#suscripcion").append(`
    <h4>Suscribete a nuestro newsletter</h4>
    <form id="miFormulario">
    <input type="text" id="email" placeholder="Aqui tu email">
    <button type="submit" class="btn btn-warning">Suscribete ahora</button>
    </form>`);
    //EVENTO
    $("#miFormulario").submit(function(e) {
        //prevenir el comportamiento por defecto
        e.preventDefault();
        //aca una buena validacion de los campos
        //Mensaje de confirmacion de suscripcion
        $("#suscripcion").slideUp(3000);
        Swal.fire(
            'Nueva suscripcion realizada',
            $("#email").val(),
            'success'
        )
        $("#suscripcion").empty();
    });
}

function ordenar() {
    let seleccion = $("#miSeleccion").val();
    //console.log(seleccion);
    if (seleccion == "menor") {
        //ordeno el array de productos por precio de menor a mayor
        productosJSON.sort(function(a, b) { return a.precio - b.precio });
    } else if (seleccion == "mayor") {
        //ordeno el array de productos por precio de mayor a menor
        productosJSON.sort(function(a, b) { return b.precio - a.precio });
    } else if (seleccion == "alfabetico") {
        //ordeno por orden alfabetico
        productosJSON.sort(function(a, b) {
            return a.nombre.localeCompare(b.nombre);
        });
    }
    $("li").remove();
    renderizarProductos();
}

//OBTENER DOLAR ACTUALIZADO
const obtenerValorDolar = () => {
    const APIURL = "https://api-dolar-argentina.herokuapp.com/api/dolarblue";
    $.ajax({
        method: "GET",
        url: APIURL,
        success: function(data) {
            $("#fila_prueba").append(`<p class='boxmodCentrar colorBlanco centrarTxt'>Dolar compra:$ <b>${data.compra}</b> Dolar venta:$ <b>${data.venta}</b><p>`);
            console.log(data);
            dolarVenta = data.venta;
            obtenerJsonProductos();
        }
    });
}

const obtenerJsonProductos = () => {
    //GETJSON
    const URLJSON = "productos.json";
    $.getJSON(URLJSON, function(respuesta, estado) {
        if (estado == "success") {
            productosJSON = respuesta;
            console.log(productosJSON);
            renderizarProductos();
        }
    });
}

function calcularMontoTotal() {
    let suma = 0;
    for (const elemento of carrito) {
        suma = suma + (elemento.precio * elemento.cantidad);
    }
    return suma;
}