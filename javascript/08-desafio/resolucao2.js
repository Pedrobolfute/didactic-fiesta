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

const {gets, print} = require('./resolucao-auxiliar2');

const n = gets();
let maiorNumeroPar = null;
let menorNumeroImpar = null;

for(let i = 0; i < n; i++){
  const numero = gets();
  
  if(numero % 2 === 0){
    if(maiorNumeroPar === null || numero > maiorNumeroPar){
      maiorNumeroPar = numero;
    }

  } else{
    if(menorNumeroImpar === null || numero < menorNumeroImpar){
      menorNumeroImpar = numero;
    } 
  }
}

print('Maior par: ' + maiorNumeroPar)
print('Menor impar ' + menorNumeroImpar)