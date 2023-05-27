# conteudo

## proto

Prototipo:

Uma cadeia de prototipo que podem ser percorrido até achar ou não o que procura

**Um objeto no qual o meu objeto está se baseando**:

const peddoa{
  genero: 'masculino'
}

const pedro{
  nome: 'pedro',
  idade: 'x',
  __proto__: pessoa
}

console.log(pedro.genero)

## funções contrutura

function Pessoa(nome, idade){
  this.nome = nome
  this.idade = idade
}

- Função de isolar o escoco. "Isola o escopo próprio"
- this

const pedro new Pessoa(pedro, 24)

console.log(pedro)

**adicionando um metodo na classe**:

Pessoa.prototype.falar = function(){
  console.log('falei')
}

pesro.falar()


* Isso aqui:

class Pessoa {
  constructor(nome, idade){
    this.nome = nome,
    this.idade = idade
  }

  falar(){
    console.log(`meu nome é ${this.nome}`)
  }
}

* Equivale a isso:

funciton Pessoa(nome, idade){
  this.nome = nome,
  this.idade = idade
}

Pessoa.prototype.falar = function(){
  console.log(`meu nome é ${this.nome}`)
}

## sobre-escrita de protótipo 

const pessoa = {
  idade: 18
}

const pedro = {
  nome: 'pedro',
  //idade: 30, //Se achar primeiro aki. Se nao vai em pessoa.
  __proto__: pessoa
}

console.log(pedro.idade)
