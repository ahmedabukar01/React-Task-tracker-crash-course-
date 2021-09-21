import React from 'react';
import Header from './components/Header'
import Tasks from './components/Tasks'
import {useState} from 'react'
import AddTask from './components/AddTask'

function App() {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks,setTasks] = useState([
    {
        id: 1,
        text: 'playing football',
        day:'feb 5th at 1:30',
        reminder: true,
    },
    {
        id: 2,
        text: 'cleaning house',
        day:'feb 5th at 8:15',
        reminder: false,
    },
    {
        id: 3,
        text: 'food shopping',
        day:'feb 5th at 10:00',
        reminder: true,
    },
    {
        id: 4,
        text: 'meeting at school',
        day:'feb 5th at 2:30',
        reminder: false,
    },
    {
        id: 5,
        text: 'shooting flim',
        day:'feb 5th at 5:50',
        reminder: true,
    }
])

// delete task
const deleteTask = (id)=>{
  setTasks(tasks.filter((task)=>task.id !== id))
}
// reminder
const toggleReminder = (id)=>{
  setTasks(tasks.map((task)=> task.id === id? {...task,reminder:!task.reminder}: task))
}

// Add task
const addTask = (task)=>{
  const id = tasks.length+1
  const newTask = {id, ...task}
  setTasks([...tasks,newTask])
}
// toggle 
const onAdd = ()=>{
  setShowAddTask(!showAddTask)
}
  return (
    <div className="container">
      <Header onAdd={onAdd} showAdd={showAddTask}/>
      {showAddTask && <AddTask onAdd={addTask}/>}
      <Tasks tasks={tasks} deleteTask={deleteTask} onToggle={toggleReminder}/>
    </div>
    
  )
 
}

export default App;
