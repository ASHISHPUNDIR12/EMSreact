import React from "react";
import AcceptTask from "./AcceptTask";
import CompleteTask from "./CompleteTask";
import FailedTask from "./FailedTask";
import NewTask from "./NewTask";

const TaskList = ({ data }) => {
  return (
    <div className="w-full overflow-x-auto flex space-x-4 p-4 bg-gray-100 scrollbar-hide">
      {data.tasks.map((e, index) => {
        if (e.active) {
          return <AcceptTask data = {e} key={index}/>;
        }
        if (e.completed) {
          return <CompleteTask data = {e} key={index} />;
        }
        if (e.newTask) {
          return <NewTask data = {e} key={index} />;
        }
        if (e.failed) {
          return <FailedTask data = {e} key={index} />;
        }
      })}
    </div>
  );
};

export default TaskList;
