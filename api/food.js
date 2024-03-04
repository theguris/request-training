export async function foodImages (listData){
  const foodImage = document.createElement("img");

  const responseFood = await axios.get(`https://foodish-api.com/api/`);

  const imageFood = responseFood.data.image;
  foodImage.setAttribute("src", imageFood);

  listData.appendChild(foodImage);
}