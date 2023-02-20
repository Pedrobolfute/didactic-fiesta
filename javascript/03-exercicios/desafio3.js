/*
3) Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento. 
Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.

Código Condição de pagamento:
- À vista Débito, recebe 10% de desconto;
- À vista no Dinheiro ou PIX, recebe 15% de desconto;
- Em duas vezes, preço normal de etiqueta sem juros;
- Acima de duas vezes, preço normal de etiqueta mais juros de 10%;
*/

console.log('\n\nQuestão 03: ');

var tipoPagamento = 2;
var produto = 45;

var avistaDebito = 0.9 * produto;
var avistaPix = 0.85 * produto ;
var duasVezes = 1 * produto;
var acimaDuas = 1.1 * produto;

console.log('Qual o Método de pagamento?');
console.log('1-Débito à vista.\n2-Pix à vista.\n3-Dividir 2x.\n4-Dividir +2x.');

if(tipoPagamento === 1){
  console.log('Preço do produto: ' + produto);
  console.log('Débito à vista: ' + avistaDebito);
}
else if(tipoPagamento === 2){
  console.log('Preço do produto: ' + produto);
  console.log('Pix à vista: ' + avistaPix);
}
else if(tipoPagamento === 3){
  console.log('Preço do produto: ' + produto);
  console.log('Duas vezes: ' + duasVezes);
}
else if(tipoPagamento === 4){
  console.log('Preço do produto: ' + produto);
  console.log('Mais de duas vezes, juros de 10%: ' + acimaDuas);
}
else{
  console.error('Error. Tipo de pagamento inválido!')
}