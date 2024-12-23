import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const CreateTask = () => {

  const [userData, setUserData] = useContext(AuthContext)

  const [taskTitle, setTaskTitle] = useState('')
  const [taskDescription, setTaskDescription] = useState('')
  const [taskDate, setTaskDate] = useState('')
  const [asignTo, setAsignTo] = useState('')
  const [category, setCategory] = useState('')

  const [newTask, setNewTask] = useState({})

  const submitHandler = (e) => {
      e.preventDefault()

      setNewTask({ taskTitle, taskDescription, taskDate, category, active: false, newTask: true, failed: false, completed: false })

      const data = userData

      data.forEach(function (elem) {
          if (asignTo == elem.firstName) {
              elem.tasks.push(newTask)
              elem.taskCounts.newTask = elem.taskCounts.newTask + 1
          }
      })
      setUserData(data)
      console.log(data);

      setTaskTitle('')
      setCategory('')
      setAsignTo('')
      setTaskDate('')
      setTaskDescription('')
  };
  

  return (
    <div className="max-w-4xl mx-auto py-8">
        <form onSubmit={(e)=>{
          submitHandler(e);
        }} className="bg-white shadow-lg rounded-lg p-8 space-y-6 border border-gray-200">
          <h2 className="text-2xl font-bold text-gray-700">Create a New Task</h2>

        
          <div>
            <label className="block text-sm font-medium text-gray-600">Task Title</label>
            <input

            value={taskTitle}
            onChange={(e) => {
                setTaskTitle(e.target.value)
            }}
              type="text"
              placeholder="Add task here"
              className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-medium text-gray-600">Description</label>
            <textarea
            value={taskDescription}
            onChange={(e) => {
              setTaskDescription(e.target.value)
          }} 
              placeholder="Write task details here..."
              cols="30"
              rows="4"
              className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
            ></textarea>
          </div>

          {/* Date */}
          <div>
            <label className="block text-sm font-medium text-gray-600">Date</label>
            <input
               value={taskDate}
               onChange={(e) => {
                   setTaskDate(e.target.value)
               }}
              type="date"
              className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Assign To */}
          <div>
            <label className="block text-sm font-medium text-gray-600">Assign To</label>
            <input
            value={asignTo}
            onChange={(e) => {
                setAsignTo(e.target.value)
            }}
              type="text"
              placeholder="Enter assignee's name"
              className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Category */}
          <div>
            <label className="block text-sm font-medium text-gray-600">Category</label>
            <input
              value={category}
              onChange={(e) => {
                  setCategory(e.target.value)
              }}
              type="text"
              placeholder="Enter category"
              className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 focus:ring-2 focus:ring-blue-400 transition"
          >
            Create Task
          </button>
        </form>
      </div>
  )
}

export default CreateTask