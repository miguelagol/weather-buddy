import React from 'react';
import { Redirect } from 'react-router-dom';
import Button from './Button.js';
import Input from './Input.js';
import css from './Home.module.scss';

export default class Home extends React.Component {
   state = {
      toForecast: false,
   };

   handleClick = () => {
      this.setState({ toForecast: true });
   };

   render() {
      const { toForecast } = this.state;

      if (toForecast === true) {
         return <Redirect to="/forecast" />;
      }
      return (
         <div className={css.home}>
            <h2 className={css.title}>Enter a City</h2>
            <Input className={css['responsive-width']} variant="big" />
            <Button type="button" variant="big" onClick={this.handleClick}>
               Get Weather
            </Button>
         </div>
      );
   }
}
