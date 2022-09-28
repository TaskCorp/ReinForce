/**
 ** The taskList component will house the following
 ** (1) - container to place tasks
 ** (2) - Each task should have: interval counter on left side, task description in middle, edit and delete buttons on right
 * ? (3) - If there is time add tomato component before interval counter on left.
 */

import React from 'react';
import Task from './Task';
import { PostTask } from './PostTask';

/*
"_id" SERIAL NOT NULL,
  "name" VARCHAR(50),
	"start_time" BIGINT,
  "revisit_interval" BIGINT,
  "users_id" BIGINT NOT NULL,

*/

function Tasks({
  tasks: stateTasks,
  updateTask,
  deleteTask,
  postTask,
  getTasks,
}: TasksProps) {
  // const testData = [
  //   {
  //     _id: 1,
  //     name: "play piano",
  //     startTime: 1664353489411,
  //     revisit: 50000,
  //     users_id: 1,
  //   },
  //   {
  //     _id: 2,
  //     name: "play guitar",
  //     startTime: 166435348352,
  //     revisit: 50000,
  //     users_id: 1,
  //   },
  // ];
  console.log('STATE TASKS', stateTasks);
  const tasks = stateTasks.map((task, index) => {
    // console.log('TASK', task);

    return (
      <Task
        key={index}
        _id={task._id}
        users_id={task.users_id}
        name={task.name}
        start_time={task.start_time}
        revisit_interval={task.revisit_interval}
        getTasks={getTasks}
        updateTask={updateTask}
        deleteTask={deleteTask}
        postTask={postTask}
      />
    );
  });

  return (
    <div id="Tasks">
      <div id="PostTask">
        <PostTask saveTask={Task} />
      </div>
      {/* <h1>hello world</h1> */}
      <div id="TaskList">
        <div>{tasks}</div>
      </div>
    </div>
  );
}

export default Tasks;

// const Task: any = () => {
//   return (
//     <>
//       <h1>hello world</h1>
//     </>
//   );
// };

// export default Task;
