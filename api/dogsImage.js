export async function dogsRandomImages(listData) {
  const imageDog = document.createElement("img");

  const responseDogs = await axios.get(
    "https://dog.ceo/api/breeds/image/random"
  );

  const dogsInfo = responseDogs.data.message;

  imageDog.setAttribute("src", dogsInfo);

  listData.appendChild(imageDog);
}
