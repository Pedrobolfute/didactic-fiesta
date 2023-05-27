class Pessoa{
  constructor(nome){
    this.nome = nome
  }
}

const lista = [new Pessoa('pedro'),new Pessoa('nane'),new Pessoa('jei'),new Pessoa('wow'),new Pessoa('loki')]

//console.log(lista)


//Isso é equivalente ao map
// const listaNomes = []
// for(let i = 0; i <= lista.length; i++){
//   const element = lista[i]
//   listaNomes.push(element.nome)
// }
// console.log(listaNomes)

const listarNomes = lista.map((element) => {

  return element.nome
})

console.log(listarNomes)