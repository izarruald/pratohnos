//PRODUCTOS
const productos = [
    { 
        id: 1, 
        producto: "Ñoquis de papa con salsa fileto" ,
        nombre:"Ñoquis",
        foto: "./assets/img/ñoquisSalsa.jpg" ,
        precio: 125 
    },
    { 
        id: 2, 
        producto: "Fideos de verdura con salsa bolognesa" ,
        nombre:"Fideos",
        foto: "./assets/img/fideosVerdes.jpg", 
        precio: 70
    },
    {
        id: 3, 
        producto: "Ravioles de ricota con salsa bolognesa",
        nombre:"Ravioles",
        foto: "./assets/img/raviolesSalsa.jpg", 
        precio: 50 
    },
    {   
        id: 4, 
        producto: "Agnolotis de jamon y queso con salsa bolognesa" ,
        nombre:"Agnolotis",
        foto: "./assets/img/pastas5.jpg ", 
        precio: 100
    },
    { 
        id: 5, 
        producto: "Empanada de carne" ,
        nombre:"Empanada",
        foto: "./assets/img/empanadas.jpg", 
        precio: 90 
    },
    { 
        id: 6, 
        producto: "Cervezas Importadas" ,
        nombre:"Cerveza",
        foto: "./assets/img/cervezas.jpg", 
        precio: 700
    }
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

