//Operador de spread que só concatena tudo em um argumento só
function concatArray<T>(...itens: T[]):T[]{ // T pra deixar o retorno da função como dinâmico (isso é muito útil)
  return new Array().concat(...itens) //... > operador de spread
}

const numArray = concatArray<number[]>([1, 3], [2])
numArray.push([32])

const numArray2 = concatArray<string[]>(['dede', 'aaa'], ['rrr'])
console.log(numArray)
console.log(numArray2)