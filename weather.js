
const apiKey = "appid=e1802a4312942c2f7c8c4edb617eb85a";
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=dhaka&${apiKey}`;


const get_weather_data = async () => 
{
    let response = await fetch(apiUrl);
    let data = await response.json();
    console.log(data)
}