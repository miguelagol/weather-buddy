export default function forecastDataMapper(fetchData) {
   const list = fetchData.list;
   const listArray = Array.from(list);

   const weatherData = [];

   for (let i = 0; i < listArray.length; i++) {
      weatherData.push({
         day: getWeekDay(listArray[i].dt_txt),
         temperature: roundTemperature(listArray[i].main.temp),
         temperatureMax: roundTemperature(listArray[i].main.temp_max),
         temperatureMin: roundTemperature(listArray[i].main.temp_min),
         weatherDescription: listArray[i].weather[0].description,
         weatherIcon: listArray[i].weather[0].icon,
      });
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
