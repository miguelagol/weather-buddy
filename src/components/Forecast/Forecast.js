import React from 'react';
import PropTypes from 'prop-types';
import getWeatherData from '../../utils/api';
import css from './Forecast.module.scss';

function getCityQueryParam({ search }) {
   const searchParams = new URLSearchParams(search);
   return searchParams.get('city');
}

export default class Forecast extends React.Component {
   state = {
      city: '',
      weather: [],
   };

   static propTypes = {
      location: PropTypes.object.isRequired,
   };

   async componentDidMount() {
      const city = getCityQueryParam(this.props.location);

      const weatherData = await getWeatherData(city);

      this.setState({
         city,
         weather: weatherData,
      });
   }

   async componentDidUpdate(prevProps) {
      const newCity = getCityQueryParam(this.props.location);
      const prevCity = getCityQueryParam(prevProps.location);

      if (prevCity !== newCity) {
         const weatherData = await getWeatherData(newCity);

         this.setState({
            city: newCity,
            weather: weatherData,
         });
      }
   }

   render() {
      const { city, weather } = this.state;

      return (
         <div className={css['forecast-container']}>
            <h2>{city}</h2>
            <div className={css['days-container']}>
               {weather.map(({ ...rest }, index) => (
                  <Day key={index} {...rest} />
               ))}
            </div>
         </div>
      );
   }
}

function Day({
   day,
   date,
   time,
   temperature,
   weatherDescription,
   weatherIcon,
}) {
   return (
      <div className={css.day}>
         <h3 className={css.date}>
            {day} {date}
         </h3>
         <h2 className={css.time}>{time}</h2>
         <div>Temp. : {temperature}&deg;C</div>
         <div>
            {weatherDescription}
            <img
               src={`http://openweathermap.org/img/w/${weatherIcon}.png`}
               alt="Weather icon"
            />
         </div>
      </div>
   );
}

Day.propTypes = {
   day: PropTypes.string.isRequired,
   date: PropTypes.string.isRequired,
   time: PropTypes.string.isRequired,
   temperature: PropTypes.number.isRequired,
   weatherDescription: PropTypes.string.isRequired,
   weatherIcon: PropTypes.string.isRequired,
};
