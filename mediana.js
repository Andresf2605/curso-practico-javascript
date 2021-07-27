function mediana(lista) {
    console.log(lista)
    lista.sort((a, b) => {
        console.log("a: " + a)
        console.log("b: " + b)
        console.log("a-b: " + (a - b))
        return a - b;
    });
    console.log(lista)
    if (lista.length % 2 === 0) {

        const mitad1 = lista[parseInt((lista.length / 2)) - 1];
        const mitad2 = lista[parseInt(lista.length / 2)];

        return (mitad1 + mitad2) / 2;


    } else {
        const mitad = lista[parseInt(lista.length / 2)];
        console.log(mitad)
        return mitad;

    }
}