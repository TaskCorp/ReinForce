interface ReadTask {
  _id: string;
  users_id: string;
  name: string;
  start_time: string;
  revisit_interval: string;
}

//* When we store our tasks in our TaskContainer, it should be an array with all elements having the shape of ReadTask
type TaskState = {
  tasks: ReadTask[];
};

//* When an action is passed, it must be of this shape.
type TaskAction = {
  type: string;
  task: ReadTask | null;
};

type TasksAction = {
  type: string;
  task: ReadTask[];
};

//* Defining React component props

type TasksProps = {
  tasks: readonly ReadTask[];
  handleGetTasks: (input: any) => void;
  postTask: (input: any) => void;
  updateTask: (input: any) => void;
  deleteTask: (input: any) => void;
};

type TaskProps = {
  _id: string;
  users_id: string;
  name: string;
  start_time: string;
  revisit_interval: string;
  updateTask: Function;
  deleteTask: Function;
};

type PostTaskProps = {
  postTask: Function;
  handleGetTasks: Function;
}

type DispatchType = (args: TaskAction) => TaskAction;
