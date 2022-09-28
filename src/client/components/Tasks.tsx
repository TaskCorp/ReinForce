/**
 ** The taskList component will house the following
 ** (1) - container to place tasks
 ** (2) - Each task should have: interval counter on left side, task description in middle, edit and delete buttons on right
 * ? (3) - If there is time add tomato component before interval counter on left.
 */

import React from "react";
import Task from "./Task";
import { PostTask } from "./AddTask";

/*
"_id" SERIAL NOT NULL,
  "name" VARCHAR(50),
	"start_time" BIGINT,
  "revisit_interval" BIGINT,
  "users_id" BIGINT NOT NULL,

*/

function Tasks() {
  const testData = [
    {
      _id: 1,
      name: "play piano",
      startTime: 1664353489411,
      revisit: 50000,
      users_id: 1,
    },
    {
      _id: 2,
      name: "play guitar",
      startTime: 166435348352,
      revisit: 50000,
      users_id: 1,
    },
  ];

  const tasks = testData.map((task) => {
    return <Task />;
  });

  return (
    <div id="Tasks">
      <div id="PostTask">
        <PostTask saveTask={Task} />
      </div>
      {/* <h1>hello world</h1> */}
      {tasks}
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
