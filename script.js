let resultado = 0;
let numeroFormado;
let numeroFinal;
let contadorSimbolos = "";
let numero1 = 0;
let numero2 = 0;
let operacionAnterior;
let valorDisplay = document.getElementById("textBox");
let resultadoDisplay = document.getElementById("resultado");



document.addEventListener("click", function (event) {


    switch (event.target.value) {



        case "+":

            sumar();


            break;



        case "-":

            restar();


            break;

        case "=":
            resultadoDisplay.value=resultado;
            break;

        default:
            // console.log(contadorSimbolos);
            break;
    }




});
function sumar() {
    contadorSimbolos += "+";

    resultadoDisplay.value = resultado;
    numeroFormado = valorDisplay.value.split("+");

    let longitud = numeroFormado.length;
    let longitudContador = contadorSimbolos.split("+").length;

    if (contadorSimbolos.split("+") === "-") {
        restar();
    }
    console.log("suma" + contadorSimbolos.split("+"));

    if (longitud === 3 && resultado === 0) {

        numero1 = parseInt(numeroFormado[0]);
        numero2 = parseInt(numeroFormado[1]);
        resultado = numero1 + numero2;

        resultadoDisplay.value = resultado;
    }
    else {
        numero1 = resultado;
        numero2 = parseInt(numeroFormado[longitud - 2]);
        resultado = numero1 + numero2;
        resultadoDisplay.value = resultado;
    }
}

function restar() {

    contadorSimbolos += "-";

    resultadoDisplay.value = resultado;
    numeroFormado = valorDisplay.value.split("-");

    let longitud2 = numeroFormado.length;
    console.log("resta: " + contadorSimbolos.split("-"));

    if (longitud2 === 3 && resultado === 0) {

        numero1 = parseInt(numeroFormado[0]);
        numero2 = parseInt(numeroFormado[1]);

        resultado = numero1 - numero2;

        resultadoDisplay.value = resultado;
    }
    else if (longitud2 > 2) {
        numero1 = resultado;
        numero2 = parseInt(numeroFormado[longitud2 - 2]);
        resultado = numero1 - numero2;

        resultadoDisplay.value = resultado;
    }


}
function verificarsimbolos() {
    console.log(numeroFormado);
}





