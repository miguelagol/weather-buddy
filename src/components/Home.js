import React from 'react';
import Button from './Button.js';
import Input from './Input.js';
import css from './Home.module.css';

export default function Home() {
   return (
      <div className={css.home}>
         <h1 className={css.title}>Enter a City</h1>
         <Input />
         <Button className={css.visibility} text={'Get Weather'} />
      </div>
   );
}
