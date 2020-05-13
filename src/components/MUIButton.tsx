import React from 'react';
import Button from '@material-ui/core/Button';

import { createStyles, withStyles, WithStyles } from '@material-ui/core/styles';

const styles = theme =>
  createStyles({
    error: {
      backgroundColor: '#f1c2c2',
      color: '#a00000'
    },
    success: {
      backgroundColor: '#00aa00',
      color: '#ffeeff'
    }
  });

export interface IProps extends WithStyles<typeof styles> {
  /**
   * Title for button: string
   * @default MUI Button
   **/
  title?: string;
  /**
   * Status: success | error
   * @default success
   **/
  status?: string;
  /**
   * Classes: material-ui
   * @default ''
   **/
  classes: Record<'error' | 'success', string>;
}

export const PureMUIButton = (props: IProps) => {
  const { title = 'Ima btn', status = 'success', classes } = props;
  return (
    <Button
      variant='contained'
      className={status === 'success' ? classes.success : classes.error}
      color='primary'
    >
      Hello {title}
    </Button>
  );
};

export default withStyles(styles)(PureMUIButton);
