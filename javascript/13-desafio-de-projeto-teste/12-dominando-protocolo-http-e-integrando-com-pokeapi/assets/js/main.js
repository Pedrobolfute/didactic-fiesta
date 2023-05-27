const pokemonId = document.getElementById('pokemonList')
const loadMoreButton = document.getElementById('loadMoreButton')
const img = document.getElementsByClassName('img')[0]
let pokemon = document.getElementsByClassName('pokemon')
let keepLookingPokemon = [];
let keepNumberPokemon = -1;

const maxRecord = 151
const limit = 10
let offset = 0

function loadPokemonItems(offset, limit) {
  pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
    const newHTML = pokemons.map((pokemon) =>
      `
      <li class="pokemon ${pokemon.type}">
        <span class="number">${pokemon.number}</span>
        <span class="name">${pokemon.name}</span>

        <div class="detail">
          <ol class="types">
            ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
          </ol>

          <img src="${pokemon.photo}" alt="${pokemon.name}" class="img">
        </div>
      </li>
    `
    ).join('')
    pokemonId.innerHTML += newHTML
    seePokemon()
    unseePokemon()

  })
}
loadPokemonItems(offset, limit)


loadMoreButton.addEventListener('click', () => {
  offset += limit

  const qtRecordNextPage = offset + limit
  if (qtRecordNextPage >= maxRecord) {
    const newLimit = maxRecord - offset

    loadPokemonItems(offset, newLimit)

    loadMoreButton.parentElement.removeChild(loadMoreButton)

  } else {
    loadPokemonItems(offset, limit)
  }
})


function addDetails(newDetail){
  const newCard = `
  <div class="pokeDetails">
    <section>
        <span>Sobre</span>
        <span>Detalhes</span>
        <span>outros</span>
    </section>
    <section>
        <table>
            <tbody><tr><td>Species</td><td>Seed</td></tr>
            <tr><td>Height</td><td>0.7cm</td></tr>
            <tr><td>Weight</td><td>7kg</td></tr>
            <tr><td>Abilities</td><td>Overgrow, Chlorophyl</td></tr>
        </tbody></table>
    </section>
  </div>
  
  `
  newDetail.innerHTML += newCard
}


function removeDetails(){
  const pokeDetails = document.getElementsByClassName('pokeDetails')[0]
  pokeDetails.parentElement.removeChild(pokeDetails)
}
  
  
  function seePokemon(){
    let getPokemon = document.querySelectorAll('.pokemon')
      getPokemon.forEach(function(pokemon){
      pokemon.addEventListener('click', (e) => {
        let pokemonTarget = e.currentTarget
        keepLookingPokemon.push(pokemonTarget)
        keepNumberPokemon++
        addClasses(pokemonTarget)
        addDetails(pokemonTarget)
      })
    })
  }

  function unseePokemon(){
    let getOffPokemon = document.querySelector('h1')
      getOffPokemon.addEventListener('click', function(){
      removeClasses(keepLookingPokemon[keepNumberPokemon])  
      removeDetails()
      keepLookingPokemon.pop()
      keepNumberPokemon--
    })
  }


function addClasses(pokemon){
  let name = pokemon.querySelector('.name')
  let detail = pokemon.querySelector('.detail')
  let types = pokemon.querySelector('.types')
  let type = pokemon.querySelectorAll('.type')
  let img = pokemon.querySelector('.img')

  pokemon.classList.add('pokemonAux')
  name.classList.add('nameAux')
  detail.classList.add('detailAux')
  types.classList.add('typesAux')
  type[0].classList.add('typeAux')
  if(type[1]){
  type[1].classList.add('typeAux')
  }


  img.classList.add('imgAux')

  pokemon.classList.remove('pokemon')
  name.classList.remove('name')
  detail.classList.remove('detail')
  types.classList.remove('types')
  type[0].classList.remove('type')
  if(type[1]){
  type[0].classList.remove('type')
  }
  img.classList.add('img')
}

function removeClasses(pokemon){
  let name = pokemon.querySelector('.nameAux')
  let detail = pokemon.querySelector('.detailAux')
  let types = pokemon.querySelector('.typesAux')
  let type = pokemon.querySelectorAll('.typeAux')
  let img = pokemon.querySelector('.imgAux')

  pokemon.classList.add('pokemon')
  name.classList.add('name')
  detail.classList.add('detail')
  types.classList.add('types')
  type[0].classList.add('type')
  if(type[1]){
  type[1].classList.add('type')
  }
  img.classList.add('img')

  pokemon.classList.remove('pokemonAux')
  name.classList.remove('nameAux')
  detail.classList.remove('detailAux')
  types.classList.remove('typesAux')
  type[0].classList.remove('typeAux')
  if(type[1]){
  type[1].classList.remove('typeAux')
  }
  img.classList.remove('imgAux')
}