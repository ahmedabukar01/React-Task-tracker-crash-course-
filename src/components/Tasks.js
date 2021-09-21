import Task from './Task'

const Tasks = ({tasks,deleteTask,onToggle}) => {
    return (
        <>
           {tasks.length > 0 ? tasks.map(task=>(
               <Task key={task.id} task={task} 
               onDelete={deleteTask} onToggle={onToggle}/>
           )): 'no Tasks to show'}
        </>
    )
}

export default Tasks
