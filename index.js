// 10 apis publicas
// 10 consoles da informacao
// nao pode ter autenticacao.. (token, auth, ApiKey)

// DOC:
// (ok) - https://pokeapi.co/api/v2/pokemon/
// (ok) - https://alexwohlbruck.github.io/cat-facts/
// https://rickandmortyapi.com/

(async () => {
	// Pegando a UL
	const listData = document.getElementById("name-list");

	// -------------------------

	// Crio a LI do meu request
	const pokemonName = document.createElement("li");
	// Faco meu request e armazeno a resposta
	const responsePokemon = await axios.get("https://pokeapi.co/api/v2/pokemon/");
	// Armazeno a informacao que eu vou mostrar
	const namePokemon = responsePokemon.data.results[16].name;
	// Adiciono essa informacao no LI da minha request
	pokemonName.textContent = namePokemon;
	// Adiciono a minha LI dentro da UL
	listData.appendChild(pokemonName);

	// -------------------------

	const catFacts = document.createElement("li");

	const responseCats = await axios.get("https://cat-fact.herokuapp.com/facts");

	const textCat = responseCats.data[0].text;

	catFacts.textContent = textCat;

	listData.appendChild(catFacts);

	// -------------------------

	const rickAndMorty = document.createElement("li");

	const responseRAM = await axios.get("https://rickandmortyapi.com/api/character");

	const rickAndMortyInfo = responseRAM.data.results[0].name;
	
	rickAndMorty.textContent = rickAndMortyInfo;

	listData.appendChild(rickAndMorty);

	// -------------------------

	const dogs = document.createElement("li");

	const imageDog = document.createElement("img");

	const responseDogs = await axios.get("https://dog.ceo/api/breeds/image/random");

	const dogsInfo = responseDogs.data.message;

	imageDog.setAttribute("src", dogsInfo);

	listData.appendChild(imageDog);

	// -------------------------

	const jokes = document.createElement("li");
	const answer = document.createElement("span");

	const responseJokes = await axios.get("https://official-joke-api.appspot.com/random_joke");

	const jokesQuestion = responseJokes.data.setup;
	const jokesAnswer = responseJokes.data.punchline;

	jokes.textContent = jokesQuestion;
	answer.textContent = jokesAnswer;

	listData.appendChild(jokes);
	listData.appendChild(answer);
})();

const arrowFunction = () => {};
function normalFunction() {}

arrowFunction();
normalFunction();
