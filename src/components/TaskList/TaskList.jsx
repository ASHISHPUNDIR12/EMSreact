import React from 'react';

const TaskList = () => {
  return (
    <div className="w-full overflow-x-auto flex space-x-4 p-4 bg-gray-100 scrollbar-hide">
      {/* Card 1 */}
      <div className="flex-shrink-0 w-80 bg-blue-100 shadow-lg rounded-lg p-6 border border-gray-200 hover:shadow-xl transform transition-transform hover:scale-105 snap-center">
        <div className="mb-4">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-bold text-red-500">High</h3>
            <h4 className="text-sm text-gray-500">20 Feb 2024</h4>
          </div>
        </div>
        <h2 className="text-xl font-semibold mb-2">Make a YouTube Video</h2>
        <p className="text-gray-700 text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore libero repellendus inventore ad perferendis recusandae autem quia quibusdam debitis quo? Rerum qui consequuntur enim incidunt officia autem commodi perferendis accusamus.
        </p>
      </div>
      {/* card 2 */}
      <div className="flex-shrink-0 w-80 bg-blue-100 shadow-lg rounded-lg p-6 border border-gray-200 hover:shadow-xl transform transition-transform hover:scale-105 snap-center">
        <div className="mb-4">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-bold text-red-500">High</h3>
            <h4 className="text-sm text-gray-500">20 Feb 2024</h4>
          </div>
        </div>
        <h2 className="text-xl font-semibold mb-2">Make a YouTube Video</h2>
        <p className="text-gray-700 text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore libero repellendus inventore ad perferendis recusandae autem quia quibusdam debitis quo? Rerum qui consequuntur enim incidunt officia autem commodi perferendis accusamus.
        </p>
      </div>
      {/* card 3  */}
      <div className="flex-shrink-0 w-80 bg-blue-100 shadow-lg rounded-lg p-6 border border-gray-200 hover:shadow-xl transform transition-transform hover:scale-105 snap-center">
        <div className="mb-4">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-bold text-red-500">High</h3>
            <h4 className="text-sm text-gray-500">20 Feb 2024</h4>
          </div>
        </div>
        <h2 className="text-xl font-semibold mb-2">Make a YouTube Video</h2>
        <p className="text-gray-700 text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore libero repellendus inventore ad perferendis recusandae autem quia quibusdam debitis quo? Rerum qui consequuntur enim incidunt officia autem commodi perferendis accusamus.
        </p>
      </div>

      {/* card 4 */}
      <div className="flex-shrink-0 w-80 bg-red-100 shadow-lg rounded-lg p-6 border border-gray-200 hover:shadow-xl transform transition-transform hover:scale-105 snap-center">
        <div className="mb-4">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-bold text-red-500">High</h3>
            <h4 className="text-sm text-gray-500">20 Feb 2024</h4>
          </div>
        </div>
        <h2 className="text-xl font-semibold mb-2">Make a YouTube Video</h2>
        <p className="text-gray-700 text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore libero repellendus inventore ad perferendis recusandae autem quia quibusdam debitis quo? Rerum qui consequuntur enim incidunt officia autem commodi perferendis accusamus.
        </p>
      </div>

      {/* {card 5} */}
      <div className="flex-shrink-0 w-80 bg-green-100 shadow-lg rounded-lg p-6 border border-gray-200 hover:shadow-xl transform transition-transform hover:scale-105 snap-center">
        <div className="mb-4">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-bold text-red-500">High</h3>
            <h4 className="text-sm text-gray-500">20 Feb 2024</h4>
          </div>
        </div>
        <h2 className="text-xl font-semibold mb-2">Make a YouTube Video</h2>
        <p className="text-gray-700 text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore libero repellendus inventore ad perferendis recusandae autem quia quibusdam debitis quo? Rerum qui consequuntur enim incidunt officia autem commodi perferendis accusamus.
        </p>
      </div>
    </div>
  );
};

export default TaskList;
