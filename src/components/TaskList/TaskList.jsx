import React from "react";
import AcceptTask from "./AcceptTask";
import CompleteTask from "./CompleteTask";
import FailedTask from "./FailedTask";
import NewTask from "./NewTask";

const TaskList = ({ data }) => {
  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4 bg-gray-100">
      {data.tasks.map((e, index) => {
        if (e.active) {
          return <AcceptTask data={e} key={index} />;
        }
        if (e.completed) {
          return <CompleteTask data={e} key={index} />;
        }
        if (e.newTask) {
          return <NewTask data={e} key={index} />;
        }
        if (e.failed) {
          return <FailedTask data={e} key={index} />;
        }
      })}
    </div>
  );
};

export default TaskList;
