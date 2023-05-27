const fs = require('fs')
const path = require('path')

const filePath = path.resolve(__dirname, 'tarefas.csv')

const promessaDeLeituraDoArquivo = fs.promises.readFile(filePath)

// promessaDeLeituraDoArquivo
//   .then((arquivo) => arquivo.toString('utf8'))
//   .then((textoDoArquivo) => textoDoArquivo.split('\n').slice(1))
//   .then((linhaSemCabecalho) => linhaSemCabecalho.map((linha) => {
//     const {nome, feito} = linha.split(';')
//     return{
//       nome,
//       feito: feito === 'true'
//     }
//   }))
//   .then((listaTarefe) => console.log(listaTarefe))
//   .catch((error) => console.log('Merda!!', error))


//O codigo não é sincrono mas é como se fosse
async function buscarArquivo(){
  try {
    const arquivo = await fs.promises.readFile(filePath)
    const textoDoArquivo = arquivo.toString('utf8')
    console.log(textoDoArquivo)      
  } catch (error) {
    console.log(error)
  } finally {
    console.log('Finalizou')
  }
}
buscarArquivo()