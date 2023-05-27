const lista = [1,2,3,4,5,6,7,8,9]
const lista1 = [{nome: 'Thors'}, {nome: 'Joselito'}, {nome: 'Agora'},{nome: 'Sensei'}, {nome: 'Saul'}]

console.log(lista.join(' ._. '))

console.log(lista1.map((e) => e.nome).join('; '))

console.log(
  lista.map(e => e.nome)
  .filter((e) => e.startsWith('S'))
  .join('; ')
)