import React from 'react';
import Header from './components/Header'
import Tasks from './components/Tasks'
import {useState} from 'react'

function App() {
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
const deleteTask = (id)=>{
  setTasks(tasks.filter((task)=>task.id !== id))
}
  return (
    <div className="container">
      <Header/>
      <Tasks tasks={tasks} deleteTask={deleteTask}/>
    </div>
    
  )
 
}

export default App;
