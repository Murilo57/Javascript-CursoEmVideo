let num = [5, 2, 8, 5, 4]
//Duas formas de adicionar um valor a uma array
num[5] = 6  //Dessa forma também posso trocar o valor de um determinado indice
num.push(7) //Essa função interna adiciona ao final


//Ler os elementos da array
num.length

//Ele organiza a array em ordem crescente
num.sort()

console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro do vetor é ${num[0]}`)
console.log (`Nosso vetor é o ${num}`)

 //Estrutura de repetição para ler toda array ao inves de fazer uma por uma ex: "console log(num[1]), console log(num[1]), etc.."
      // inicio       enquanto n atigir      incremento
for(let pos = 0; pos<num.length;          post++){
    console.log(num[pos])
}