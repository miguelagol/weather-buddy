import React from 'react';
import Button from './Button.js';
import Input from './Input.js';
import css from './Home.module.scss';

export default function Home() {
   return (
      <div className={css.home}>
         <h2 className={css.title}>Enter a City</h2>
         <Input />
         <Button text={'Get Weather'} />
      </div>
   );
}
