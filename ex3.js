function maiorValor(lista) {
    let len = lista.length;
    if (len === 0) {
        console.log('ERRO: Lista vazia!');
        return;
    }
    let maior = lista[0];
    lista.forEach((valor) => {
        if (valor > maior) {
            maior = valor;
        }
    });
    return maior;
}

const nums = [7, 2, 3, 9, 5, 12];
console.log(`Maior valor: ${maiorValor(nums)}`);
