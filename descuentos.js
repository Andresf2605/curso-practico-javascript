const precioOriginal = 100;
const descuento = 15;



// console.log({
//     precioOriginal,
//     descuento,
//     porcentajePrecioConDescuento,
//     precioConDescuento
// })

function calcularPrecioConDescuento(precioOriginal, descuento) {
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precioOriginal * porcentajePrecioConDescuento) / 100;
    return precioConDescuento;
}

function onClickButtonPriceDiscount() {
    const inputPrice = document.getElementById("input-price").value;
    const inputDiscount = document.getElementById("input-discount").value;
    const precioConDescuento = calcularPrecioConDescuento(inputPrice, inputDiscount);

    const resultPrice = document.getElementById("resultPrice");
    resultPrice.innerText = "El precion con descuento son: $    " + precioConDescuento;
}