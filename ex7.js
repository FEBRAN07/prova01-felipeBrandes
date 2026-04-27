function identificarRepetidos(lista) {
    let vistos = [];
    let repetidos = [];
    lista.forEach((valor) => {
        if (vistos.includes(valor) && !repetidos.includes(valor)) {
            repetidos.push(valor);
        } else {
            vistos.push(valor);
        }
    });
    return repetidos;
}

const nums = [10, 20, 30, 30, 20, 10];
console.log(`Números repetidos: ${identificarRepetidos(nums)}`);
