function inverterString(string) {
    if (string === '') {
        console.log('ERRO: String vazia!');
        return '';
    }
    let inversa = '';
    for (let i = string.length - 1; i >= 0; i--) {
        inversa += string[i];
    }
    return inversa;
}

const frase = 'Olá mundo!';
console.log(`Frase invertida: ${inverterString(frase)}`);
