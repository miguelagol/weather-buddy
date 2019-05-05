import React from 'react';
import PropTypes from 'prop-types';
import cln from 'classnames/bind';
import css from './Input.module.scss';

const classes = cln.bind(css);

export default function Input({ className, variant, ...rest }) {
   const classNames = classes('input', className, {
      [css[`input--${variant}`]]: variant,
   });

   return <input className={classNames} {...rest} />;
}

Input.propTypes = {
   className: PropTypes.string,
   variant: PropTypes.oneOf(['small', 'big']),
};

Input.defaultProps = {
   className: undefined,
   variant: undefined,
};
