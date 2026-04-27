function contarLetras(string) {
    let quantidades = {};
    if (string === '') {
        console.log('ERRO: String vazia!');
        return 0;
    }
    string = string.toLowerCase();
    for (let i = 0; i < string.length; i++) {
        if (string[i] === ' ') continue;
        if (string[i] in quantidades) {
            quantidades[string[i]] += 1;
        } else {
            quantidades[string[i]] = 1;
        }
    }
    return quantidades;
}

const frase = 'Olá Mundo!';
console.log('Frequencia das letras: ');
console.table(contarLetras(frase));
