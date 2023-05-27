function Pessoa(nome, idade){
  this.nome = nome
  this.idade = idade
}


//Antigaente
function Pessoa(nome, idade){
  this.nome = nome,
  this.idade = idade
}

Pessoa.prototype.falar = function(){
  console.log(`meu nome é ${this.nome}`)
}


//Agora
class Pessoa {
  constructor(nome, idade){
    this.nome = nome,
    this.idade = idade
  }

  falar(){
    console.log(`meu nome é ${this.nome}`)
  }
}