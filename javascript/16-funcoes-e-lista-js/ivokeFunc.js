const Pessoa = {
  nome: 'pedro',
  idade: 4
}

function gritar(prefixo){
  console.log(prefixo ,this.nome)
}
//Não esta no contexto do OBJ

function teste(){
  console.log('teste')
}

teste()

//Invocar func como objeto. Então temos métodos...


//Aplicando contexto parafunções com apply ou call
gritar.apply(Pessoa, ['olaaa'])

gritar.call(Pessoa, 'opaa')


//Aplicando contexto com op new
