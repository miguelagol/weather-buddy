import React from 'react';
import PropTypes from 'prop-types';

export default class CityInputHandler extends React.Component {
   state = {
      city: '',
   };

   static propTypes = {
      history: PropTypes.object.isRequired,
      children: PropTypes.func.isRequired,
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
      const city = event.target.value;
      this.setState({ city });
   };

   render() {
      const { children } = this.props;

      return children(this.handleChangeCity, this.handleClick);
   }
}
