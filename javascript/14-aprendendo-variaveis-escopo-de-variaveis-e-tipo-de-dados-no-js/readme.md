# conteudo

JavaScript é fracamente tipada. Porque as variáveis não se restringe a um único tipo.

## hoisting

permite chamar funções antes de sua declaração

Não funciona com declaração de variáveis

## var

Ele foje do bloco de escopo, exceto de função.

if(true){
  var vaisairdaki = 10
}
console.log(vaisairdaki)  //10

## let

Não vasa do escopo

## const

igual let, mas é constante.

## convenção do js

let _var significa que a var nao sai do escopo

let Var significa que é uma classe ou func construtora

const CONSTANTE tudo com letra maiuscula

var testVariavel usa camelCase

## tipos de dados

Primitivos:

- boolean
- null
- undefined
- number
- string
- symbol

Outros:

- objeto

## outro

null = ausencia de valor.

- let nome = null

undefined = ausencia de declaração

- let sobrenome

## Double Precision 64-bit binary format IEEE 754

**B.O**:

0.1 - 0.3 //-0.1999999999999998

**Problema**:

https://0.30000000000000004.com/

**Algumas das possíveis soluções**:

https://mikemcl.github.io/decimal.js/

- usar uma das bibliotecas

## evaluar valor

`${variavel}`

## objeto

const x = {
  nome: 'pedro',
  idade: '24'
}
x.sobrenome = 'henrique'

console.log(x['nome'])
console.log(.nome)

x['nome'] = gabriel

**função no obj**:

x.falar = function(){
  console.log('falei')
}

x.falar()

**this no obj**:

const pessoa = {
  nome: 'pedro',
  idade: 24
  falar: function(){
    console.log(`Meu nome: ${this.nome}`)
  }
}

pessoa.falar()

- 'this' se refera aos dados dentro do escopo do objeto

*perdendo contexto do this quando...*

y = pessoa.falar
y()

arrow function tabmém não tem contexto
