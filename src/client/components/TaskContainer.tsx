/**
 ** This component will be the main view for the task list, it will house all the components
 ** that we'll need. We will need the following components nested here:
 ** (1) - Nav bar
 ** (2) - Main container - add task component, task list component
 ** (3) - Footer
 */

import React from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
import Tasks from './Tasks';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { Dispatch } from 'redux';
import * as actionCreators from '../redux/actionCreators';

function TaskContainer() {
  const tasks: readonly ReadTask[] = useSelector(
    (state: TaskState) => state.tasks,
    shallowEqual
  );

  // console.log("TASKS IN REACT", tasks);

  const dispatch: Dispatch<any> = useDispatch();

  const getTasks = React.useCallback(
    (tasks: ReadTask[]): any => dispatch(actionCreators.getTasks(tasks)),
    [dispatch]
  );
  const postTask = React.useCallback(
    (task: ReadTask): any => dispatch(actionCreators.postTask(task)),
    [dispatch]
  );
  const updateTask = React.useCallback(
    (task: ReadTask): any => dispatch(actionCreators.updateTask(task)),
    [dispatch]
  );
  const deleteTask = React.useCallback(
    (task: ReadTask): any => dispatch(actionCreators.deleteTask(task)),
    [dispatch]
  );

  React.useEffect(() => {
    // fetch()
    async function helper() {
      // console.log("INSIDE HELPER");
      try {
        const getOptions = {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        };

        const response = await fetch('/api/getTasks', getOptions);
        const data = await response.json();

        // console.log("BEFORE GET TASKS");
        getTasks(data);

        // console.log("TASKS AFTER USE EFFECT", tasks);
      } catch (err) {
        console.log('getTasks error');
      }
    }
    helper();
    // invoke getTasks dispatch
  }, []);

  return (
    <div id="TaskContainer">
      <NavBar />
      <Tasks
        tasks={tasks}
        postTask={postTask}
        updateTask={updateTask}
        deleteTask={deleteTask}
        getTasks={getTasks}
      />
      <Footer />
    </div>
  );
}

export default TaskContainer;
