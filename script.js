
//ARRAYS o LISTAS
const listaDeProductos = [ "Menu del día", "1 Ñoquis de papa con salsa fileto ($125)", " 2 Fideos de verdura con salsa bolognesa ($70)", "3 Ravioles de ricota con salsa bolognesa ($50)", "4 Agnolotis de jamon y queso con salsa bolognesa ($100)"];
alert(listaDeProductos.join(" - "))

for (let i = 0; i < listaDeProductos.length; i++) //LENGTH CUENTA CANTIDAD DE ELEMENTOS UNO ABAJO DEL OTRO  
{
    console.log(listaDeProductos[i]);
}
console.log(listaDeProductos) 



//console.log(listaDeCompras[3]);
let listaAString = listaDeProductos.toString(); //TODO EN UN SOLO toSTRING 
console.log(listaAString); 
 let productoElegido = parseInt(prompt("Seleccione el numero de producto")); 

/* //seleccion de producto y agregado a al array
let relleno = prompt("ingrese el relleno de su pasta")
let salsaSeleccionada = prompt("Selecciones una salsa para su pasta"); */

const productos = [{ id: 1, producto: "Ñoquis", salsa : "fileto", relleno : "Papa" , precio: 125 },
    { id: 2, producto: "Fideo", salsa : "bolognesa", relleno : "Verdura" , precio: 70 },
    { id: 3, producto: "Ravioles",salsa : "bolognesa", relleno : "Ricota" , precio: 50 },
    { id: 4, producto: "Agnolotis", salsa : "bolognesa", relleno : "Jamon y queso" , precio: 100 }
];


//FILTRER
const elegido = productos.filter(producto => producto.id == productoElegido);
console.log(elegido); 
/* 
alert("Postres: Flan - Frutilla con crema - Budin de pan")
//PUSH
elegido.push(prompt("Ingrese el postre seleccionado")); // AGREGO UNA NOTA MAS  */


let descuento = prompt("Usted tiene el descuento del 10% ?");

//Correciones (elegido[0]) y (descuento.toLowerCase() == "si")
if (descuento.toLowerCase() == "si" ){
    alert("El precio final con descuento será de: " + (elegido[0].precio - (elegido[0].precio / 10)))
} else {
    alert("No tiene descuento, su precio final es de: " + elegido[0].precio)
}
/* calcularIva(elegido[0].precio)
//Agregado de function
function calcularIva (precioSinIva){
    let precioConIva = precioSinIva * 1.21;
    alert("El precio con IVA agregado es de: " + precioConIva)
}  */


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
    <td>${producto.salsa}</td>
    <td>${producto.relleno}</td>
    <td><b>$ ${producto.precio}</b></td>`;
    //guarda la final
    tablaBody.appendChild(fila);
}


// tabla va a ser el padre de tablaBody
tabla.appendChild(tablaBody); 
//agrega la tabla al documento por el ID "inferior"
document.getElementById("inferior").appendChild(tabla);


/* for (const producto of productos) {
    let contenedor = document.createElement("div");
    //Definimos el innerHTML del elemento con una plantilla de texto
    contenedor.innerHTML = `<h3> ID: ${producto.id}</h3>
                            <p>  Producto: ${producto.producto}</p>
                            <b> $ ${producto.precio}</b>`;
    document.body.appendChild(contenedor);
} */

/* //UNICA FORMA QUE ME APARECIO EN LA PAGINA
//tabla con DOM
let tabla = document.createElement("table");
tabla.setAttribute("class", "table table-striped");
let tablaBody = document.createElement("tbody");

for (const producto of productos) {
    let contenedor = document.createElement("tr");
    //Definimos el innerHTML del elemento con una plantilla de texto
    contenedor.innerHTML = `<td><h3> ID: ${producto.id}</h3></td>
                            <td><p>  Producto: ${producto.producto}</p></td>
                            <td><b> $ ${producto.precio}</b></td>`;
    document.getElementById("tabla").appendChild(contenedor);
}

tabla.appendChild(tablaBody);
document.body.appendChild(tabla);*/


//TAG ETIQUETA
let parrafos = document.getElementsByTagName("p");
let ingresadoPrompt = prompt("Ingrese su nombre aqui")
parrafos[2].innerText = "Hola " + ingresadoPrompt + ", bienvenido/a"; 

//EVENTOS DOM
//OPCION 1
/* let boton = document.getElementById("miBoton");
boton.addEventListener("click", interactuar); */

//OPCION 2
let boton = document.getElementById("miBoton");
//boton.onclick = () => { console.log("Click registrado!"); }
boton.addEventListener ("click", () => console.log("click"))
//evento donde pasas el mouse
boton.onmouseover = () => { console.log("No me toques"); } 



function interactuar(){
    let nombre = prompt("ingrese tu nombre");
    let fecha = new Date().toLocaleDateString();
    alert("Hola " + nombre + " hoy es " + fecha);
} 

//Evento de teclado desde html detectando el ENTER
function capturarEnter(evento) {
    //codigo 13 = enter
    if (evento.which == 13 || evento.keyCode == 13) {
        alert("Presionaste ENTER");
        interactuar();
    }
}
//Sirve para detectar la tecla presionada, en este caso el enter

//Evento onchange desde html (OPCION 3, desde html)
//ONCHANGE (detecta cuando se pasa de un campo a otro)
function activarValidador(entrada) {
    let edadInput = entrada.value;
    if (edadInput < 1 || edadInput > 100) {//Debajo de 1 y superior a 100
        alert("Edad invalida!");
    }
}