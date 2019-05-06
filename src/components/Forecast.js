import React from 'react';
import getWeekDayAndTemperature from '../utils/api';
import css from './Forecast.module.css';

export default class Forecast extends React.Component {
   state = {
      day: undefined,
      temperature: undefined,
   };
   async componentDidMount() {
      const Data = await getWeekDayAndTemperature('krakow');
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
