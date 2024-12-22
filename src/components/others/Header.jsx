import React from 'react';

const Header = () => {
  return (
    <div className="bg-blue-500 text-white p-4 flex items-center justify-between shadow-md w-full max-w-full mx-auto">
      <h1 className="text-2xl font-bold">Hello Ashish 🫂</h1>
      <button 
        className="bg-white text-blue-500 font-semibold py-2 px-4 rounded-lg hover:bg-gray-100 transition duration-300"
      >
        Log out
      </button>
    </div>
  );
};

export default Header;
