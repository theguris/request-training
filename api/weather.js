export async function weatherLocal (listData){
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
}