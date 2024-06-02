const apiKey = "4b257fbdc57d6f636427462a496b95f1"; // Replace with your OpenWeather API key
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

if (response.status == 404) {
document.querySelector(".error").style.display = "block";
document.querySelector(".weather").style.display = "none";
} else {
const data = await response.json();

document.querySelector(".city").innerHTML = data.name;
document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
document.querySelector(".wind").innerHTML = data.wind.speed + " km/hr";

switch (data.weather[0].main) {
case "Clouds":
weatherIcon.src = "./images/clouds.jpg";
break;
case "Clear":
weatherIcon.src = "./images/clear.jpg";
break;
case "Rain":
weatherIcon.src = "./images/rain.jpg";
break;
case "Drizzle":
weatherIcon.src = "./images/drizzle.jpg";
break;
case "Mist":
weatherIcon.src = "./images/mist.jpg";
break;
default:
weatherIcon.src = "./images/default.jpg";
}

document.querySelector(".weather").style.display = "block";
document.querySelector(".error").style.display = "none";
}
}

searchBtn.addEventListener("click", () => {
checkWeather(searchBox.value);
});

checkWeather("Dubai"); // Initial weather check for a default city