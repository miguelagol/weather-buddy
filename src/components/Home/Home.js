import React from 'react';
import PropTypes from 'prop-types';
import withCityInputHandling from '../withCityInputHandling';
import Button from '../Button';
import Input from '../Input';
import css from './Home.module.scss';

export default function Home({ history }) {
   const CityFormHome = withCityInputHandling(CityForm);

   return (
      <div className={css.home}>
         <h2 className={css.title}>Enter a City</h2>
         <CityFormHome history={history} />
      </div>
   );
}

Home.propTypes = {
   history: PropTypes.object.isRequired,
};

function CityForm({ handleChangeCity, handleClick }) {
   return (
      <>
         <Input
            className={css['home-input']}
            variant="big"
            onChange={handleChangeCity}
         />
         <Button type="button" variant="big" onClick={handleClick}>
            Get Weather
         </Button>
      </>
   );
}

CityForm.propTypes = {
   handleChangeCity: PropTypes.func.isRequired,
   handleClick: PropTypes.func.isRequired,
};
