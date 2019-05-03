import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import css from './Input.module.css';

export default class Input extends React.Component {
   static propTypes = {
      checkVisibility: PropTypes.string,
   };

   static defaultProps = {
      text: '',
      checkVisibility: undefined,
   };

   render() {
      const { checkVisibility } = this.props;
      const classes = classNames.bind(css);
      const className = classes({
         input: true,
         visibility: checkVisibility,
      });

      return <input className={className} />;
   }
}
