// 10 apis publicas
// 10 consoles da informacao
// nao pode ter autenticacao.. (token, auth, ApiKey)

// DOC:
// (ok) - https://pokeapi.co/api/v2/pokemon/
// (ok) - https://alexwohlbruck.github.io/cat-facts/
// (ok) - https://rickandmortyapi.com/

import { pokemonAPI, rickAndMortyAPI, catFacts, dogsRandomImages, randomJokes, weatherLocal, foodImages, disneyCharacters, uselessRandomFacts, newsLetter, randomMemes} from "./api/index.js";

(async () => {
  // Pegando a UL
  const listData = document.getElementById("name-list");
  const randomIndex = Math.floor(Math.random() * 20);

  await pokemonAPI(randomIndex, listData);
	await rickAndMortyAPI(randomIndex, listData);
  await catFacts(listData);
  await dogsRandomImages(listData);
  await randomJokes(listData);
  await weatherLocal(listData);
  await foodImages(listData);
  await disneyCharacters(listData);
  await uselessRandomFacts(listData);
  await newsLetter(listData);
  await randomMemes(listData);

})();