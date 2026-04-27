function mediaLista(lista) {
    let len = lista.length;
    if (len === 0) {
        console.log('ERRO: Lista vazia!');
        return;
    }
    let soma = 0;
    lista.forEach((valor) => {
        soma += valor;
    });
    return soma / len;
}

const nums = [1, 2, 3, 4, 5];
console.log(`Media dos valores: ${mediaLista(nums)}`);
