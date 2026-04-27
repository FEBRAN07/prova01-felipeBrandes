function identificarRepetidos(lista) {
    let vistos = [];
    let repetidos = [];
    lista.sort((a, b) => a - b);
    lista.forEach((valor) => {
        if (vistos.includes(valor)) {
            vistos.pop();
            repetidos.push(valor);
        } else {
            vistos.push(valor);
        }
    });
    return repetidos;
}

const nums = [10, 10, 20, 30, 30, 40, 50, 50];
console.log(`Números repetidos: ${identificarRepetidos(nums)}`);
