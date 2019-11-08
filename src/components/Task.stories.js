// src/components/Task.stories.js

import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, object } from '@storybook/addon-knobs/react';

import Task from './Task';

// import { StoryContainer } from '../utils/StoryContainer';

export const task = {
  id: '1',
  title: 'Test Task',
  state: 'TASK_INBOX',
  updatedAt: new Date(2018, 0, 1, 9, 0)
};

export const actions = {
  onPinTask: action('onPinTask'),
  onArchiveTask: action('onArchiveTask')
};

export const createTaskKnob = state => {
  return object('task', { ...state });
};

const longTitle = `This task's name is absurdly large. In fact, I think if I keep going I might end up with content overflow. What will happen? The star that represents a pinned task could have text overlapping. The text could cut-off abruptly when it reaches the star. I hope not`;

storiesOf('Task', module)
  .addParameters({ component: Task, componentSubtitle: 'Ima asubtitle nutha' })
  .add('Default', () => <Task task={{ ...task }} {...actions} />)
  .add('Pinned', () => (
    <Task task={{ ...task, state: 'TASK_PINNED' }} {...actions} />
  ))
  .add('Archived', () => (
    <Task task={{ ...task, state: 'TASK_ARCHIVED' }} {...actions} />
  ))
  .add('Long title', () => (
    <Task task={{ ...task, title: longTitle }} {...actions} />
  ));
