const lista = [1,2,3,4,5,6]

lista.forEach((value, i, listRef) => {
  console.log(value, i, listRef)
} )


const cb = (value, i, listRef) => {
  console.log(value, i, listRef)
}

lista.forEach(cb)


//ForEach é a mesma coisa q esse for aki.
for(let i = 0; lista.length; i++){
  const element = array[i]
  cb(element, i, lista)
}

//ForEach é bom mas ainda é mais lento que o for.