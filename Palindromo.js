const frase = "yey" // PALAVRA A SER VERIFICADA

function verificarPalindromo(value) {

    const novaPalavra = value.split('').reverse().join('') // DESMEMBRANDO, INVERTENDO, E JUNTANDO A FRASE
    // VERIFICANDO SE A FRASE É A MESMA APÓS A INVERSÃO
    if (novaPalavra === frase)
        console.log('É palindromo')
    else
        console.log('Não é palíndromo')


}
verificarPalindromo(frase) // CHAMANDO A FUNÇÃO