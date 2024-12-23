import React from "react";

const CompleteTask = ({ data }) => {
  return (
    <div className="flex-shrink-0 w-full sm:w-80 bg-blue-100 shadow-lg rounded-lg p-6 border border-gray-200 hover:shadow-xl transform transition-transform hover:scale-105 snap-center">
      <div className="mb-4">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-bold text-red-500">{data.category}</h3>
          <h4 className="text-sm text-gray-500">{data.taskDate}</h4>
        </div>
      </div>
      <h2 className="text-xl font-semibold mb-2">{data.taskTitle}</h2>
      <p className="text-gray-700 text-sm">{data.taskDescription}</p>
      <p className="text-green-600 font-semibold mt-4">Completed</p>
    </div>
  );
};

export default CompleteTask;
