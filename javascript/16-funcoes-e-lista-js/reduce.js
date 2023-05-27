const lista = [0,9,8,7,6,55,4,3,2,1]

const somaTodosnumeros = lista.reduce((previous, current) => {
  return previous + current
}, 0)

console.log(somaTodosnumeros)

//combina elementos.