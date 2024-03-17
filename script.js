let resultado = 0;
let numeroFormado;
let contadorSimbolos = 0;
let numero1 = 0;
let numero2 = 0;
let operacionAnterior;
let valorDisplay = document.getElementById("textBox");
let resultadoDisplay = document.getElementById("resultado");

function hacerOperacion(simbolo) {

}

document.addEventListener("click", function (event) {


    switch (event.target.value) {



        case "+":

            contadorSimbolos++;

            valorDisplay.value += "+";
            numero1 = resultado;
            numeroFormado = valorDisplay.value.split("+");

            if (contadorSimbolos > 1) {
                if (resultado === 0) {



                    numero1 = parseInt(numeroFormado[0]);
                    numero2 = parseInt(numeroFormado[1]);

                    resultado = numero1 + numero2;

                }

                else {
                    numero2 = parseInt(numeroFormado[contadorSimbolos - 1]);
                    resultado = numero1 + numero2;

                }

                resultadoDisplay.value = resultado;

            }
            operacionAnterior = "+";
            console.log(operacionAnterior);
            break;
        case "-":


            contadorSimbolos++;

            valorDisplay.value += "-";
            numero1 = resultado;

            if (contadorSimbolos > 1) {
                numeroFormado = valorDisplay.value.split("-");
                if (resultado === 0) {



                    numero1 = parseInt(numeroFormado[0]);
                    numero2 = parseInt(numeroFormado[1]);

                    resultado = numero1 - numero2;

                }

                else {
                    numero2 = parseInt(numeroFormado[contadorSimbolos - 1]);
                    resultado = numero1 - numero2;

                }

                resultadoDisplay.value = resultado;

            }
            operacionAnterior = "-";
            console.log(operacionAnterior);
            break;

        case "=":

            console.log(operacionAnterior);
            // resultado=0;
            //     for(let i=0; i<numeroFormado.length;i++){
            //         console.log(numeroFormado[i]);
            //         resultado+=parseInt(numeroFormado[i]); 
            //         resultadoDisplay.value=resultado;
            //     }



            break;

        default:
            // console.log(contadorSimbolos);
            break;
    }




});





function validarSimbolos(operacion) {
    if (numeroFormado == "")
        console.log("ingresa un numero");

    else {

        switch (operacion) {
            case "suma":

                numeroFormado += "+";
                mostrarDisplay("+");
                contadorSimbolos++;


                mostrarResultado(resultado);




                break;
        }
    }
}

