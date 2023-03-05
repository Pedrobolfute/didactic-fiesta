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


const {gets, print} = require('./funcoes-auxiliares2');

const valoresTeste = [3, 4, 8, 7, 9, 6, 2, 5];

let maiorPar = 0;
let menorImpar = 0;

function maiorNumeroPar(entrada){
  for(let i = 0; i <= entrada.length; i++){
    if(entrada[i] %2 === 0 && entrada[i] > maiorPar){
      maiorPar = entrada[i];
    }
  }
  return maiorPar;
}

function somarValores(entrada){
  for(let i = 0; i < entrada.length; ++i){
    menorImpar = menorImpar + entrada[i];
  }
  return menorImpar;
}

function menorNumeroImpar(entrada){
  somarValores(entrada);
  for(let i = entrada.length; i >= 0; i--){
    if(entrada[i] %2 === 1 && entrada[i] < menorImpar){
      menorImpar = entrada[i];
        }
      }
      return menorImpar;
}    

print(`Maior Par: ${maiorNumeroPar(gets())}`);
print(`Menor Impar: ${menorNumeroImpar(gets())}`);