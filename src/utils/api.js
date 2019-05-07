const APIID = '13dbfdfa1e16db2e69a04c4207524f42';

async function fetchWeatherData(city) {
   const fetchWeather = await fetch(
      `http://api.openweathermap.org/data/2.5/forecast?q=${city}&APPID=${APIID}&units=metric&lang={pl}`
   );

   return await fetchWeather.json();
}

export default async function getWeekDayAndTemperature(city) {
   const fetchData = await fetchWeatherData(city);

   const list = fetchData.list;
   const listArray = Array.from(list);

   const weatherData = {};

   for (let i = 0; i < 5; i++) {
      weatherData[`day${i}`] = getWeekDay(listArray[i * 8].dt_txt);
      weatherData[`temperature${i}`] = roundTemperature(
         listArray[i * 8].main.temp
      );
   }

   function roundTemperature(temp) {
      return Math.round(temp);
   }

   function getWeekDay(dateString) {
      const days = [
         'Sunday',
         'Monday',
         'Tuesday',
         'Wednesday',
         'Thursday',
         'Friday',
         'Saturday',
      ];

      let date = new Date(dateString);

      return days[date.getDay()];
   }

   return weatherData;
}
