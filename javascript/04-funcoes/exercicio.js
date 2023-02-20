//Func para escrever nome.
function escrevaMeuNome(nome){
  return ('Meu nome é ' + nome);
}

escrevaMeuNome('Pedro');
escrevaMeuNome('Nane');
console.log('-----------------------')

//func pra ver se é meior de idade.
function verificarIdade(idade){
  if(idade >= 18){
    console.log( escrevaMeuNome('Pedro') + ' e sou Maior');
  }else{
    console.log(escrevaMeuNome('Pedro') + ' e sou Menor');
  }
}
verificarIdade(4);