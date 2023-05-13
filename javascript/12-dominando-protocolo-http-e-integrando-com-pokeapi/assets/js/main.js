//const {pokemonLayout} = require('./listaPokemon')


const offset = 0
const limit = 10
//pokemonLayout()

const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`

fetch(url)
  .then((response) => response.json())
  .then(function (jsonBody) {
    let keptPokemons = jsonBody.results
    //console.log(keptPokemons)

    for (let i = 0; i <= keptPokemons.length - 2; i++) {

      let keptUrlPokemons = keptPokemons[i + 1].url
      fetch(keptUrlPokemons)
        .then((response) => response.json())
        .then(function (pokeJsonBody) {
          keptUrlPokemons = pokeJsonBody
          console.log(keptUrlPokemons)


          const getOl = document.getElementsByClassName('pokemons')[0]

          const li = document.createElement('li')
          li.classList.add('pokemon')
          getOl.appendChild(li)

          const span = document.createElement('span')
          span.classList.add('number')
          span.textContent = '#' + ('000' + keptUrlPokemons.id).slice(-3)
          li.appendChild(span)

          const span1 = document.createElement('span')
          span1.classList.add('name')
          span1.textContent = `${keptPokemons[i + 1].name}`
          li.appendChild(span1)

          const div = document.createElement('div')
          div.classList.add('detail')
          li.appendChild(div)

          const ol = document.createElement('ol')
          ol.classList.add('types')
          div.appendChild(ol)

          const liType = document.createElement('li')
          liType.classList.add('type')
          liType.textContent = keptUrlPokemons.types[0].type.name
          ol.appendChild(liType)

          // const liType1 = document.createElement('li')
          // liType1.classList.add('type')
          //   liType1.textContent = liType1.textContent = keptUrlPokemons.types[1].type.name
          // ol.appendChild(liType1)

          const img = document.createElement('img')
          img.setAttribute('src', `${keptUrlPokemons.sprites.front_default}`)
          console.log(`${keptUrlPokemons.sprites.front_default}`)

          div.appendChild(img)
        })


    }

  })
  .catch((error) => console.error(error))
