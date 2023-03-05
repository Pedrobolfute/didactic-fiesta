/*
  Faça um programa que receba N (quantidade de números) e seus respectivos valores.
  Imprima o maior número par e o menor número impar.

  EX:
    Entrada:
      5
      3
      4
      1
      10
      8

    Saída:
      Maior par: 10
      Menos impar: 1    
*/

const valores = [5, 3, 4, 1, 10, 8];

function gets(){
  return valores;
}

function print(saida){
  console.log(saida);
}

module.exports = {gets, print};