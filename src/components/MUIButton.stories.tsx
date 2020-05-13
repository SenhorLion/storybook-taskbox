import React from 'react';
import { storiesOf } from '@storybook/react';

import MUIButton, { PureMUIButton } from './MUIButton';

storiesOf('MUIButton', module)
  .addParameters({
    component: PureMUIButton,
    componentSubtitle: 'Ima subtitle for the MUIButton component'
  })
  .add('Default', () => <MUIButton></MUIButton>)
  .add('With Title', () => <MUIButton title='Mui Button'></MUIButton>)
  .add('With Title and Type as error', () => (
    <MUIButton title='Mui Error Button' status='error'></MUIButton>
  ))
  .add('With Title and Type as success', () => (
    <MUIButton title='Mui Success Button' status='success'></MUIButton>
  ));
