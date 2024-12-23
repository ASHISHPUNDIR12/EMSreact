import React from 'react';
import TaskData from '../others/TaskData';
import Header from '../others/Header';
import TaskList from '../TaskList/TaskList';

const EmployeeDashboard = (props) => {
  
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center">
      {/* Header */}
      <Header changeUser={props.changeUser} data = {props.data}  className="w-full max-w-4xl mx-auto" />
      
      {/* Flex container for TaskData */}
      <div className="flex flex-wrap justify-center gap-4 mt-6 w-full max-w-4xl mx-auto">
        <TaskData data = {props.data} />
       
      </div>
      <TaskList data = {props.data} />
    </div>
  );
};

export default EmployeeDashboard;
