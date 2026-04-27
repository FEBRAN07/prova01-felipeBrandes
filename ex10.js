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

function menorValor(lista) {
    let len = lista.length;
    if (len === 0) {
        console.log('ERRO: Lista vazia!');
        return;
    }
    let menor = lista[0];
    lista.forEach((valor) => {
        if (valor < menor) {
            menor = valor;
        }
    });
    return menor;
}

function diferencaMaiorMenor(lista) {
    let len = lista.length;
    if (len === 0) {
        console.log('ERRO: Lista vazia!');
        return;
    }
    let maior = maiorValor(lista);
    let menor = menorValor(lista);
    return maior - menor;
}

const nums = [1, 2, 3, 4, 5, 6];
console.log(`Diferença entre o maior e o menor: ${diferencaMaiorMenor(nums)}`);
