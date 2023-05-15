const pokemonList = document.getElementById('pokemonList')
const loadMoreButton = document.getElementById('loadMoreButton')
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

          <img src="${pokemon.photo}" alt="${pokemon.name}">
        </div>
      </li>
    `
    ).join('')

    //map convert um items da lista em outro coisa, como string e array.
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