
const apiKey = "appid=e1802a4312942c2f7c8c4edb617eb85a";
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=dhaka&${apiKey}`;
const city = document.querySelector(".city");
const temp = document.querySelector(".temp");
const humidity = document.querySelector(".humidity");
const windSpeed = document.querySelector(".wind-speed");


const get_weather_data = (async () => 
{
    let response = await fetch(apiUrl);
    let data = await response.json();
    console.log(data)

    city.innerHTML = data.name;
    temp.innerHTML = data.main.temp;
    humidity.innerHTML = data.main.humidity;
    windSpeed.innerHTML = data.wind.speed;
})();