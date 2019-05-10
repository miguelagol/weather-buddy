import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import withCityInputHandling from '../withCityInputHandling';
import Home from '../Home';
import Forecast from '../Forecast';
import Button from '../Button';
import Input from '../Input';
import css from './App.module.scss';

export default function App() {
   return (
      <Router>
         <div className={css.App}>
            <header className={css['App-header']}>
               <Link className={css.title} to={'/'}>
                  Weather Buddy
               </Link>

               <Switch>
                  <Route exact path="/" render={() => {}} />
                  <Route component={withCityInputHandling(CityForm)} />
               </Switch>
            </header>
            <Switch>
               <Route exact path="/" component={Home} />
               <Route path="/forecast" component={Forecast} />
               <Route render={() => <p>Not Found</p>} />
            </Switch>
         </div>
      </Router>
   );
}

function CityForm({ handleChangeCity, handleClick }) {
   return (
      <div className={css['header-form']}>
         <Input variant="small" onChange={handleChangeCity} />
         <Button type="button" onClick={handleClick}>
            Get Weather
         </Button>
      </div>
   );
}

CityForm.propTypes = {
   handleChangeCity: PropTypes.func.isRequired,
   handleClick: PropTypes.func.isRequired,
};
