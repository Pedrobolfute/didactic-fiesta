const pokemonList = document.getElementById('pokemonList')
const loadMoreButton = document.getElementById('loadMoreButton')
const pokemon = document.getElementsByClassName('pokemon')
const img = document.getElementsByClassName('img')[0]

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
    pokemonList.innerHTML += newHTML
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






function addDetails(){
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
  newTeste.innerHTML += newCard
  console.log(newTeste)
}

function newTeste(){
  return console.log()
}



function addClasses(){
let pokemon = document.getElementsByClassName('pokemon')[0]
let name = document.getElementsByClassName('name')[0]
let detail = document.getElementsByClassName('detail')[0]
let types = document.getElementsByClassName('types')[0]
let type = document.getElementsByClassName('type')[0]
let img = document.getElementsByClassName('img')[0]

pokemon.classList.add('pokemonAux')
name.classList.add('nameAux')
detail.classList.add('detailAux')
types.classList.add('typesAux')
type.classList.add('typeAux')
img.classList.add('imgAux')

pokemon.classList.remove('pokemon')
name.classList.remove('name')
detail.classList.remove('detail')
types.classList.remove('types')
type.classList.remove('type')
img.classList.remove('img')
}

function removeClasses(){
  let pokemonAux = document.getElementsByClassName('pokemonAux')[0]
  let nameAux = document.getElementsByClassName('nameAux')[0]
  let detailAux = document.getElementsByClassName('detailAux')[0]
  let typesAux = document.getElementsByClassName('typesAux')[0]
  let typeAux = document.getElementsByClassName('typeAux')[0]
  let imgAux = document.getElementsByClassName('imgAux')[0]

  pokemonAux.classList.add('pokemon')
  nameAux.classList.add('name')
  detailAux.classList.add('detail')
  typesAux.classList.add('types')
  typeAux.classList.add('type')
  imgAux.classList.add('img')

  pokemonAux.classList.remove('pokemonAux')
  nameAux.classList.remove('nameAux')
  detailAux.classList.remove('detailAux')
  typesAux.classList.remove('typesAux')
  typeAux.classList.remove('typeAux')
  imgAux.classList.remove('imgAux')
}