export async function catFacts(listData){
  const randomCat = Math.floor(Math.random() * 5);

  const catFacts = document.createElement("li");

  const responseCats = await axios.get("https://cat-fact.herokuapp.com/facts");

  const textCat = responseCats.data[randomCat].text;

  catFacts.textContent = textCat;

  listData.appendChild(catFacts);
}