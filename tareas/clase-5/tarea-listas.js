const $nodoLista = document.querySelector('ol');
const $nodoResultados = document.querySelector('em');

const $generarLista = document.querySelector("#generar-lista");

const $calcularPromedio = document.querySelector("#calcular-promedio");
const $calcularMasGrande = document.querySelector("#calcular-mas-grande");
const $calcularMasPequenio = document.querySelector("#calcular-mas-pequenio");
const $calcularMasFrecuente = document.querySelector("#calcular-mas-frecuente");

let lista;

$generarLista.onclick = function () {
    const n = Number(document.querySelector("#cantidad-numeros").value)
    if (n === 0) {
        alert("No se ingresó ningún valor");
    }
    else if (n > 0) {
        for (let i = 0; i < n; i++) {
            let numeroAleatorio = Math.round(Math.random() * 100)
            let $nuevoElemento = document.createElement('li');
            let numero = document.createTextNode(numeroAleatorio);
            $nuevoElemento.appendChild(numero);
            $nodoLista.appendChild($nuevoElemento);
        }
        lista = document.querySelectorAll("li");
        return lista;
    }
    else {
        alert("El número ingresado no es válido");
    }
}

function calcularPromedio(lista) {
    let suma = 0;
    for (let i = 0; i < lista.length; i++) {
        suma += Number(lista[i].textContent)
    }
    const promedio = suma / lista.length;
    return promedio;
}

function calcularMasPequenio(lista) {
    let masPequenio = Number(lista[0].textContent);
    for (let i = 1; i < lista.length; i++) {
        if (Number(lista[i].textContent) < masPequenio) {
            masPequenio = Number(lista[i].textContent);
        }
    }
    return masPequenio;
}

function calcularMasGrande(lista) {
    let masGrande = Number(lista[0].textContent);
    for (let i = 1; i < lista.length; i++) {
        if (Number(lista[i].textContent) > masGrande) {
            masGrande = Number(lista[i].textContent);
        }
    }
    return masGrande;
}

function calcularMasFrecuente(lista) {
    let masFrecuente;
    let vecesRepetido = 0;
    let masVecesRepetido = 0;
    for (let i = 0; i < lista.length; i++) {
        for (let j = i; j < lista.length; j++) {
            if (Number(lista[i].textContent) === Number(lista[j].textContent)) {
                vecesRepetido++;
            }
            if (vecesRepetido > masVecesRepetido) {
                masVecesRepetido = vecesRepetido;
                masFrecuente = Number(lista[i].textContent);
            }
        }
        vecesRepetido = 0;
    }
    if (masVecesRepetido === 1) {
        return (`ninguno (ningún valor se repite)`)
    }
    else {
        return (`${masFrecuente} (aparece ${masVecesRepetido} veces)`);
    }
}

$calcularPromedio.onclick = function () {
    if (lista === undefined) {
        alert("Error: Todavía no se generó una lista de números");
    }
    else {
        let promedio = calcularPromedio(lista);
        let $nuevaDivision = document.createElement('div');
        let $nuevoElemento = document.createElement('strong');
        let nodoTexto = document.createTextNode(`El promedio es de: ${promedio}`);
        $nuevoElemento.appendChild(nodoTexto);
        $nuevaDivision.append($nuevoElemento)
        $nodoResultados.appendChild($nuevaDivision);
    }
}

$calcularMasGrande.onclick = function () {
    if (lista === undefined) {
        alert("Error: Todavía no se generó una lista de números");
    }
    else {
        let masGrande = calcularMasGrande(lista);
        let $nuevaDivision = document.createElement('div');
        let $nuevoElemento = document.createElement('strong');
        let nodoTexto = document.createTextNode(`El número más grande es: ${masGrande}`);
        $nuevoElemento.appendChild(nodoTexto);
        $nuevaDivision.append($nuevoElemento)
        $nodoResultados.appendChild($nuevaDivision);
    }
}

$calcularMasPequenio.onclick = function () {
    if (lista === undefined) {
        alert("Error: Todavía no se generó una lista de números");
    }
    else {
        let masPequenio = calcularMasPequenio(lista);
        let $nuevaDivision = document.createElement('div');
        let $nuevoElemento = document.createElement('strong');
        let nodoTexto = document.createTextNode(`El número más pequeño es: ${masPequenio}`);
        $nuevoElemento.appendChild(nodoTexto);
        $nuevaDivision.append($nuevoElemento)
        $nodoResultados.appendChild($nuevaDivision);
    }
}

$calcularMasFrecuente.onclick = function () {
    if (lista === undefined) {
        alert("Error: Todavía no se generó una lista de números");
    }
    else {
        let masFrecuente = calcularMasFrecuente(lista);
        let $nuevaDivision = document.createElement('div');
        let $nuevoElemento = document.createElement('strong');
        let nodoTexto = document.createTextNode(`El número más frecuente es: ${masFrecuente}`);
        $nuevoElemento.appendChild(nodoTexto);
        $nuevaDivision.append($nuevoElemento)
        $nodoResultados.appendChild($nuevaDivision);
    }
}
