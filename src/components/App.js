import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home.js';
import Forecast from './Forecast.js';
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
                  <Route exact path="/" render={() => {}} />
                  <Route component={CityForm} />
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

function CityForm() {
   return (
      <div className={css['header-form']}>
         <Input variant="small" />
         <Button type="button">Get Weather</Button>
      </div>
   );
}
