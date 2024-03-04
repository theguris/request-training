export async function randomMemes(listData) {
  const randomMemes = Math.floor(Math.random() * 99);

  const memesText = document.createElement("li");
  const memesImage = document.createElement("img");

  const responseMemes = await axios.get("https://api.imgflip.com/get_memes");

  const textMeme = responseMemes.data.data.memes[randomMemes].name;
  const imageMeme = responseMemes.data.data.memes[randomMemes].url;
  memesImage.setAttribute("src", imageMeme);

  memesText.textContent = textMeme;

  listData.appendChild(memesText);
  memesText.appendChild(memesImage);

  console.log(responseMemes.data.data.memes[randomMemes]);
}
