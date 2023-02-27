const funcoes = require('./aula-funcao-auxiliar')

console.log(funcoes);
console.log(funcoes.gets());
funcoes.print('Pedro Exports...');

//Um exemplo de destructiring...
//Criei um objeto...
const pessoa = {
  nome: 'Pedro'
};
//Destructiring.
const {nome} = pessoa;
//Equivale a
//const nome = pessoa.nome;

//Então...
const {gets, print} = require('./aula-funcao-auxiliar')