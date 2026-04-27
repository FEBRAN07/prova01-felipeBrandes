function somarPares(lista) {
    let len = lista.length;
    if (len === 0) {
        console.log('ERRO: Lista vazia!');
        return 0;
    }
    let pares = 0;
    lista.forEach((valor) => {
        if (valor % 2 === 0) {
            pares += valor;
        }
    });
    return pares;
}

const nums = [1, 2, 3, 4, 5, 6];
console.log(`Soma dos pares: ${somarPares(nums)}`);
