export async function randomJokes(listData) {
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
}
