import Task from './Task'

const Tasks = ({tasks,deleteTask}) => {
    return (
        <>
           {tasks.length > 0 ? tasks.map(task=>(
               <Task key={task.id} task={task} onDelete={deleteTask}/>
           )): 'no Tasks to show'}
        </>
    )
}

export default Tasks
