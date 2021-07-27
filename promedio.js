const lista1 = [100, 200, 300, 500];



function calcularMediaAritmetica(lista) {
    // let sumaLista = 0;
    // for (let i = 0; i < lista.length; i++) {
    //     sumaLista = sumaLista + lista[i];
    // }

    //Alternativa

    const sumaLista = lista.reduce((ValorAcumulado = 0, elemento) => {
        ValorAcumulado = ValorAcumulado + elemento;
        return ValorAcumulado;
    })
    const promedioLista = sumaLista / lista.length;

    return promedioLista;

}