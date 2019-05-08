export default function forecastDataMapper(fetchData) {
   const list = fetchData.list;
   const listArray = Array.from(list);

   const weatherData = [];

   for (let i = 0; i < listArray.length; i++) {
      weatherData.push({
         day: getWeekDay(listArray[i].dt_txt),
         date: getDate(listArray[i].dt_txt),
         time: getTime(listArray[i].dt_txt),
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

      const date = new Date(dateString);

      return days[date.getDay()];
   }

   function getDate(dateString) {
      let date = new Date(dateString);
      date = ['0' + date.getDate(), '0' + (date.getMonth() + 1)].map(newDate =>
         newDate.slice(-2)
      );

      return date.slice(0, 2).join('.');
   }

   function getTime(dateString) {
      let time = new Date(dateString);
      time = ['0' + time.getHours(), '0' + time.getMinutes()].map(newTime =>
         newTime.slice(-2)
      );

      return time.slice(0, 2).join(':');
   }

   return weatherData;
}
