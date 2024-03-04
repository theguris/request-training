export async function rickAndMortyAPI(randomIndex, listData) {
  const rickAndMorty = document.createElement("li");
  rickAndMorty.setAttribute("id", "RickAndMorty");
  const rickAndMortyImg = document.createElement("img");

  const responseRAM = await axios.get(
    "https://rickandmortyapi.com/api/character"
  );

  const rickAndMortyInfo = responseRAM.data.results[randomIndex].name;
  const characterImage = responseRAM.data.results[randomIndex].image;

  rickAndMortyImg.setAttribute("src", characterImage);
  rickAndMorty.textContent = rickAndMortyInfo;

  listData.appendChild(rickAndMorty);
  rickAndMorty.appendChild(rickAndMortyImg);
}
