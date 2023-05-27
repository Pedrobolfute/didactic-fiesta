function adicao(x, y){
  return x + y
}

function multiplicacao(x, y){
  return x * y
}

//Inversão de controle
function calculadora(x, operacao, y){
  console.log(operacao(x, y))
}

calculadora(10, multiplicacao, 30)

// Uma func pode ser passado como obj e retornar o func tbm...