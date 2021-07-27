const lista1 = [1, 2, 3, 1, 2, 3, 4, 2, 2, 1];

function CalcularModa(lista) {
    const listaCount = {};

    lista.map((elemento) => {
        if (listaCount[elemento]) {
            listaCount[elemento] += 1;
        } else {
            listaCount[elemento] = 1;
        }
    });
    const moda = ordenarLista(listaCount);
    return moda;
}


function ordenarLista(objeto) {
    const listaArray = Object.entries(objeto); //Convierte un objeto en un array
    listaArray.sort((valorAcumulado, nuevoElemento) => {
        return valorAcumulado[1] - nuevoElemento[1];
    });

    const moda = listaArray[(listaArray.length - 1)];

    return moda;

}