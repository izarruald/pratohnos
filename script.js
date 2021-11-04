
//TAG ETIQUETA
let parrafos = document.getElementsByTagName("p");
let ingresadoPrompt = prompt("Ingrese su nombre aqui")
parrafos[2].innerText = "Hola " + ingresadoPrompt + ", bienvenido/a"; 

//ARRAYS o LISTAS
const listaDeProductos = [ "Menu del día", "1 Ñoquis de papa con salsa fileto ($125)", " 2 Fideos de verdura con salsa bolognesa ($70)", "3 Ravioles de ricota con salsa bolognesa ($50)", "4 Agnolotis de jamon y queso con salsa bolognesa ($100)"];
alert(listaDeProductos.join(" - "))

for (let i = 0; i < listaDeProductos.length; i++) //LENGTH CUENTA CANTIDAD DE ELEMENTOS UNO ABAJO DEL OTRO  
{
    console.log(listaDeProductos[i]);
}
console.log(listaDeProductos) 


let listaAString = listaDeProductos.toString(); //TODO EN UN SOLO toSTRING 
console.log(listaAString); 
 let productoElegido = parseInt(prompt("Seleccione el numero de producto")); 

/* const productos = [{ id: 1, producto: "Ñoquis", salsa : "fileto", relleno : "Papa" , precio: 125 },
    { id: 2, producto: "Fideo", salsa : "bolognesa", relleno : "Verdura" , precio: 70 },
    { id: 3, producto: "Ravioles",salsa : "bolognesa", relleno : "Ricota" , precio: 50 },
    { id: 4, producto: "Agnolotis", salsa : "bolognesa", relleno : "Jamon y queso" , precio: 100 }
]; */
const productos = [{ id: 1, producto: "Ñoquis de papa con salsa fileto" , precio: 125 },
    { id: 2, producto: "Fideos de verdura con salsa bolognesa" , precio: 70 },
    { id: 3, producto: "Ravioles de ricota con salsa bolognesa", precio: 50 },
    { id: 4, producto: "Agnolotis de jamon y queso con salsa bolognesa" , precio: 100 }
];


//FILTRER
const elegido = productos.filter(producto => producto.id == productoElegido);
console.log(elegido); 


let descuento = prompt("Ingrese cupon de descuento (10%)");

//Correciones (elegido[0]) y (descuento.toLowerCase() == "si")
if (descuento == "Prato123" || "prato123" || "PRATO123" ){
    alert("El precio final con descuento será de: " + (elegido[0].precio - (elegido[0].precio / 10)))
} else {
    alert("No tiene descuento, su precio final es de: " + elegido[0].precio)
}

//DOM
let pepe = document.getElementsByTagName("p");
let numCuotas = parseInt(prompt("Ingrese cantida de cuotas"))
let productoJson = "Producto elegido: " + elegido[0].producto; 
let precioJson = "Precio por cuota: " + (elegido[0].precio / numCuotas).toFixed(2);
const AJSONProducto = JSON.stringify(productoJson); 
const AJSONPrecio = JSON.stringify(precioJson); 
pepe[4].innerText = JSON.parse(AJSONProducto);
pepe[5].innerText = JSON.parse(AJSONPrecio);  

//local storage
localStorage.setItem ("Producto elegido", AJSONProducto);
localStorage.setItem ("Precio por cuota", AJSONPrecio);




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
/*  <td>${producto.salsa}</td>
    <td>${producto.relleno}</td> */
    
    //guarda la final
    tablaBody.appendChild(fila);
}


// tabla va a ser el padre de tablaBody
tabla.appendChild(tablaBody); 
//agrega la tabla al documento por el ID "inferior"
document.getElementById("inferior").appendChild(tabla);






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

//Evento de teclado desde html detectando el ENTER (Sirve para detectar la tecla presionada, en este caso el enter)
function capturarEnter(evento) {
    //codigo 13 = enter
    if (evento.which == 13 || evento.keyCode == 13) {
        evento.preventDefault()
        alert("Presionaste ENTER");
    }
}

//Evento onchange desde html (OPCION 3, desde html)
//ONCHANGE (detecta cuando se pasa de un campo a otro)
function activarValidador(entrada) {
    let edadInput = entrada.value;
    if (edadInput < 1 || edadInput > 100) {//Debajo de 1 y superior a 100
        alert("Edad invalida!");
    }
}