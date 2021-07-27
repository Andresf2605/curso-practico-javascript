//codigo del cuadrado
console.group("Cuadrados")
const perimetroCuadrado = (lado) => lado * 4;
const areaCuadrado = (lado) => lado * lado;
console.groupEnd();

//codigo del triangulo
console.group("Triangulos");
const perimetroTriangulo = (lado1, lado2, base) => parseInt(lado1) + parseInt(lado2) + parseInt(base);
const areaTriangulo = (lado1, lado2, base) => {
    if (lado1 === lado2) {
        return (base * alturaTriangulo(lado1, base)) / 2;
    } else {
        return "Lado 1 y lado 2 deben se iguales";
    }
};
const alturaTriangulo = (lado1, base) => {
    return Math.sqrt((lado1 * lado1) - (base / 2) * (base / 2));
}
console.groupEnd();

//codigo del CIRCULO
console.group("Circulos");
const diametroCirculo = (radio) => radio * 2;
const perimetroCirculo = (radio) => diametroCirculo(radio) * Math.PI;
const areaCirculo = (radio) => (radio * radio) * Math.PI;
console.groupEnd();


//Aqui interactuamos con el html

function calcularPerimetroCuadrado() {
    const lugarPerimetro = document.getElementById("cuadrado"); //DIV
    const elementos = lugarPerimetro.childNodes;
    const arrayElementos = Array.apply(null, elementos)
    const ladoInput = document.getElementById("InputCuadrado").value; //INPUT VALOR
    const resultado = perimetroCuadrado(ladoInput); //VALOR PERIMETRO OPERACION
    const existe = arrayElementos.some(elemento => elemento.className === "perimetro")

    if (existe) {
        const parrafoPerimetro = arrayElementos.find(element => element.className === "perimetro")
        parrafoPerimetro.innerText = "El perimetro del cuadrado es: " + resultado; //SE AGREGA RESUTADO AL NODO P

    } else {
        const respuesta = document.createElement("p"); //SE CREA NODO P
        respuesta.classList.add("perimetro")
        respuesta.innerText = "El perimetro del cuadrado es: " + resultado; //SE AGREGA RESUTADO AL NODO P
        lugarPerimetro.appendChild(respuesta); //SE AGREGA EL NODO P AL DIV

    }

}


function calcularAreaCuadrado() {
    const lugarPerimetro = document.getElementById("cuadrado") //Div
    const elementos = lugarPerimetro.childNodes;
    const arrayElementos = Array.apply(null, elementos)
    const ladoInput = document.getElementById("InputCuadrado").value; //valor input
    const resultado = areaCuadrado(ladoInput);
    const existe = arrayElementos.some(elemento => elemento.className === "area")

    if (existe) {
        const parrafoPerimetro = arrayElementos.find(element => element.className === "area")
        parrafoPerimetro.innerText = "El area del cuadrado es: " + resultado; //SE AGREGA RESUTADO AL NODO P

    } else {
        const respuesta = document.createElement("p"); //SE CREA NODO P
        respuesta.classList.add("area")
        respuesta.innerText = "El area del cuadrado es: " + resultado; //SE AGREGA RESUTADO AL NODO P
        lugarPerimetro.appendChild(respuesta); //SE AGREGA EL NODO P AL DIV

    }

}

function calcularPerimetroTriangulo() {
    const sectionTriangulo = document.getElementById("triangulo"); //DIV
    const listaNodos = sectionTriangulo.childNodes;
    const arrayNodos = Array.apply(null, listaNodos);
    const lado1 = document.getElementById("lado1").value;
    const lado2 = document.getElementById("lado2").value;
    const base = document.getElementById("base").value;
    const perimetro = perimetroTriangulo(lado1, lado2, base);

    const existe = arrayNodos.some(nodo => nodo.className === "perimetro");
    if (existe) {
        const nodoPerimetro = arrayNodos.find(nodo => nodo.className === "perimetro");
        nodoPerimetro.innerText = "El perimetro del triangulo es: " + perimetro;
    } else {
        const parrafoPerimetro = document.createElement("p");
        parrafoPerimetro.classList.add("perimetro");
        parrafoPerimetro.innerText = "El perimetro del triangulo es: " + perimetro;
        sectionTriangulo.appendChild(parrafoPerimetro);

    }
}

function calcularAreaTriangulo() {
    const sectionTriangulo = document.getElementById("triangulo"); //DIV
    const listaNodos = sectionTriangulo.childNodes;
    const arrayNodos = Array.apply(null, listaNodos);
    const lado1 = document.getElementById("lado1").value;
    const lado2 = document.getElementById("lado2").value;
    const base = document.getElementById("base").value;
    const area = areaTriangulo(lado1, lado2, base);

    const existe = arrayNodos.some(nodo => nodo.className === "area");
    if (existe) {
        const nodoArea = arrayNodos.find(nodo => nodo.className === "area");
        nodoArea.innerText = "El perimetro del triangulo es: " + area;
    } else {
        const parrafoArea = document.createElement("p");
        parrafoArea.classList.add("area");
        parrafoArea.innerText = "El area del triangulo es: " + area;
        sectionTriangulo.appendChild(parrafoArea);

    }
}