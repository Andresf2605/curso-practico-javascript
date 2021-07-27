function salarios(pais) {
    const listaSalarios = pais.map((persona) => {
        return persona.salary;
    });
    return listaSalarios;
}

function ordenarSalarios(listaSalarios) {
    const salariosSorted = listaSalarios.sort((a, b) => {
        return a - b;
    });
    return salariosSorted;
}

function medianaSalarios(salariosSorted) {
    if (salariosSorted.length % 2 === 0) {
        const mitad1 = salariosSorted[parseInt(salariosSorted.length / 2) - 1];
        const mitad2 = salariosSorted[parseInt(salariosSorted.length / 2)];
        const mediana = (mitad1 + mitad2) / 2;
        return mediana;
    } else {
        const mediana = salariosSorted[parseInt(salariosSorted.length / 2)];
        return mediana;
    }

}

function obtenerMediana() {
    const listaSalarios = salarios(colombia);
    const salariosSorted = ordenarSalarios(listaSalarios);
    const mediana = medianaSalarios(salariosSorted);

    return mediana;
}

function obtenerTop10() {
    const listaSalarios = salarios(colombia);
    const salariosSorted = ordenarSalarios(listaSalarios);
    const posicionComienzo = (salariosSorted.length * 90) / 100;
    const porcionesTomadas = salariosSorted.length - posicionComienzo;
    const salariosTop10 = salariosSorted.splice(posicionComienzo, porcionesTomadas);
    const medianaTop10 = medianaSalarios(salariosTop10);
    return medianaTop10;

}