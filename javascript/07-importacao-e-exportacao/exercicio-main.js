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

const {gets, print} = require('./exercicio-auxiliar');

const numero = gets();
let guardaNumero = 0;
for(let i = 0; i < numero.length; i++){
  if(numero[i] > guardaNumero){
    guardaNumero = numero[i];
  }
}

print(gets());
console.log('Maior número: ' + guardaNumero);
