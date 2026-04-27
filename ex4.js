const vogais = 'aeiou';

function contarVogais(string) {
    if (string === '') {
        console.log('ERRO: String vazia!');
        return 0;
    }
    let quantidadeVogais = 0;
    string = string.trim();
    string = string.toLowerCase();
    for (let i = 0; i < string.length; i++) {
        if (vogais.includes(string[i]) && string[i] !== ' ') {
            quantidadeVogais++;
        }
    }
    return quantidadeVogais;
}

const frase = 'Ola mundo!';
console.log(`Quantidade de vogais: ${contarVogais(frase)}`);
