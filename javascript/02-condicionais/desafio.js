/*
Faça um programa para calcular o valor de uma viagem.

Você terá 5 variáveis. Sendo elas:
 1 - Preço do etanol;
 2 - Preço do gasolina;
 3 - O tipo de combustível que está no seu carro;
 4 - Gasto médio de combustível do carro por KM;
 5 - Distância em KM da viagem;

Imprima no console o valor que será gasto para realizar esta viagem.
*/

const preçoEtanol = 4;
const preçoGasolina = 5;
var tipoCombustivel = 'etanol';
var gastoMedioCombustivel = 12;
var distanciaViagemKM = 1500;

if(tipoCombustivel === 'gasolina'){
  console.log('Gastos à gasosa: ')
  console.log((distanciaViagemKM/gastoMedioCombustivel)*preçoGasolina);
}else if(tipoCombustivel === 'etanol'){
  console.log('Gasto à etanol: ')
  console.log((distanciaViagemKM/gastoMedioCombustivel)*preçoEtanol)
} else{
  console.log(tipoCombustivel + ' não cadastrado!\nSó temos: gasolina ou etanol')
}