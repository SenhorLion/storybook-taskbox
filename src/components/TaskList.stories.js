import React from 'react';
import { storiesOf } from '@storybook/react';

import { PureTaskList } from './TaskList';
import { task, actions } from './Task.stories';

import { StoryContainer } from '../utils/StoryContainer';

export const defaultTasks = [
  { ...task, id: '1', title: 'Task 1' },
  { ...task, id: '2', title: 'Task 2' },
  { ...task, id: '3', title: 'Task 3' },
  { ...task, id: '4', title: 'Task 4' },
  { ...task, id: '5', title: 'Task 5' },
  { ...task, id: '6', title: 'Task 6' }
];

export const pinnedTasks = [
  ...defaultTasks.slice(0, 5),
  { id: '6', title: 'Task 6 (pinned)', state: 'TASK_PINNED' }
];

storiesOf('TaskList', module)
  .add('default', () => (
    <PureTaskList tasks={defaultTasks} {...actions}></PureTaskList>
  ))
  .add('pinnedTasks', () => (
    <PureTaskList tasks={pinnedTasks} {...actions}></PureTaskList>
  ))
  .add('loading', () => (
    <PureTaskList loading tasks={[]} {...actions}></PureTaskList>
  ))
  .add('empty', () => <PureTaskList tasks={[]} {...actions}></PureTaskList>);
