import forecastDataMapper from './forecastDataMapper';

const APIID = '13dbfdfa1e16db2e69a04c4207524f42';

async function fetchWeatherData(city) {
   const fetchWeather = await fetch(
      `http://api.openweathermap.org/data/2.5/forecast?q=${city}&APPID=${APIID}&units=metric&lang={pl}`
   );

   return await fetchWeather.json();
}

export default async function getWeekDayAndTemperature(city) {
   const fetchData = await fetchWeatherData(city);

   const weatherData = forecastDataMapper(fetchData);

   return weatherData;
}
