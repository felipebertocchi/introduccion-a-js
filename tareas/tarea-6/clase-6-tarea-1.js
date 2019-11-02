
const $nodoDivisor = document.querySelector("#div-edades")
const $nodoResultados = document.querySelector("#resultados")
const $botonIngresar = document.querySelector("#ingresar");
const $botonCalcular = document.querySelector("#calcular");
const $botonReset = document.querySelector("#reload");
const $lineBreak = document.createElement("br");
const edadPersonas = [];


$botonIngresar.onclick = function () {
    const cantidadPersonas = Number(document.querySelector("#cantidad-personas").value);
    if (cantidadPersonas === 0) {
        alert("Por favor ingrese un número")
    }
    for (let i = 0; i < cantidadPersonas; i++) {
        const $nuevoForm = document.createElement('form');
        const $nuevoTitulo = document.createElement('h3');
        const $nuevoLabelNombre = document.createElement('label');
        const $nuevoInputNombre = document.createElement('input');
        const $nuevoLabelEdad = document.createElement('label');
        const $nuevoInputEdad = document.createElement('input');
        const textoNombre = document.createTextNode("Ingrese un nombre: ");
        const textoEdad = document.createTextNode("Ingrese su edad: ");
        const textoTitulo = document.createTextNode(`Integrante ${i + 1}`);
        const $nuevoDivisor1 = document.createElement("div");
        const $nuevoDivisor2 = document.createElement("div");

        $nuevoTitulo.append(textoTitulo);
        $nuevoLabelNombre.append(textoNombre);
        $nuevoLabelEdad.append(textoEdad);
        $nuevoTitulo.setAttribute("class", "titulo");
        $nuevoInputNombre.setAttribute("type", "text");
        $nuevoInputEdad.setAttribute("type", "number");
        $nuevoInputNombre.setAttribute("id", `nombre-persona-${i}`);
        $nuevoForm.className = "form";
        $nuevoInputEdad.className = "edades";

        $nuevoDivisor1.appendChild($nuevoLabelNombre);
        $nuevoDivisor1.appendChild($nuevoInputNombre);
        $nuevoForm.appendChild($nuevoTitulo);
        $nuevoForm.appendChild($nuevoDivisor1);

        $nuevoDivisor2.appendChild($nuevoLabelEdad);
        $nuevoDivisor2.appendChild($nuevoInputEdad);
        $nuevoForm.appendChild($nuevoDivisor2);

        $nodoDivisor.appendChild($nuevoForm);
    }
    $botonCalcular.disabled = false;
    $botonIngresar.disabled = true;
    document.getElementById("cantidad-personas").disabled = true;
}

$botonCalcular.onclick = function () {

    const nodeListEdades = document.querySelectorAll(".edades");

    for (let i = 0; i < nodeListEdades.length; i++) {
        if (Number(nodeListEdades[i].value) === 0) {
            alert("No se ingresaron una o más edades")
            return
        }
        edadPersonas.push(Number(nodeListEdades[i].value));
    }

    const mayorEdad = Math.max(...edadPersonas); // utilizo spread operator "..."
    const menorEdad = Math.min(...edadPersonas);
    let suma = 0;

    for (let i = 0; i < edadPersonas.length; i++) {
        suma += edadPersonas[i];
    }

    const promedioEdad = suma / edadPersonas.length;

    const texto1 = document.createTextNode(`La mayor edad es de ${mayorEdad}`);
    const texto2 = document.createTextNode(`La menor edad es de ${menorEdad}`);
    const texto3 = document.createTextNode(`La edad promedio es de ${promedioEdad}`);

    const $nuevoBloque1 = document.createElement("strong");
    const $nuevoBloque2 = document.createElement("strong");
    const $nuevoBloque3 = document.createElement("strong");

    $nuevoBloque1.appendChild(texto1);
    $nuevoBloque2.appendChild(texto2);
    $nuevoBloque3.appendChild(texto3);
    $nodoResultados.appendChild($nuevoBloque1);
    $nodoResultados.appendChild($nuevoBloque2);
    $nodoResultados.appendChild($nuevoBloque3);
}

$botonReset.onclick = function () {
    location.reload(); 
}