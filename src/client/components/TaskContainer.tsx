/**
 ** This component will be the main view for the task list, it will house all the components
 ** that we'll need. We will need the following components nested here:
 ** (1) - Nav bar
 ** (2) - Main container - add task component, task list component
 ** (3) - Footer
 */

import React from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import Tasks from "./Tasks";

function TaskContainer() {
  return (
    <div id="TaskContainer">
      <NavBar />
      <Tasks />
      <Footer />
    </div>
  );
}

export default TaskContainer;
