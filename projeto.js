// NÃO APAGUEM NADA SEM AVISAR, OKAY!!!?

function criptografar(texto, N) {
    let resultado = "";

    for (let i = 0; i < texto.length; i++) {
        let char = texto[i];

        if (char.match(/[a-zA-Z]/)) {  // isso aqui vai verificar se é uma letra, blz?
            let base = char === char.toUpperCase() ? 65 : 97;  // aqui vai definir a base entre maiúsculas ou minúsculas
            let novoChar = String.fromCharCode(((char.charCodeAt(0) - base + N) % 26) + base);
            resultado += novoChar;
        } else {
            resultado += char;  // é pra mantér os caracteres inalterados
        }
    }

    return resultado;  // aqui retorna o texto após a primeira iteração
}                              

function criptografarDuasVezes(texto, N) {
    let primeiraIteracao = criptografar(texto, N);
    let segundaIteracao = criptografar(primeiraIteracao, N);
    return segundaIteracao;
}

function criptografarTresVezes(texto, N) {
    let segundaIteracao = criptografarDuasVezes(texto, N); 
    let terceiraIteracao = criptografar(segundaIteracao, N); 
    return terceiraIteracao;
}

// aqui embaixo é o exemplo que vamos ficar usando, podem mudar se quiser
let textoOriginal = "abc-123";
let N = 1;

let primeiraSaida = criptografar(textoOriginal, N);
let segundaSaida = criptografarDuasVezes(textoOriginal, N);
let terceiraSaida = criptografarTresVezes(textoOriginal, N);

console.log("Primeira iteração: " + primeiraSaida);
console.log("Segunda iteração: " + segundaSaida);
console.log("Terceira iteração: " + terceiraSaida);