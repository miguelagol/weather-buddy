import React from 'react';
import Button from './Button.js';
import Input from './Input.js';
import css from './Home.module.scss';

export default function Home() {
   return (
      <div className={css.home}>
         <h2 className={css.title}>Enter a City</h2>
         <Input className={css['responsive-width']} variant="big" />
         <Button type="button" variant="big">
            Get Weather
         </Button>
      </div>
   );
}
