// src/components/Task.stories.js

import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, object } from '@storybook/addon-knobs/react';

import Task from './Task';

import { StoryContainer } from '../utils/StoryContainer';

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
  .addDecorator(story => (
    <StoryContainer title='Task'>{story()}</StoryContainer>
  ))
  .addDecorator(withKnobs)
  .add('default', () => (
    <Task task={createTaskKnob({ ...task })} {...actions} />
  ))
  .add('pinned', () => (
    <Task
      task={createTaskKnob({ ...task, state: 'TASK_PINNED' })}
      {...actions}
    />
  ))
  .add('archived', () => (
    <Task
      task={createTaskKnob({ ...task, state: 'TASK_ARCHIVED' })}
      {...actions}
    />
  ))
  .add('long title', () => (
    <Task task={createTaskKnob({ ...task, title: longTitle })} {...actions} />
  ));
