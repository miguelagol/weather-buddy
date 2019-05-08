import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';
import Input from '../Input';
import css from './Home.module.scss';

export default class Home extends React.Component {
   state = {
      city: '',
   };

   static propTypes = {
      history: PropTypes.object.isRequired,
   };

   handleClick = () => {
      const { history } = this.props;
      const { city } = this.state;
      history.push({
         pathname: '/forecast',
         search: `?city=${city}`,
      });
   };

   handleChangeCity = event => {
      const introducedCity = event.target.value;
      this.setState({ city: introducedCity });
   };

   render() {
      return (
         <div className={css.home}>
            <h2 className={css.title}>Enter a City</h2>
            <Input
               className={css['home-input']}
               variant="big"
               onChange={this.handleChangeCity}
            />
            <Button type="button" variant="big" onClick={this.handleClick}>
               Get Weather
            </Button>
         </div>
      );
   }
}
