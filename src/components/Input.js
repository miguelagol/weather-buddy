import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import css from './Input.module.scss';

export default function Input({ checkVisibility }) {
   const classes = classNames.bind(css);
   const className = classes({
      input: true,
      visibility: checkVisibility,
   });

   return <input className={className} />;
}

Input.propTypes = {
   checkVisibility: PropTypes.string,
};

Input.defaultProps = {
   text: '',
   checkVisibility: undefined,
};
