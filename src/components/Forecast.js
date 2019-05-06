import React from 'react';
import queryString from 'query-string';
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
      const { city } = queryString.parse(this.props.location.search);

      const Data = await getWeekDayAndTemperature(city);
      const { day, temperature } = Data;

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
