import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home.js';
import CityForm from './CityForm.js';
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
