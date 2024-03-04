export async function newsLetter (listData){
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
}