export async function uselessRandomFacts (listData){
  const randomFacts = document.createElement("li");
  randomFacts.setAttribute("id", "randomFacts");
  const uselessFacts = document.createElement("div");

  const responseFacts = await axios.get("https://uselessfacts.jsph.pl/api/v2/facts/random");

  const factsUseless = responseFacts.data.text;
  
  randomFacts.textContent = "RANDOM USELESS FACTS 🤓👇"
  uselessFacts.textContent = factsUseless;
  
  listData.appendChild(randomFacts);
  randomFacts.appendChild(uselessFacts);
}