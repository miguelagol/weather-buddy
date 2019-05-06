const APIID = '13dbfdfa1e16db2e69a04c4207524f42';

async function fetchWeatherData(city) {
   const fetchWeather = await fetch(
      `http://api.openweathermap.org/data/2.5/forecast?q=${city}&APPID=${APIID}&units=metric&lang={pl}`
   );

   return await fetchWeather.json();
}

export default async function getWeekDayAndTemperature(city) {
   const WeatherData = await fetchWeatherData(city);
   const temperature = await WeatherData.list[0].main.temp;
   const timestamp = await WeatherData.list[0].dt;

   const days = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
   ];
   const date = new Date(timestamp);
   const day = days[date.getDay()];
   return { temperature, day };
}
