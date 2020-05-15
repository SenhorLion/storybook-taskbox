import React from 'react';
import ReactDOM from 'react-dom';
import { PureTaskList } from './TaskList';
import { pinnedTasks } from './TaskList.stories';

it('renders pinned tasks to the top of the list', () => {
  const div = document.createElement('div');
  const events = { onPinTask: jest.fn(), onArchiveTask: jest.fn() };

  ReactDOM.render(<PureTaskList tasks={pinnedTasks} {...events} />, div);

  const firstTaskInput = div.querySelector(
    '.list-item .title input[value="Task 6 (pinned)"]'
  );

  expect(firstTaskInput).not.toBe(null);
});
