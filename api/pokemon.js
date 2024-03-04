export async function pokemonAPI(randomIndex, listData) {
  // Crio a LI do meu request
	const pokemonName = document.createElement("li");
	// Faco meu request e armazeno a resposta
	const responsePokemon = await axios.get("https://pokeapi.co/api/v2/pokemon/");
	// Armazeno a informacao que eu vou mostrar
	const namePokemon = responsePokemon.data.results[randomIndex].name;
	// Adiciono essa informacao no LI da minha request
	pokemonName.textContent = namePokemon;
	// Adiciono a minha LI dentro da UL
	listData.appendChild(pokemonName);
}