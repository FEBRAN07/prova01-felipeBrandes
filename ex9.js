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

function palindromo(string) {
    let inversa = inverterString(string);
    if (inversa === string) return true;
    else return false;
}

const frase = 'osso';
console.log(`A frase é um palíndromo: ${palindromo(frase)}`);
