import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const AllTask = () => {
  const [userData, setUserData] = useContext(AuthContext);

  return (
    <div className="bg-white p-6 rounded-lg mt-6 shadow-md">
      <div className="bg-blue-600 text-white py-3 px-4 flex flex-wrap justify-between rounded-md">
        <h2 className="text-lg font-medium w-full sm:w-1/5">Employee Name</h2>
        <h3 className="text-lg font-medium w-full sm:w-1/5">New Task</h3>
        <h5 className="text-lg font-medium w-full sm:w-1/5">Active Task</h5>
        <h5 className="text-lg font-medium w-full sm:w-1/5">Completed</h5>
        <h5 className="text-lg font-medium w-full sm:w-1/5">Failed</h5>
      </div>
      <div className="mt-4">
        {userData.map((elem, idx) => (
          <div
            key={idx}
            className="border border-blue-300 bg-blue-50 mb-3 py-3 px-4 flex flex-wrap justify-between rounded-md shadow-sm hover:shadow-md transition-shadow duration-200"
          >
            <h2 className="text-lg font-medium w-full sm:w-1/5 text-blue-800">
              {elem.firstName}
            </h2>
            <h3 className="text-lg font-medium w-full sm:w-1/5 text-blue-600">
              {elem.taskCounts.newTask}
            </h3>
            <h5 className="text-lg font-medium w-full sm:w-1/5 text-blue-500">
              {elem.taskCounts.active}
            </h5>
            <h5 className="text-lg font-medium w-full sm:w-1/5 text-green-500">
              {elem.taskCounts.completed}
            </h5>
            <h5 className="text-lg font-medium w-full sm:w-1/5 text-red-500">
              {elem.taskCounts.failed}
            </h5>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllTask;
