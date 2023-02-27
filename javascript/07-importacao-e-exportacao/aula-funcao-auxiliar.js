function gets(){
  return 10;
}

function print(texto){
  console.log(texto);
}

//Antigamente exportava assim.
module.exports = {
  gets: gets,
  print: print
}

//Agora pode ser exportado assim.
//module.exports = {gets, print}

//Poderia exportar a func direto tbm...
//module.export.gets = gets