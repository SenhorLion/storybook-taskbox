import React from 'react';

import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
// import { /*withKnobs,*/ object } from '@storybook/addon-knobs/react';

import { FavoriteNumber } from './FavouriteNumber';

// import { StoryContainer } from '../utils/StoryContainer';

// export const actions = {
//   onPinTask: action('onPinTask'),
//   onArchiveTask: action('onArchiveTask')
// };

// export const createTaskKnob = state => {
//   return object('task', { ...state });
// };

storiesOf('FavouriteNumber', module)
  .addParameters({
    component: FavoriteNumber,
    componentSubtitle: 'Fav number component'
  })
  .add('Default', () => <FavoriteNumber />);
