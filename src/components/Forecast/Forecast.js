import React from 'react';
import PropTypes from 'prop-types';
import getWeatherData from '../../utils/api';
import css from './Forecast.module.scss';

export default class Forecast extends React.Component {
   state = {
      city: '',
      weather: [],
   };

   static propTypes = {
      location: PropTypes.object.isRequired,
   };

   async componentDidMount() {
      const paramsString = this.props.location.search;

      const searchParams = new URLSearchParams(paramsString);
      const city = searchParams.get('city');

      const weatherData = await getWeatherData(city);

      this.setState({
         city,
         weather: weatherData,
      });
   }

   render() {
      const { city, weather } = this.state;

      return (
         <div className={css['forecast-container']}>
            <h2>{city}</h2>
            <div className={css['days-container']}>
               {weather.map(
                  (
                     {
                        day,
                        date,
                        time,
                        temperature,
                        temperatureMin,
                        temperatureMax,
                        weatherDescription,
                        weatherIcon,
                     },
                     index
                  ) => (
                     <Day
                        key={index}
                        day={day}
                        date={date}
                        time={time}
                        temp={temperature}
                        tempMin={temperatureMin}
                        tempMax={temperatureMax}
                        weatherDesc={weatherDescription}
                        icon={weatherIcon}
                     />
                  )
               )}
            </div>
         </div>
      );
   }
}

class Day extends React.Component {
   static propTypes = {
      day: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      time: PropTypes.string.isRequired,
      temp: PropTypes.number.isRequired,
      tempMin: PropTypes.number.isRequired,
      tempMax: PropTypes.number.isRequired,
      weatherDesc: PropTypes.string.isRequired,
      icon: PropTypes.string.isRequired,
   };

   render() {
      const {
         day,
         date,
         time,
         temp,
         tempMin,
         tempMax,
         weatherDesc,
         icon,
      } = this.props;

      return (
         <div className={css.day}>
            <h3 className={css.date}>
               {day} {date}
            </h3>
            <h2 className={css.time}>{time}</h2>
            <div>
               <div>Temp. : {temp}&deg;C</div>
               <div>Temp. Min: {tempMin}&deg;C</div>
               <div>Temp. Max: {tempMax}&deg;C</div>
            </div>
            <div>
               {weatherDesc}
               <img
                  src={`http://openweathermap.org/img/w/${icon}.png`}
                  alt="Weather icon"
               />
            </div>
         </div>
      );
   }
}
