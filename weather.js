
const apiKey = "appid=e1802a4312942c2f7c8c4edb617eb85a";
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=`;
const city = document.querySelector(".city");
const temp = document.querySelector(".temp");
const humidity = document.querySelector(".humidity");
const windSpeed = document.querySelector(".wind-speed");
let inputField = document.querySelector(".search input");
let btn = document.querySelector(".search button");
let img = document.querySelector(".weather img");


const get_weather_data = async (city) => 
{
    let response = await fetch(apiUrl + city + `&${apiKey}`);
    let data = await response.json();
    console.log(data)

    display_data(data);
};


const display_data = (data) => 
{
    city.innerHTML = data.name;
    temp.innerHTML = Math.round(data.main.temp) + "°c";
    humidity.innerHTML = data.main.humidity + "%";
    windSpeed.innerHTML = data.wind.speed + " km/h";

    if (data.weather[0].main === "Clouds") {
        img.src = "images/cloud-solid.svg";
    } else if (data.weather[0].main === "Rain") {
        img.src = "images/cloud-rain-solid.svg"
    } else if (data.weather[0].main === "Clear") {
        img.src = "images/cloud-sun-solid.svg"
    }
}


btn.addEventListener("click", () => 
{
    get_weather_data(inputField.value);
    inputField.value = "";
});