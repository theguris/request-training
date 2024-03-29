// 10 apis publicas
// 10 consoles da informacao
// nao pode ter autenticacao.. (token, auth, ApiKey)

// DOC:
// (ok) - https://pokeapi.co/api/v2/pokemon/
// (ok) - https://alexwohlbruck.github.io/cat-facts/
// (ok) - https://rickandmortyapi.com/

import { pokemonAPI, rickAndMortyAPI } from "./api/index.js";

(async () => {
  // Pegando a UL
  const listData = document.getElementById("name-list");
  const randomIndex = Math.floor(Math.random() * 20);

  await pokemonAPI(randomIndex, listData);
	await rickAndMortyAPI(randomIndex, listData);

  const randomCat = Math.floor(Math.random() * 5);

  const catFacts = document.createElement("li");

  const responseCats = await axios.get("https://cat-fact.herokuapp.com/facts");

  const textCat = responseCats.data[randomCat].text;

  catFacts.textContent = textCat;

  listData.appendChild(catFacts);

  // -------------------------

  
  // -------------------------

  const imageDog = document.createElement("img");

  const responseDogs = await axios.get(
    "https://dog.ceo/api/breeds/image/random"
  );

  const dogsInfo = responseDogs.data.message;

  imageDog.setAttribute("src", dogsInfo);

  listData.appendChild(imageDog);

  // -------------------------

  const jokes = document.createElement("li");
  jokes.setAttribute("id", "jokes");
  const answer = document.createElement("p");

  const responseJokes = await axios.get(
    "https://official-joke-api.appspot.com/random_joke"
  );

  const jokesQuestion = responseJokes.data.setup;
  const jokesAnswer = responseJokes.data.punchline;

  jokes.textContent = jokesQuestion;
  answer.textContent = jokesAnswer;

  listData.appendChild(jokes);
  jokes.appendChild(answer);

  // -------------------------

  const country = prompt("Qual cidade deseja ver o clima?");

  const weatherTemp = document.createElement("li");
  weatherTemp.setAttribute("id", "li-temp");
  const weatherRegion = document.createElement("p");
  const imageWeather = document.createElement("img");

  const responseWeather = await axios.get(
    `http://api.weatherapi.com/v1/current.json?key=f67742ca5b8e48b6bbc135200240303&q=${country}&aqi=no`
  );

  const weatherIcon = responseWeather.data.current.condition.icon;
  imageWeather.setAttribute("src", weatherIcon);

  weatherRegion.textContent = responseWeather.data.location.region;
  weatherTemp.textContent = responseWeather.data.current.temp_c + "\u00B0";

  listData.appendChild(weatherTemp);
  weatherTemp.appendChild(imageWeather);
  weatherTemp.appendChild(weatherRegion);

  // -------------------------

  const foodImage = document.createElement("img");

  const responseFood = await axios.get(`https://foodish-api.com/api/`);

  const imageFood = responseFood.data.image;
  foodImage.setAttribute("src", imageFood);

  listData.appendChild(foodImage);

  // -------------------------

  const randomDisney = Math.floor(Math.random() * 49);

  const disneyCharacter = document.createElement("li");
  const disneyFilms = document.createElement("span");
  const disneyImage = document.createElement("img");

  const responseDisney = await axios.get("https://api.disneyapi.dev/character");

  disneyCharacter.textContent = responseDisney.data.data[randomDisney].name;
  const imageDisney = responseDisney.data.data[randomDisney].imageUrl;
  disneyImage.setAttribute("src", imageDisney);
  disneyFilms.textContent = responseDisney.data.data[randomDisney].films[0];

  listData.appendChild(disneyCharacter);
  disneyCharacter.appendChild(disneyImage);
  disneyCharacter.appendChild(disneyFilms);

  // -------------------------

  const randomNews = Math.floor(Math.random() * 99);

  const newsTitle = document.createElement("li");
  const newsImage = document.createElement("img");
  const newsLink = document.createElement("span");

  const responseNews = await axios.get(
    `https://api.spaceflightnewsapi.net/v4/articles/${randomNews}/`
  );

  const imageNew = responseNews.data.image_url;
  newsImage.setAttribute("src", imageNew);
  newsTitle.textContent = responseNews.data.title;
  newsLink.textContent = responseNews.data.url;

  listData.appendChild(newsTitle);
  newsTitle.appendChild(newsImage);
  newsTitle.appendChild(newsLink);

  // -------------------------

  const randomFacts = document.createElement("span");
  randomFacts.setAttribute("id", "randomFacts");
  const uselessFacts = document.createElement("li");

  const responseFacts = await axios.get("https://uselessfacts.jsph.pl/api/v2/facts/random");

  const factsUseless = responseFacts.data.text;
  
  randomFacts.textContent = "RANDOM USELESS FACTS 🤓👇"
  uselessFacts.textContent = factsUseless;
  
  listData.appendChild(randomFacts);
  randomFacts.appendChild(uselessFacts);

  console.log(responseFacts);
})();

const arrowFunction = () => {};
function normalFunction() {}

arrowFunction();
normalFunction();
