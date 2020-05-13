import React from 'react';
import './Button.css';
// import PropTypes from 'prop-types';

// const defaultClasses = {
//   errors: {
//     backgroundColor: '#f1c2c2',
//     color: '#a00000'
//   },
//   success: {
//     backgroundColor: '#00aa00',
//     color: '#ffeeff'
//   }
// };

export interface IProps {
  /**
   * onClick Handler
   * @default noop
   */
  onClick?: () => void;
  /**
   * Children
   * @default null
   */
  children?: React.ReactNode;
  /**
   * Disabled
   * @default false
   */
  disabled?: boolean;
}

const noop = () => {};

/**
 * A Normal Button
 */
const Button = (props: IProps) => {
  const { children, onClick, disabled = false } = props;
  const disabledclass = disabled ? 'button--disabled' : '';
  return (
    <button
      className={`button ${disabledclass}`}
      onClick={!disabled ? onClick : noop}
    >
      <span>{children}</span>
    </button>
  );
};

export default Button;
