//* When a new task is created it should be this shape.
interface NewTask {
    _id: number,
    user_id: number,
    taskName: string
    startTime: number
    revisit: number
  }
  // username name start_time revisit_interval
  /*
  let queryString =
    `SELECT "users_id", "name", "start_time", "revisit_interval" FROM users INNER JOIN tasks on tasks.users_id = users._id WHERE username = '${username}'; `;

    SELECT "users_id", "name", "start_time", "revisit_interval" 
    FROM users 
    INNER JOIN tasks on tasks.users_id = users._id 
    WHERE username = 'pleb';
  */
//* When we receive a task back from the database, it should be of this shape.
  interface ReadTask {
    _id: number,
    user_id: number,
    taskName: string
    startTime: number
    revisit: number
  }

  // type ReadTask = string;

  //"users_id", "name", "start_time", "revisit_interval"
  
  //* When we store our tasks in our TaskContainer, it should be an array with all elements having the shape of ReadTask 
  type TaskState = {
    tasks: ReadTask[]
  }
  
  //* When an action is passed, it must be of this shape.
  type TaskAction = {
    type: string
    task: ReadTask | null
  }
  
  type DispatchType = (args: TaskAction) => TaskAction