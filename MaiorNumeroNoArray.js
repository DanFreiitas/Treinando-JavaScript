const Arr = [8,15,35,12,22,78,96] // ARRAY DE NÚMEROS


function verificar(arr) {
    let novoArray = 0 // ARRAY PARA SALVAR O MAIOR NÚMERO
    
    for(let i = 0; i <= arr.length; i++) {
        
        if(novoArray < arr[i]){ // VERIFICA SE O NÚMERO DA VEZ É MAIOR
            novoArray = arr[i] // SALVA O NÚMERO DA VEZ CASO SEJA MAIOR
        }

    }
    console.log(`O maior número é ${novoArray}`)
}

verificar(Arr)