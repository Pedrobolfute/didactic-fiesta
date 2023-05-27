# Conteudo

- First class function

- High order function

## Funções

* Function declariation

- No hoisting: suas declarações são jogadas pra cima da func.
declaração vao vir primeiro
EX:

newFunc()

function newFunc(){
  let opa = 'opa'
  console.log(opa)
}

//Vai rodar, mesmo chamando a func antes...

* Funciton expression

const oldFunc = aFunc(){
  console.log('agua')
}

oldFunc()

//Aqui vai rodar, mas se eu chamasse antes 

oldFunc()

const oldFunc(){
  ...
}

Iria dar erro.

**Diferença entre um function com arrowFunction**

function func1(){
  console.log(this)
}

- Tem contexto

const func2 = () => {
  console.log(this)
}
- Não tem contexto
