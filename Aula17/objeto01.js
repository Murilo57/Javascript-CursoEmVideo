//Declarando um objeto
let amigo = {nome:'José', 
sexo: 'M',
peso: 85.4,
engorda(p=0){
    console.log(engordou)
    this.peso += p
}}

amigo.engorda(2)
console.log(`${amigo.nome} pesa ${amigo.peso}KG`)

//Uma array também é considerada um objeto em JavaScript pois são estruturas da mesma classe