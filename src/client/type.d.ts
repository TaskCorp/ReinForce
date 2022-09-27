interface NewTask {
    // username: string
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

  interface ReadTask {
    // id: string
    taskName: string
    startTime: number
    revisit: number
  }

  // type ReadTask = string;

  //"users_id", "name", "start_time", "revisit_interval"
  
  type TaskState = {
    tasks: ReadTask[]
  }
  
  type ArticleAction = {
    type: string
    article: IArticle
  }
  
  type DispatchType = (args: ArticleAction) => ArticleAction