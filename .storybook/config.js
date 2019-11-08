import React from 'react';
import { configure, addParameters, addDecorator } from '@storybook/react';
import requireContext from 'require-context.macro';
import '../src/index.css';
import { StoryLayoutContainer } from '../src/utils/StoryContainer';

addDecorator(story => (
  <>
    <StoryLayoutContainer>{story()}</StoryLayoutContainer>
  </>
));

addParameters({
  assets: [
    {
      name: 'app',
      url: '/designs/app.png'
    },
    {
      name: 'items',
      url: '/designs/items.png'
    },
    {
      name: 'list 1',
      url: '/designs/list-1.png'
    },
    {
      name: 'list 2',
      url: '/designs/list-2.png'
    }
  ]
});

const req = requireContext('../src', true, /\.stories.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
