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

const entradas = [5, 3, 4, 1, 10, 8];
let i = 0;

function gets(){
  const valor = entradas[i];
  i++;
  return valor;
}

function print(texto){
  console.log(texto);
}

module.exports = {gets, print};