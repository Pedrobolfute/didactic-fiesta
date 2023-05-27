function func1(){
  console.log(this)
}

const func2 = () => {
  console.log(this)
}

const pedro = {
  nome: 'pedro',
  func1,
  func2
}

pedro.func1()
pedro.func2()
