import React from 'react';
import Header from './components/Header'
import Tasks from './components/Tasks'
import {useState} from 'react'
import {useEffect} from 'react'
import AddTask from './components/AddTask'

function App() {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks,setTasks] = useState([])

  useEffect(()=>{
    const gettingSomething = async ()=>{
      const getTasks = await fetchTasks();
      setTasks(getTasks)
    }

    gettingSomething();
  },[])
  // fetch tasks from server
  const fetchTasks = async() =>{
    const res = await fetch('http://localhost:8000/tasks');
    const data = await res.json()
    return data
  }

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
