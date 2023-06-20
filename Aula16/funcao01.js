function parimpar (n) {
    if (n%2 == 0) {
        return 'Par!'
    } else {
        return 'Impar!'
    }
}

// //Feito com variavel
let res = parimpar(3)
console.log(res)

//Chamando direto a function
console.log(parimpar(23))