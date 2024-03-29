// IMPORTANTE: As funções "gets" e "print" são acessíveis globalmente, onde: 
// - "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
// - "print": imprime um texto de saída (output) e pula uma linha ("\n") automaticamente;

const {gets, print} = require('../08-desafio/resolucao-auxiliar2');


const N = gets();
let maiorNumeroPar = 0;
let menorNumeroImpar = null;

for (let i = 0; i < N; i++) {
  const numero = parseInt(gets());

  if (numero % 2 == 0) {
    if (numero > maiorNumeroPar) {
      maiorNumeroPar = numero;
    }
  }
  // TODO: Criar a condição e regras para identificar também o "menorNumeroImpar".
  else {
    if(menorNumeroImpar == null || numero < menorNumeroImpar){
      menorNumeroImpar = numero;
    }
  }
}
       
// TODO: Imprima as saídas conforme o enunciado deste desafio.
print(`Maior número par: ${maiorNumeroPar}`);
print(`Menor número impar: ${menorNumeroImpar}`);