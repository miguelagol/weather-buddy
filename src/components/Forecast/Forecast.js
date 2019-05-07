import React from 'react';
import PropTypes from 'prop-types';
import getWeekDayAndTemperature from '../../utils/api';
import css from './Forecast.module.scss';

export default class Forecast extends React.Component {
   state = {
      city: '',
      day0: '',
      day1: '',
      day2: '',
      day3: '',
      day4: '',
      temperature0: 0,
      temperature1: 0,
      temperature2: 0,
      temperature3: 0,
      temperature4: 0,
   };

   static propTypes = {
      location: PropTypes.object.isRequired,
   };

   async componentDidMount() {
      const paramsString = this.props.location.search;

      const searchParams = new URLSearchParams(paramsString);
      const city = searchParams.get('city');

      const data = await getWeekDayAndTemperature(city);

      const {
         day0,
         day1,
         day2,
         day3,
         day4,
         temperature0,
         temperature1,
         temperature2,
         temperature3,
         temperature4,
      } = data;

      this.setState({
         city,
         day0,
         day1,
         day2,
         day3,
         day4,
         temperature0,
         temperature1,
         temperature2,
         temperature3,
         temperature4,
      });
   }

   render() {
      const {
         city,
         day0,
         day1,
         day2,
         day3,
         day4,
         temperature0,
         temperature1,
         temperature2,
         temperature3,
         temperature4,
      } = this.state;

      return (
         <div className={css['forecast-container']}>
            <h2>{city}</h2>
            <Day day={day0} temperature={temperature0} />
            <Day day={day1} temperature={temperature1} />
            <Day day={day2} temperature={temperature2} />
            <Day day={day3} temperature={temperature3} />
            <Day day={day4} temperature={temperature4} />
         </div>
      );
   }
}

class Day extends React.Component {
   static propTypes = {
      day: PropTypes.string.isRequired,
      temperature: PropTypes.number.isRequired,
   };

   render() {
      const { day, temperature } = this.props;
      return (
         <div className={css.day}>
            <h3>{day}</h3>
            <div>{temperature}&deg;C</div>
         </div>
      );
   }
}
