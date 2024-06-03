
const apiKey = "e1802a4312942c2f7c8c4edb617eb85a";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=";
const temp = document.querySelector(".temp");
const city = document.querySelector(".city");
const humidity = document.querySelector(".humidity")
let windSpeed = document.querySelector(".wind");
let btn = document.querySelector(".search button");
let inputField = document.querySelector(".search input");


const get_weather_data = async (city) => 
{
    let response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    let data = await response.json();
    console.log(data)

    display_weather_data(data)

}


const display_weather_data = (data) => 
{
    temp.innerHTML = data.main.temp;
    humidity.innerHTML = data.main.humidity + "%";
    city.innerHTML = data.name;
    windSpeed.innerHTML = data.wind.speed + " km/h";
}


btn.addEventListener("click", () => 
{
    get_weather_data(inputField.value);
    inputField.value = "";
})