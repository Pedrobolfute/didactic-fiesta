//Usa new em cima de uma func construtora

function Pessoa(nome, idade){
  this.nome = nome
  this.idade = idade
}

console.log(new Pessoa('Pedro', 90))


Pessoa.prototype.falar = function(){
  console.log(`My name is: ${this.nome}`)
}

const pedro = new Pessoa('pedro', 50)
pedro.falar()


//Brincando com prototype

String.prototype.toPlang = function(){
  return `P${this}`
}

console.log('teste'.toPlang())