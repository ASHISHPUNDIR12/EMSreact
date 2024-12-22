import React from 'react';

const TaskData = ({data}) => {
 
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 justify-center items-center">
      <div className="flex flex-col items-center justify-center bg-red-100 border border-red-300 rounded-lg shadow-md p-4 w-48 h-48">
        <h2 className="text-4xl font-bold text-red-600">{data.taskNumbers.newTask}</h2>
        <h3 className="text-lg font-medium text-red-800">New task</h3>
      </div>
      
      <div className="flex flex-col items-center justify-center bg-blue-100 border border-blue-300 rounded-lg shadow-md p-4 w-48 h-48">
        <h2 className="text-4xl font-bold text-blue-600">{data.taskNumbers.completed}</h2>
        <h3 className="text-lg font-medium text-blue-800">Completed Tasks</h3>
      </div>
      
      <div className="flex flex-col items-center justify-center bg-green-100 border border-green-300 rounded-lg shadow-md p-4 w-48 h-48">
        <h2 className="text-4xl font-bold text-green-600">{data.taskNumbers.active}</h2>
        <h3 className="text-lg font-medium text-green-800">Accept Tasks</h3>
      </div>
      
      <div className="flex flex-col items-center justify-center bg-yellow-100 border border-yellow-300 rounded-lg shadow-md p-4 w-48 h-48">
        <h2 className="text-4xl font-bold text-yellow-600">{data.taskNumbers.failed}</h2>
        <h3 className="text-lg font-medium text-yellow-800">Failed Tasks </h3>
      </div>
      
      {/* Add more boxes here as needed */}
    </div>
  );
};

export default TaskData;
