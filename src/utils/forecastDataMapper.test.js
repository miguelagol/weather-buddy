import forecastDataMapper from './forecastDataMapper';

test('correctly maps forecast data to expected structure', () => {
   const initialData = {
      list: [
         {
            dt: 1557090000,
            main: {
               temp: 279.3,
               temp_min: 278.4,
               temp_max: 279.3,
               pressure: 1012.76,
               sea_level: 1012.76,
               grnd_level: 980.07,
               humidity: 82,
               temp_kf: 0.9,
            },
            weather: [
               {
                  id: 500,
                  main: 'Rain',
                  description: 'light rain',
                  icon: '10n',
               },
            ],
            clouds: { all: 99 },
            wind: { speed: 2.33, deg: 13.691 },
            rain: { '3h': 0.312 },
            sys: { pod: 'n' },
            dt_txt: '2019-05-05 21:00:00',
         },
         {
            dt: 1557100800,
            main: {
               temp: 278.63,
               temp_min: 277.949,
               temp_max: 278.63,
               pressure: 1012.71,
               sea_level: 1012.71,
               grnd_level: 980.09,
               humidity: 84,
               temp_kf: 0.68,
            },
            weather: [
               {
                  id: 804,
                  main: 'Clouds',
                  description: 'overcast clouds',
                  icon: '04n',
               },
            ],
            clouds: { all: 98 },
            wind: { speed: 2.7, deg: 11.623 },
            rain: {},
            sys: { pod: 'n' },
            dt_txt: '2019-05-06 00:00:00',
         },
      ],
   };

   const expected = [
      {
         day: 'Sunday',
         date: '05.05',
         time: '21:00',
         temperature: 279,
         weatherDescription: 'light rain',
         weatherIcon: '10n',
      },
      {
         day: 'Monday',
         date: '06.05',
         time: '00:00',
         temperature: 278,
         weatherDescription: 'overcast clouds',
         weatherIcon: '04n',
      },
   ];
   expect(forecastDataMapper(initialData)).toStrictEqual(expected);
});
