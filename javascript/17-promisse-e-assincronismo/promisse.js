const promessaDeUmNumeroQualquer = new Promise((resolve, reject) => {
  const numero = parseInt(Math.random() * 100)
  resolve(numero)
})

promessaDeUmNumeroQualquer
  .then((value) => {
    console.log(value)
  })
  .catch((error) => {
    console.log(error)
  })
  .finally(() => {
    console.log('finalizou')
  })


  //Simulando assincronismo


  const assincronismoPromisse = new Promise((resolve, reject) => {
  
    setTimeout(() => {
      const numeor = parseInt(Math.random()*100)
      resolve(numeor)
    }, 2000)

  })
  

  assincronismoPromisse
  .then((value) => {
    console.log(value)
  })
  .catch((error) => {
    console.log(error)
  })
  .finally(() => {
    console.log('finalizou')
  })
  console.log('Assincronismo acontecendo...')