import React from 'react';
import Header from './components/Header'
import { BrowserRouter as Router,Route } from 'react-router-dom';
import Tasks from './components/Tasks'
import {useState} from 'react'
import {useEffect} from 'react'
import AddTask from './components/AddTask'
import Footer from './components/Footer'
import About from './components/About'

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
const deleteTask = async (id) =>{
  await fetch(`http://localhost:8000/tasks/${id}`,{
    method: 'DELETE'
  })
  setTasks(tasks.filter((task)=>task.id !== id))
}
// single task
const singleTask = async (id)=>{
  const res = await fetch(`http://localhost:8000/tasks/${id}`);
  const data = await res.json()
  return data
}
// reminder
const toggleReminder = async (id)=>{
  const task = await singleTask(id);
  const updTask = {...task,reminder:!task.reminder}
  console.log(updTask)

  const res = await fetch(`http://localhost:8000/tasks/${id}`,{
    method: 'PUT',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(updTask),
  })

  const data = await res.json();
  setTasks(tasks.map((task)=>task.id === id? {...task,reminder:data.reminder}: task))
 
}

// Add task
const addTask = async (task)=>{
  // const id = tasks.length+1
  // const newTask = {id, ...task}
  // setTasks([...tasks,newTask])
  const res = await fetch('http://localhost:8000/tasks',{
    method: 'POST',
    body: JSON.stringify(task),
    headers: {
      'content-type': 'application/json'
    }
  })

  const data = await res.json();
  setTasks([...tasks,data]);
}
// toggle 
const onAdd = ()=>{
  setShowAddTask(!showAddTask)
}
  return (
    <Router>
    <div className="container">
      <Header onAdd={onAdd} showAdd={showAddTask}/>
      <Route path="/" exact render={(props)=>(
        <>
           {showAddTask && <AddTask onAdd={addTask}/>}
           {tasks.length > 0? (<Tasks tasks={tasks} deleteTask={deleteTask} onToggle={toggleReminder}/>) : ('no tasks to show')}
        </>
      )}/>
      <Route path="/About" component={About}/>
      < Footer />
    </div>
    </Router>
  )
 
}

export default App;
