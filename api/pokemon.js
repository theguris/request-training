export async function pokemonAPI(randomIndex, listData) {
  const pokemonName = document.createElement("li");

  const responsePokemon = await axios.get("https://pokeapi.co/api/v2/pokemon/");

  const namePokemon = responsePokemon.data.results[randomIndex].name;

  pokemonName.textContent = namePokemon;
  listData.appendChild(pokemonName);
}
