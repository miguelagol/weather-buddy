import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import Home from './Home.js';
import Button from './Button';
import Input from './Input';
import css from './App.module.scss';

export default function App() {
   return (
      <Router>
         <div className={css.App}>
            <header className={css['App-header']}>
               <h1 className={css.title}>Weather Buddy</h1>
               <Switch>
                  {/* <Route exact path="/" render={() => {}} /> */}
                  <Route component={CityForm} />
               </Switch>
            </header>
            <Switch>
               <Route exact path="/" component={Home} />
               <Route render={() => <p>Not Found</p>} />
            </Switch>
         </div>
      </Router>
   );
}

function CityForm() {
   return (
      <div className={css['header-form']}>
         <Input className={css['header-input']} />
         <Button className={css['header-button']} type="submit">
            Get Weather
         </Button>
      </div>
   );
}

CityForm.propTypes = {
   buttonText: PropTypes.string,
};

CityForm.defaultProps = {
   buttonText: undefined,
};
