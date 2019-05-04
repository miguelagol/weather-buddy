import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home.js';
import Button from './Button.js';
import Input from './Input.js';
import css from './App.module.scss';

export default function App() {
   return (
      <Router>
         <div className={css.App}>
            <header className={css['App-header']}>
               <h1 className={css.title}>Weather Buddy</h1>
               <Input checkVisibility="true" />
               <Button checkVisibility="true" text={'Get Weather'} />
            </header>
            <Switch>
               <Route exact path="/" component={Home} />
               <Route render={() => <p>Not Found</p>} />
            </Switch>
         </div>
      </Router>
   );
}
