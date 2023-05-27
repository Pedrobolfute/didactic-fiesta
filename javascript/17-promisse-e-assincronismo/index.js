const { error } = require('console');
//const fs = require('fs')

//Outra forma de buscar pelo arquivo
const path = require('path')
const filePath = path.resolve(__dirname, 'tarefas.csv')

const promesaLeituraArquivo = fs.promises.readFile(filePath)

promesaLeituraArquivo.then((arquivo) => {
  console.log(arquivo.toString('utf8'))
}).catch((err) => {
  console.log('Error.', error)
});