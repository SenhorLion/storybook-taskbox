import React from 'react';
import { storiesOf } from '@storybook/react';

import Button from './Button';

storiesOf('Button', module)
  .addParameters({
    component: Button,
    componentSubtitle: 'Ima subtitle for the Button component',
  })
  .add('Default', () => <Button></Button>)
  .add('With Title', () => <Button title='Button'></Button>)
  .add('With Title and Type as error', () => (
    <Button title='Error Button' type='errors'></Button>
  ));
