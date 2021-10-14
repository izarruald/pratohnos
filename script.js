/* //con textos, parametros y retorno
function concatenarTextos(texto1, texto2) {
    let textoConcatenado = texto1 + " " + texto2;
    return textoConcatenado; //Lucía Gomez
}

let nombre = prompt("Ingresa tu nombre"); //Lucía
let apellido = prompt("Ingresa el apellido"); //Gomez
let nombreCompleto = concatenarTextos(nombre, apellido); //Lucía Gomez
alert("Hola " + nombreCompleto);





//CON PARAMETROS
let precioSinDescuento =parseFloat(prompt("ingrese el precio del producto"));
//En cualquier parte del codigo
function calcularDescuento (precio){
    let precioConDescuento = precio - (precio / 10);
    alert("El precio con descuento incluido es: $" + precioConDescuento);
}
calcularDescuento(precioSinDescuento);


//SIN PARAMETROS
let montoTotal = parseFloat(prompt("Ingrese el monto total del producto"));
let numeroDeCuotas = parseFloat(prompt("Ingrese el numero de cuotas a pagar"));
function calcularCuotas () {
    let montoPorCuota = (montoTotal / numeroDeCuotas);
    alert ("Su pago por cuota sera de: $" + montoPorCuota)
}
calcularCuotas () */


function ingresarEntrada(){
    let valor=prompt("Ingrese precio de producto"); //luchuga
    return valor;//Lechuga
}

function procesarEntrada(valor){
    let valorModificado= valor - (valor / 10);//lechuga
    return valorModificado;
}

function mostrarSalida(valorFinal){
    alert("Su valor con descuento es de " + valorFinal);
    let valorCuotas=prompt("cantidad de cuotas")
    let cuotas=valorFinal / valorCuotas;
    alert("su valor por cuota es de " + cuotas)
}

let entrada=ingresarEntrada();//entrada="lechuga"
let entradaModificada= procesarEntrada(entrada);//entradaModificada="el dato que ingresaste es lechuga"
mostrarSalida(entradaModificada);//aqui vemos la salida por el alert
