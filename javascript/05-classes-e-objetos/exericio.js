/*
1 - Crie uma classe para representar carros.
Os carros possuem uma marca, uma cor e um gasto medio de combustível por Km rodado. Crie um método que dado a quantidade de Km e o preço do combustível nos dê o valor gasto em reais para realizar este percurso.
*/

class Carro{
  marca;
  cor;
  gastoMedioCombustivelKmRodado;

  constructor(marca, cor, gastoMedioCombustivelKmRodado){
    this.marca = marca;
    this.cor = cor;
    this.gastoMedioCombustivelKmRodado = gastoMedioCombustivelKmRodado;
  }
  
  valalorGasto(kmRodado, precoCombustivel){
    return ((kmRodado / this.gastoMedioCombustivelKmRodado) * precoCombustivel).toFixed(2);
  }
}

const uno = new Carro('Fiat', 'Vermelho', 12);
console.log(uno.valalorGasto(1368, 7));

const palio = new Carro('Fiat', 'Cinza', 10);
console.log(palio.valalorGasto(70, 5))