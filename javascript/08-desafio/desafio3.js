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

const {gets, print } = require('./funcoes-auxiliares3');
let salarioLiquido = null;

valores = gets();

function calculoImposto(){
  if(valores[0] > 0.00 && valores[0] <= 1100.00){
    return valores[0] = valores[0] * 0.95; //-5%
  }else if(valores[0] >= 1100.01 && valores[0] < 2500.00){
    return valores[0] = valores[0] * 0.90; //-10%
  }else {
    return valores[0] = valores[0] * 0.85; //-15%
  }
}

salarioLiquido = calculoImposto() + valores[1];
print(salarioLiquido);