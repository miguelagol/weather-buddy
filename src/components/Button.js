import React from 'react';
import PropTypes from 'prop-types';
import cln from 'classnames/bind';
import css from './Button.module.scss';

const classes = cln.bind(css);

export default function Button({
   className,
   type,
   children,
   variant,
   ...rest
}) {
   const classNames = classes('button', className, {
      [css[`button--${variant}`]]: variant,
   });

   return (
      <button className={classNames} type={type} {...rest}>
         {children}
      </button>
   );
}

Button.propTypes = {
   className: PropTypes.string,
   type: PropTypes.oneOf(['button', 'submit', 'reset']).isRequired,
   children: PropTypes.node.isRequired,
   variant: PropTypes.oneOf(['big']),
};

Button.defaultProps = {
   className: undefined,
   variant: undefined,
};
