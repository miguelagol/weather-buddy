import React from 'react';
import PropTypes from 'prop-types';
import getWeekDayAndTemperature from '../../utils/api';
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

      const data = await getWeekDayAndTemperature(city);

      this.setState({
         weather: data,
      });
   }

   render() {
      const { city, weather } = this.state;

      return (
         <div className={css['forecast-container']}>
            <h2>{city}</h2>
            <div>
               {weather.map((day, index) => (
                  <Day
                     key={index}
                     day={day.day}
                     temperature={day.temperature}
                     icon={day.weatherIcon}
                  />
               ))}
            </div>
         </div>
      );
   }
}

class Day extends React.Component {
   static propTypes = {
      day: PropTypes.string.isRequired,
      temperature: PropTypes.number.isRequired,
      icon: PropTypes.string.isRequired,
   };

   render() {
      const { day, temperature, icon } = this.props;
      return (
         <div className={css.day}>
            <h3>{day}</h3>
            <div>{temperature}&deg;C</div>
            <img
               src={`http://openweathermap.org/img/w/${icon}.png`}
               alt="Weather icon"
            />
         </div>
      );
   }
}
