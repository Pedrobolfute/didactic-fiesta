function falarMeuNome(){
  console.log('My name is Unknown')
}

const referenciaNova = falarMeuNome

referenciaNova()

function falarMeuNomeCompleto(falarMeuNome){
  falarMeuNome()
  console.log('PHSP')
}

falarMeuNomeCompleto(falarMeuNome)