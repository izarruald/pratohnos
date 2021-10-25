
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

//diapo35
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
elegido.push(prompt("Ingrese el postre seleccionado")); /* AGREGO UNA NOTA MAS */


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


