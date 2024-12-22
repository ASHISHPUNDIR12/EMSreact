import React from 'react';
import Header from '../others/Header';
import CreateTask from '../others/CreateTask';
import AllTask from '../others/AllTask';

const AdminDashbaord = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <CreateTask/>
      <AllTask/>
    </div>
  );
};

export default AdminDashbaord;
