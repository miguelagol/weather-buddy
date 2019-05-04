import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import css from './Button.module.css';

export default function Button({ text, checkVisibility }) {
   const classes = classNames.bind(css);
   const className = classes({
      button: true,
      visibility: checkVisibility,
   });

   return <button className={className}>{text}</button>;
}

Button.propTypes = {
   text: PropTypes.string,
   checkVisibility: PropTypes.string,
};

Button.defaultProps = {
   text: 'Submit',
   checkVisibility: undefined,
};
