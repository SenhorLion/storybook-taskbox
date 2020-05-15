import React from 'react';
// import PropTypes from 'prop-types';

// export interface IProps {
//   /**
//    * onClick Handler
//    * @default noop
//    */
//   onClick?: () => void;
//   /**
//    * Children
//    * @default null
//    */
//   children?: React.ReactNode;
//   /**
//    * Disabled
//    * @default false
//    */
//   disabled?: boolean;
// }

export interface ITask {
  id: string;
  title: string;
  state: string;
  updatedAt?: Date;
}

export interface IProps {
  task: ITask;
  onArchiveTask: (id) => void;
  onPinTask: (id) => void;
}

/**
- A Task component
- Displays a task in various states: normal | pinned | archived
**/
const Task = ({
  task: { id, title, state },
  onArchiveTask,
  onPinTask
}: IProps) => {
  return (
    <div className={`list-item ${state}`}>
      <label className='checkbox'>
        <input
          type='checkbox'
          defaultChecked={state === 'TASK_ARCHIVED'}
          disabled={true}
          name='checked'
        />
        <span className='checkbox-custom' onClick={() => onArchiveTask(id)} />
      </label>
      <div className='title'>
        <input
          type='text'
          value={title}
          readOnly={true}
          placeholder='Input title'
          style={{ textOverflow: 'ellipsis' }}
        />
      </div>

      <div className='actions' onClick={event => event.stopPropagation()}>
        {state !== 'TASK_ARCHIVED' && (
          <button onClick={() => onPinTask(id)}>
            <span className={`icon-star`} />
          </button>
        )}
      </div>
    </div>
  );
};

// Task.propTypes = {
//   task: PropTypes.shape({
//     id: PropTypes.string.isRequired,
//     title: PropTypes.string.isRequired,
//     state: PropTypes.string.isRequired
//   }),
//   onArchiveTask: PropTypes.func,
//   onPinTask: PropTypes.func
// };

export default Task;
