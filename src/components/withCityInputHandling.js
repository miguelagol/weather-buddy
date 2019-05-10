import React from 'react';
import PropTypes from 'prop-types';

export default function withCityInputHandling(Component) {
   return class withCityInputHandling extends React.Component {
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
         const city = event.target.value;
         this.setState({ city });
      };

      render() {
         const { city } = this.state;
         const { history, ...restProps } = this.props;

         return (
            <Component
               city={city}
               handleChangeCity={this.handleChangeCity}
               handleClick={this.handleClick}
               {...restProps}
            />
         );
      }
   };
}
