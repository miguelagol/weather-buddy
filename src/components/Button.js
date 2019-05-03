import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import css from './Button.module.css';

export default class Button extends React.Component {
   static propTypes = {
      text: PropTypes.string,
      checkVisibility: PropTypes.string,
   };

   static defaultProps = {
      text: 'Submit',
      checkVisibility: undefined,
   };

   render() {
      const { text, checkVisibility } = this.props;
      const classes = classNames.bind(css);
      const className = classes({
         button: true,
         visibility: checkVisibility,
      });

      return <button className={className}>{text}</button>;
   }
}
