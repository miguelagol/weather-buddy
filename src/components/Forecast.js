import React from 'react';
import PropTypes from 'prop-types';
import getWeekDayAndTemperature from '../utils/api';
import css from './Forecast.module.css';

export default class Forecast extends React.Component {
   state = {
      day: undefined,
      temperature: undefined,
   };

   static propTypes = {
      location: PropTypes.object.isRequired,
   };

   async componentDidMount() {
      const paramsString = this.props.location.search;

      const searchParams = new URLSearchParams(paramsString);
      const city = searchParams.get('city');

      const { day, temperature } = await getWeekDayAndTemperature(city);

      this.setState({
         day,
         temperature,
      });
   }

   render() {
      return (
         <div className={css['forecast-container']}>
            <div>{this.state.day}</div>
            <div>{this.state.temperature}</div>
         </div>
      );
   }
}
