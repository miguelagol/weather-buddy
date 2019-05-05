import React from 'react';
import PropTypes from 'prop-types';
import cln from 'classnames/bind';
import css from './Input.module.scss';

const classes = cln.bind(css);

export default function Input({ className, ...rest }) {
   const classNames = classes('input', className);

   return <input className={classNames} {...rest} />;
}

Input.propTypes = {
   className: PropTypes.string,
};

Input.defaultProps = {
   className: undefined,
};
