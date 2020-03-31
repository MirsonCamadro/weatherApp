const location = "Talcahuano,cl";
const api_key = "a2d52b8bf9125764ad1643334f9c4f66";
const url_base_weather = "http://api.openweathermap.org/data/2.5/weather";

export const api_weather = `${url_base_weather}?q=${location}&appid=${api_key}`;