//obj literal, como criar

const pessoa = {
  genero: 'masculino'
}


const pedro = {
  nome: 'pedro',
  __proto__: pessoa
}

console.log(pedro.genero)

//Cria um obj como pedro sendo um prototipo.

const pedroca = Object.create(pessoa)
console.log(pedroca.genero)