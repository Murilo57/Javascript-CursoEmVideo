//Estrutura de repetição para ler uma array utilizando for
let valores = [7, 5, 3, 1, 2, 9]

for(let pos = 0; pos < valores.length; pos++){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}

//Estrutura simplificada para ler Array
//Primeiro declaro a variavel de inicio e depois a variavel composta(array)
//Só funciona para array e objetos. Toda array tbm é uma objeto
for(let pos in valores ) {
   console.log(`A posição ${pos} tem o valor ${valores[pos]}`) 
}

//Buscar valores dentro de um vetor
let pos = valores.indexOf(5)
console.log(`O valor 5 esta na posição ${pos}`)
