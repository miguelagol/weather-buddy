import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import css from './Button.module.scss';

const classes = classNames.bind(css);

export default function Button({ text, className }) {
   const classNames = classes('button', className);

   return <button className={classNames}>{text}</button>;
}

Button.propTypes = {
   text: PropTypes.string,
   className: PropTypes.string,
};

Button.defaultProps = {
   text: 'Submit',
   className: undefined,
};
