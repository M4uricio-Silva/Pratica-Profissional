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

// aqui embaixo é o exemplo que vamos ficar usando, podem mudar se quiser
console.log(criptografar("abc", 1));  // bcd