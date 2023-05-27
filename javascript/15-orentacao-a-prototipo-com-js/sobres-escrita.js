const pessoa = {
  idade: 18
}

const pedro = {
  nome: 'pedro',
  //idade: 30, //Se achar primeiro aki. Se nao vai em pessoa.
  __proto__: pessoa
}

console.log(pedro.idade)