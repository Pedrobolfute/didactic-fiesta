const lista = [0,9,8,7,6,5,4]

const listaNumerosPares =  lista.filter((element) => {
  return (element % 2 === 0)
})

console.log(listaNumerosPares)

//Igual o forEach mas ele retorna uma nova lista apartir da condição.