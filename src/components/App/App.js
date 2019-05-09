import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
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

class CityForm extends React.Component {
   state = {
      city: '',
   };

   static propTypes = {
      history: PropTypes.object.isRequired,
   };

   handleInputChange = event => {
      const city = event.target.value;
      this.setState({ city });
   };

   handleClick = () => {
      const { history } = this.props;
      const { city } = this.state;
      history.push({
         pathname: '/forecast',
         search: `?city=${city}`,
      });
   };

   render() {
      return (
         <div className={css['header-form']}>
            <Input variant="small" onChange={this.handleInputChange} />
            <Button type="button" onClick={this.handleClick}>
               Get Weather
            </Button>
         </div>
      );
   }
}
