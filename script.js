function cargarBotones() {

    let numeros = ["7", "8", "9", "4", "5", "6", "1", "2", "3", "+-", "0", "."];
    let simbolos = ["CE", "C", "+", "-", "x", "/", "=",];
    let gridNumeros = document.getElementById("gridNumeros");
    let gridSimbolos = document.getElementById("simbolos");
    let valorInputBox;

    for (let i = 0; i < numeros.length; i++) {

        let btn = document.createElement("button");
        btn.innerText = numeros[i];
        btn.className = "botones";

        gridNumeros.appendChild(btn);
        btn.onclick = function mostrarBoton() {
            let textBox = document.getElementById("textBox");
            
            



        }
    }
    for (let i = 0; i < simbolos.length; i++) {

        let btn = document.createElement("button");
        btn.className = "botonesSim";
        btn.innerText = simbolos[i];
        gridSimbolos.appendChild(btn);


    }







}

