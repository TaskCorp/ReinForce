/**
 ** The taskList component will house the following
 ** (1) - container to place tasks
 ** (2) - Each task should have: interval counter on left side, task description in middle, edit and delete buttons on right
 */

import React from 'react';
import Task from './Task';
import PostTask from './PostTask';

function Tasks({
  tasks: stateTasks,
  updateTask,
  deleteTask,
  postTask,
  handleGetTasks,
}: TasksProps) {
  const tasks = stateTasks.map((task, index) => {

    return (
      <Task
        key={index}
        _id={task._id}
        users_id={task.users_id}
        name={task.name}
        start_time={task.start_time}
        revisit_interval={task.revisit_interval}
        updateTask={updateTask}
        deleteTask={deleteTask}
      />
    );
  });

  return (
    <div id="Tasks">
      <div id="PostTask">
        <PostTask postTask={postTask} handleGetTasks={handleGetTasks}/>
      </div>
      <div id="TaskList">
        <div>{tasks}</div>
      </div>
    </div>
  );
}

export default Tasks;
