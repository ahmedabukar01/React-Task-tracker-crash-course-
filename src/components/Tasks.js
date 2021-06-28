import {useState} from 'react'

const Tasks = ()=>{
    const [tasks, setTask] = useState(
        [
            {
                id: 1,
                text: 'making e-commerce site',
                day: 'feb 5th at 2:30px',
                reminder: true,
        
            },
            {
                id: 2,
                text: 'making Blog site',
                day: 'feb 5th at 2:30px',
                reminder: true,
        
            },
            {
                id: 3,
                text: 'making E-learning site',
                day: 'feb 5th at 2:30px',
                reminder: true,
        
            }
        ]
    )
    return (
        <>
        {tasks.map(task=>(
            <h4>{task.text}</h4>
        ))}
        </>
    )
}

export default Tasks;