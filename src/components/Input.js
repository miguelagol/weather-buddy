import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import css from './Input.module.scss';

const classes = classNames.bind(css);

export default function Input({ className }) {
   const classNames = classes('input', className);

   return <input className={classNames} />;
}

Input.propTypes = {
   className: PropTypes.string,
};

Input.defaultProps = {
   className: undefined,
};
