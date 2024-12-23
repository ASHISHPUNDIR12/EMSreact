import React from 'react';
import Header from '../others/Header';
import CreateTask from '../others/CreateTask';
import AllTask from '../others/AllTask';

const AdminDashbaord = (props) => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header  changeUser={props.changeUser} />
      <CreateTask/>
      <AllTask  />
    </div>
  );
};

export default AdminDashbaord;
