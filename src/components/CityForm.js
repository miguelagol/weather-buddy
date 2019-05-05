import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import Input from './Input';
import css from './CityForm.module.scss';

export default function CityForm() {
   return (
      <div className={css['header-forms']}>
         <Input className="header" />
         <Button className="header" text="Get Weather" />
      </div>
   );
}

CityForm.propTypes = {
   buttonText: PropTypes.string,
};

CityForm.defaultProps = {
   buttonText: undefined,
};
