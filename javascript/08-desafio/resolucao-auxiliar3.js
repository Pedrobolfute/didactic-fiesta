/*
3) Faça um programa que calcule e imprima o salário a ser transferido por um funcionário.

Para realizar o calculo receba o valor bruto do salario e o adicional dos benefícios.

O salário a ser transferido é calculado da seguinte maneira:
  Valor bruto do salário - percentual do imposto mediante a faixa salarial + adicional dos benefícios.

Para calcular o percentual de imposto segue as alíquotas:

  De R$ 0.00 a R$ 1100.00 = 5.00%
  De R$ 1100.01 a R$ 2500.00 = 10.00%
  Maior que R$ 2500.00 = 15.00%

  EX:
    Entrada:
      2000
      250

    Saida:
      2050.00
*/

const entradas = [2000, 250]
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