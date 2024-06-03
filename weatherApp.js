
const apiKey = "e1802a4312942c2f7c8c4edb617eb85a";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=";


const get_weather_data = async (city) => 
{
    let response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    console.log(response)
    let data = await response.json();
    console.log(data)
}


get_weather_data("rangpur")