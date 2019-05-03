import React from 'react';
import css from './App.module.css';

function App() {
   return (
      <div className={css.App}>
         <header className={css['App-header']}>
            <h2 id={css.title}>Weather Buddy</h2>
            <input />
            <button>Get Weather</button>
         </header>
         <div className={css.content}>
            <h1>Enter a City</h1>
            <input />
            <button>Get Weather</button>
         </div>
      </div>
   );
}

export default App;
