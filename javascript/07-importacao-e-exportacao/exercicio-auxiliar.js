/*
Uma sala contém 5 alunos e para cada aluno foi sorteado um numero de 1 - 100.
Faça um programa que receba os 5 números sorteados para os alunos e mostre o maior numero sorteado.

Dados de entrada:
5
50
10
98
23

saida:
98
*/

const entradas = [5, 50, 10, 98, 23];

function gets(){
  return entradas;
}

function print(saida){
  console.log(saida);
}

module.exports = { gets, print };