// DECLARAÇÃO DE VARIÁVEIS
const media = 6
let contador = 1
let nova1
let nova2
let nova3
let nomes
let idade
let turma
let novaMedia
const aluno = [
    { nome: 'Daniel', idade: 31, turma: 301, nota1: 8, nota2: 2, nota3: 6 },
    { nome: 'Diego', idade: 20, turma: 205, nota1: 5, nota2: 4, nota3: 2 },
    { nome: 'Gabriel', idade: 25, turma: 311, nota1: 3, nota2: 9, nota3: 7.5 },
    { nome: 'Gisele', idade: 65, turma: 111, nota1: 9, nota2: 5, nota3: 6 },
    { nome: 'Nathalia', idade: 47, turma: 805, nota1: 10, nota2: 4, nota3: 10 },
    { nome: 'Michael', idade: 12, turma: 502, nota1: 4, nota2: 6, nota3: 4 },
    { nome: 'Gonçalo', idade: 22, turma: 602, nota1: 6, nota2: 7, nota3: 8 },
    { nome: 'Bitencuour', idade: 55, turma: 958, nota1: 6, nota2: 1, nota3: 10 }
]

// PROCESSAMENTO DE DADOS
// FUNÇÃO
function executar(value) {

    // LISTAR O NOME DE TODOS OS ALUNOS
    for (let i = 0; i < value.length; i++) {
        // Nome dos alunos
        nomes = value[i].nome
        // Idade dos alunos
        idade = value[i].idade
        // Turmas
        turmas = value[i].turma
        // Notas
        nota1 = value[i].nota1
        nota2 = value[i].nota2
        nota3 = value[i].nota3
        
        console.log(`\n${i+1} - ALUNO`)
        console.log(`\t ${nomes} \nIdade: ${idade} \nTurma: ${turmas} \nNota 1: ${nota1} \nNota 2: ${nota2} \nNota 3: ${nota3} \nMédia final: ${novaMedia = ((nota1 + nota2 + nota3)/3).toFixed(2)}`)
        
    }
    // VERIFICA SE FOI APROVADO OU NÃO
    if(novaMedia < media)
        console.log('Situação: REPROVADO')
    else
        console.log('Situação: APROVADO')
}

// CHAMADA DE FUNÇÃO
executar(aluno)
