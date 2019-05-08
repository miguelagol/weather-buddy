import { format } from 'date-fns';

function getTemperature(tempMin, tempMax) {
   const tempAverage = (tempMin + tempMax) / 2;
   return Math.round(tempAverage);
}

function getWeekDay(date) {
   return format(date, 'dddd');
}

function getDate(date) {
   return format(date, 'DD.MM');
}

function getTime(date) {
   return format(date, 'HH:mm');
}

export default function forecastDataMapper(fetchData) {
   const listArray = fetchData.list;

   return listArray.map(({ dt_txt, main, weather }) => {
      const date = new Date(dt_txt);
      const { description, icon } = weather[0];

      return {
         day: getWeekDay(date),
         date: getDate(date),
         time: getTime(date),
         temperature: getTemperature(main.temp_min, main.temp_max),
         weatherDescription: description,
         weatherIcon: icon,
      };
   });
}
