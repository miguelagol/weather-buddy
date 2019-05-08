import forecastDataMapper from './forecastDataMapper';
import config from '../config/config';

async function fetchWeatherData(city) {
   const { apiID, baseURL } = config;

   const fetchWeather = await fetch(
      `${baseURL}/forecast?q=${city}&APPID=${apiID}&units=metric&lang={pl}`
   );

   return await fetchWeather.json();
}

export default async function getWeatherData(city) {
   const fetchData = await fetchWeatherData(city);

   const weatherData = forecastDataMapper(fetchData);

   return weatherData;
}
