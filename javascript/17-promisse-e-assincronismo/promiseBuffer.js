const fs = require('fs')
const path = require('path')

const filePath = path.resolve(__dirname, 'tarefas.csv')

const promessaDeLeituraDoArquivo = fs.promises.readFile(filePath)

promessaDeLeituraDoArquivo
  .then((arquivo) => arquivo.toString('utf8'))
  .then((textoDoArquivo) => textoDoArquivo.split('\n').slice(1))
  .then((linhaSemCabecalho) => linhaSemCabecalho.map((linha) => {
    const {nome, feito} = linha.split(';')
    return{
      nome,
      feito: feito === 'true'
    }
  }))
  .then((listaTarefe) => console.log(listaTarefe))
  .catch((error) => console.log('Merda!!', error))

  //erro no destructring... but this is the logic!