import React from 'react';
import PropTypes from 'prop-types';
import cln from 'classnames/bind';
import css from './Button.module.scss';

const classes = cln.bind(css);

export default function Button({ className, type, children, ...rest }) {
   const classNames = classes('button', className);

   return (
      <button className={classNames} type={type} {...rest}>
         {children}
      </button>
   );
}

Button.propTypes = {
   className: PropTypes.string,
   type: PropTypes.string.isRequired,
   children: PropTypes.node.isRequired,
};

Button.defaultProps = {
   className: undefined,
};
