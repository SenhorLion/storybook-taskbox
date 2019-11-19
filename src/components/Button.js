import React from 'react';
import PropTypes from 'prop-types';

const defaultClasses = {
  errors: {
    backgroundColor: '#f1c2c2',
    color: '#a00000',
  },
  success: {
    backgroundColor: '#00aa00',
    color: '#ffeeff',
  },
};

export const Button = ({ title, type, classes = defaultClasses }) => {
  return (
    <button className={type === 'success' ? classes.success : classes.errors}>
      Hello {title}
    </button>
  );
};

Button.propTypes = {
  title: PropTypes.string,
  type: PropTypes.string,
  classes: PropTypes.string,
};

Button.defaultProps = {
  title: 'Button',
  type: 'success',
};

// TODO: Wrap in HoC
export default Button;
