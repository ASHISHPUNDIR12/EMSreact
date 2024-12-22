import React from 'react';

const AllTask = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      {/* All Tasks Container */}
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-blue-600 mb-6">All Tasks</h2>
        
        {/* Single Task */}
        <div className="bg-white shadow-md rounded-lg p-6 mb-4 border border-gray-200 hover:shadow-lg transition-shadow duration-300">
          <h2 className="text-xl font-bold text-gray-800 mb-2">Ashish</h2>
          <h3 className="text-lg text-gray-600 mb-4">Make UI Design</h3>
          <h5 className="text-sm font-semibold text-green-500 bg-green-100 px-3 py-1 rounded-lg w-fit">
            Status: In Progress
          </h5>
        </div>
    {/* task2  */}
    <div className="bg-white shadow-md rounded-lg p-6 mb-4 border border-gray-200 hover:shadow-lg transition-shadow duration-300">
          <h2 className="text-xl font-bold text-gray-800 mb-2">Ashish</h2>
          <h3 className="text-lg text-gray-600 mb-4">Make UI Design</h3>
          <h5 className="text-sm font-semibold text-green-500 bg-green-100 px-3 py-1 rounded-lg w-fit">
            Status: In Progress
          </h5>
        </div>

        <div className="bg-white shadow-md rounded-lg p-6 mb-4 border border-gray-200 hover:shadow-lg transition-shadow duration-300">
          <h2 className="text-xl font-bold text-gray-800 mb-2">Ashish</h2>
          <h3 className="text-lg text-gray-600 mb-4">Make UI Design</h3>
          <h5 className="text-sm font-semibold text-green-500 bg-green-100 px-3 py-1 rounded-lg w-fit">
            Status: In Progress
          </h5>
        </div>

        <div className="bg-white shadow-md rounded-lg p-6 mb-4 border border-gray-200 hover:shadow-lg transition-shadow duration-300">
          <h2 className="text-xl font-bold text-gray-800 mb-2">Ashish</h2>
          <h3 className="text-lg text-gray-600 mb-4">Make UI Design</h3>
          <h5 className="text-sm font-semibold text-green-500 bg-green-100 px-3 py-1 rounded-lg w-fit">
            Status: In Progress
          </h5>
        </div>
       
      </div>
    </div>
  );
};

export default AllTask;
