import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Provider } from 'react-redux';

import { PureInboxScreen } from './InboxScreen';
import { defaultTasks } from './TaskList.stories';

const pinnedTasks = [
  ...defaultTasks,
  { id: '8', title: 'Task 8 (pinned)', state: 'TASK_PINNED' }
];
// A super-simple mock of a redux store
const store = {
  getState: () => ({
    tasks: pinnedTasks
  }),
  subscribe: () => 0,
  dispatch: action('dispatch')
};

storiesOf('InboxScreen', module)
  .addDecorator(story => <Provider store={store}>{story()}</Provider>)
  .add('default', () => <PureInboxScreen />)
  .add('error', () => <PureInboxScreen error='Something' />);
