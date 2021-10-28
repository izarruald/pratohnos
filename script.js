
//ARRAYS o LISTAS
const listaDeProductos = ["1 Ñoquis", " 2 Fideos", "3 Ravioles", "4 Agnolotis"];
alert(listaDeProductos.join("  "))

for (let i = 0; i < listaDeProductos.length; i++) /* LENGTH CUENTA CANTIDAD DE ELEMENTOS UNO ABAJO DEL OTRO */ {
    console.log(listaDeProductos[i]);
}
console.log(listaDeProductos)



//console.log(listaDeCompras[3]);
/* let listaAString = listaDeProductos.toString(); /* TODO EN UN SOLO toSTRING 
console.log(listaAString); */
let productoElegido = parseInt(prompt("Seleccione el numero de producto")); 

//seleccion de producto y agregado a al array
let relleno = prompt("ingrese el relleno de su pasta")
let salsaSeleccionada = prompt("Selecciones una salsa para su pasta");

const productos = [{ id: 1, producto: "Ñoquis", salsa : salsaSeleccionada, relleno : relleno , precio: 125 },
    { id: 2, producto: "Fideo", salsa : salsaSeleccionada, relleno : relleno , precio: 70 },
    { id: 3, producto: "Ravioles",salsa : salsaSeleccionada, relleno : relleno , precio: 50 },
    { id: 4, producto: "Agnolotis", salsa : salsaSeleccionada, relleno : relleno , precio: 100 }
];


//FILTRER
const elegido = productos.filter(producto => producto.id == productoElegido);
console.log(elegido); 
alert("Postres: Flan - Frutilla con crema - Budin de pan")
//PUSH
elegido.push(prompt("Ingrese el postre seleccionado")); // AGREGO UNA NOTA MAS 


let descuento = prompt("Usted tiene el descuento del 10% ?");

//Correciones (elegido[0]) y (descuento.toLowerCase() == "si")
if (descuento.toLowerCase() == "si" ){
    alert("El precio final con descuento será de: " + (elegido[0].precio - (elegido[0].precio / 10)))
} else {
    alert("No tiene descuento, su precio final es de: " + elegido[0].precio)
}
calcularIva(elegido[0].precio)
//Agregado de function
function calcularIva (precioSinIva){
    let precioConIva = precioSinIva * 1.21;
    alert("El precio con IVA agregado es de: " + precioConIva)
}

/* //EJERCICIO TUTOR
let encabezado = ["#","First", "Last", "Handle"]
​
let infoBody = [{id: 1, name: "Mark", surname: "Otto", nick: "@mdo"},
{id: 2, name: "Jacob", surname: "Thornton", nick: "@fat"},{id: 2, name: "Jacob", surname: "Thornton", nick: "@fat"}]
​
const generarTabla = () => {
​
    let codigo = `<thead>
                    <tr>`
​
    encabezado.forEach((element) => {
        codigo += `<th scope="col">${element}</th>`
    });
​
    codigo += `</tr>
            </thead>
            <tbody>`
​
    infoBody.forEach(pepe => {
        codigo += `<tr>
                    <th scope="row">${pepe.id}</th>
                    <td>${pepe.name}</td>
                    <td>${pepe.surname}</td>
                    <td>${pepe.nick}</td>
                    </tr>`
    });
​
    codigo += `</tbody>`
​
​
    document.getElementById("tabla").innerHTML = codigo
}
​
generarTabla() */

/* for (const producto of productos) {
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
//agrega la tabla al documento class "inferior"
document.getElementsByClassName("inferior").appendChild(tabla);

 */

/* for (const producto of productos) {
    let contenedor = document.createElement("div");
    //Definimos el innerHTML del elemento con una plantilla de texto
    contenedor.innerHTML = `<h3> ID: ${producto.id}</h3>
                            <p>  Producto: ${producto.producto}</p>
                            <b> $ ${producto.precio}</b>`;
    document.body.appendChild(contenedor);
} */

//UNICA FORMA QUE ME APARECIO EN LA PAGINA
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
    tablaBody.appendChild(fila);
}

tabla.appendChild(tablaBody);
document.body.appendChild(tabla);


//TAG ETIQUETA
let parrafos = document.getElementsByTagName("p");
let ingresadoPrompt = prompt("Ingrese su nombre aqui")
parrafos[2].innerText = "Hola " + ingresadoPrompt + ", bienvenido/a";