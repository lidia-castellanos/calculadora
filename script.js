function cargarBotones() {
    console.log("aqui");
    let numeros = ["7", "8", "9", "4", "5", "6", "1", "2", "3", "+-", "0", "."];
    let simbolos = ["+", "-", "x", "/", "CE", "C","=", "<-"];
    let gridNumeros = document.getElementById("gridNumeros");
    let gridSimbolos=document.getElementById("simbolos");

    for (let i = 0; i < numeros.length; i++) {

        let btn = document.createElement("button");
        btn.innerText = numeros[i];
        btn.className="botones";
        gridNumeros.appendChild(btn);

    }
    for (let i = 0; i < simbolos.length; i++) {

        let btn = document.createElement("button");
        btn.className="botones";
        btn.innerText = simbolos[i];
        gridSimbolos.appendChild(btn);

    }
    


}

