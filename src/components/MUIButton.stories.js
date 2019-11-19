import React from 'react';
import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';

import MUIButton from './MUIButton';

storiesOf('MUIButton', module)
  .addParameters({
    component: MUIButton,
    componentSubtitle: 'Ima subtitle for the MUIButton component',
  })
  .add('Default', () => <MUIButton></MUIButton>)
  .add('With Title', () => <MUIButton title='Mui Button'></MUIButton>)
  .add('With Title and Type as error', () => (
    <MUIButton title='Mui Error Button' status='errors'></MUIButton>
  ));
