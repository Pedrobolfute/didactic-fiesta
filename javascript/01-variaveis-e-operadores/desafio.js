/*
Faça um programa para calcular o valor de uma viagem.

Você terá 3 variáveis. Sendo elas:
 1 - Preço do combustível;
 2 - Gasto médio de combustível do carro por KM;
 3 - Distância em KM da viagem;

Imprima no console o valor que será gasto para realizar esta viagem.
*/

var precoCombustivel; //em reais
var gastoMedio;       //que o carro faz por litros
var distanciaKM;      //da viagem
const inicio = 'STARTED';
const fim = "ENDED";

precoCombustivel = 5.79;
gastoMedio = 10;
distanciaKM = 100;

console.log(inicio);
console.log((distanciaKM/gastoMedio)*precoCombustivel);
console.log(fim);