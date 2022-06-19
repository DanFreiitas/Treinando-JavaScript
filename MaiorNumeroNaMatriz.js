const matriz = [
    [80, 25, 32, 75, 96, 14, 32, 121, 23, 986],
    [26, 46, 84, 96, 12, 01, 22, 64, 85, 21],
    [05, 45, 09, 15, 32, 47, 85, 94, 62, 36, 44],
    [22, 55, 66, 99, 45, 12, 36, 74, 02, 23, 47]
]

function verificar(matriz) { // Recebe todos os valores da matriz
    let matriz1 = 0 // Guarda o valor do maior número da matriz
    for (let i = 0; i < matriz[0].length; i++)
        if (matriz1 < matriz[0][i])
            matriz1 = matriz[0][i] // Salva o valor do maior número da 1ª linha da matriz
    console.log(`Maior número na primeira linha da matriz é ${matriz1}`)
    
    let matriz2 = 0 // Guarda o valor do maior número da matriz
    for (let i = 0; i < matriz[1].length; i++)
        if (matriz2 < matriz[1][i])
            matriz2 = matriz[1][i] // Salva o valor do maior número da 2ª linha da matriz
    console.log(`Maior número na segunda linha da matriz é ${matriz2}`)
    
    let matriz3 = 0 // Guarda o valor do maior número da matriz
    for (let i = 0; i < matriz[2].length; i++)
        if (matriz3 < matriz[2][i])
            matriz3 = matriz[2][i] // Salva o valor do maior número da 3ª linha da matriz
    console.log(`Maior número na terceira linha da matriz é ${matriz3}`)
    
    let matriz4 = 0 // Guarda o valor do maior número da matriz
    for (let i = 0; i < matriz[3].length; i++)
        if (matriz4 < matriz[3][i])
            matriz4 = matriz[3][i] // Salva o valor do maior número da 4ª linha da matriz
    console.log(`Maior número na quarta linha da matriz é ${matriz4}`)

    console.log(`A soma dos maiores números de cada linha da matriz é ${matriz1 + matriz2 + matriz3 + matriz4}`)
    

}

verificar(matriz)
