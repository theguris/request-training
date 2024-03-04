export async function disneyCharacters (listData){
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
}