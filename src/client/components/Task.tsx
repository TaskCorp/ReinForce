import React from "react";

function Task(
  { _id, users_id, name, start_time, revisit_interval }: TaskProps,
) {
  return (
    <div id="Task">
      <p>{_id}</p>
      <p>{users_id}</p>
      <p>{name}</p>
      <p>{start_time}</p>
      <p>{revisit_interval}</p>
    </div>
  );
}

export default Task;
