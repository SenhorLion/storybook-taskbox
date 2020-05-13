import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';

import Button from './Button';

storiesOf('Button', module)
  .addDecorator(withKnobs)
  .addParameters({
    component: Button,
    componentSubtitle: 'Ima subtitle for the Button component'
  })
  .add('Default', () => (
    <Button disabled={boolean('disabled', false)}>
      {text('text', 'Hello world')}
    </Button>
  ))
  .add('Disabled', () => <Button disabled>I'm a disabled button</Button>);

// TODO: CSF Doesnt currentlu wprk??

// export default {
//   title: 'Button',
//   component: Button,
//   parameters: {
//     componentSubtitle: 'Ima subtitle for the Button component'
//   },
//   decorators: {}
// };

/**
 * A Normal Button
 */
// export const normal = () => (
//   <Button disabled={boolean('disabled', false)}>
//     {text('text', 'Hello world')}
//   </Button>
// );

/**
 * A Button disabled
 */
// export const disabled = () => <Button disabled>I'm a disabled button</Button>;
