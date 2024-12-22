import React from 'react';

const NewTask = ({ data }) => {
  return (
    <div className="flex-shrink-0 w-80 bg-red-100 shadow-lg rounded-lg p-6 border border-gray-200 hover:shadow-xl transform transition-transform hover:scale-105 snap-center">
      <div className="mb-4">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-bold text-red-500">{data.category}</h3>
          <h4 className="text-sm text-gray-500">{data.taskDate}</h4>
        </div>
      </div>
      <h2 className="text-xl font-semibold mb-2">{data.taskTitle}</h2>
      <p className="text-gray-700 text-sm">{data.taskDescription}</p>
      <div className="mt-4">
        <button className="w-full px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow hover:bg-blue-600 transition duration-200">
          Accept Task
        </button>
      </div>
    </div>
  );
};

export default NewTask;
