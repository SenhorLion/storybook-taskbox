import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';

import { createStyles, withStyles } from '@material-ui/core/styles';

const styles = theme =>
  createStyles({
    errors: {
      backgroundColor: '#f1c2c2',
      color: '#a00000',
    },
    success: {
      backgroundColor: '#00aa00',
      color: '#ffeeff',
    },
  });

export const MUIButton = ({ title, status, classes }) => {
  return (
    <Button
      variant='contained'
      className={status === 'success' ? classes.success : classes.errors}
      color='primary'
    >
      Hello {title}
    </Button>
  );
};

MUIButton.propTypes = {
  /**
   * Title: string
   * @default ''
   **/
  // title: PropTypes.string,

  /**
   * Status: success | error
   * @default success
   **/
  status: PropTypes.string,

  /**
   * Classes: material-ui
   **/
  classes: PropTypes.string,
};

MUIButton.defaultProps = {
  title: 'Button',
  status: 'success',
};

// TODO: Wrap in HoC
export default withStyles(styles)(MUIButton);
// export default MUIButton;
