import './CompStyles/Task.css'
import TaskAdd from './TaskAdd.tsx'
import Task from './Task.tsx'
function ContentTasks(tasks) {
    return (
        <>
            {tasks.map((task, index) => (
                <Task key={index} task={task} />
            ))}
            <TaskAdd/>
        </>
    )
}

export default ContentTasks
