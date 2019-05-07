import React from 'react';
import { Redirect } from 'react-router-dom';
import Button from './Button.js';
import Input from './Input.js';
import css from './Home.module.scss';

export default class Home extends React.Component {
   state = {
      switchToForecast: false,
      city: '',
   };

   handleClick = () => {
      this.setState({ switchToForecast: true });
   };

   handleChangeCity = event => {
      const introducedCity = event.target.value;
      this.setState({ city: introducedCity });
   };

   render() {
      const { switchToForecast, city } = this.state;

      if (switchToForecast) {
         return (
            <Redirect
               to={{
                  pathname: '/forecast',
                  search: `?city=${city}`,
               }}
            />
         );
      }
      return (
         <div className={css.home}>
            <h2 className={css.title}>Enter a City</h2>
            <form onSubmit={this.handleSubmit}>
               <Input
                  className={css['responsive-width']}
                  variant="big"
                  onChange={this.handleChangeCity}
               />
               <Button type="button" variant="big" onClick={this.handleClick}>
                  Get Weather
               </Button>
            </form>
         </div>
      );
   }
}
