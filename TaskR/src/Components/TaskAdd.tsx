import './CompStyles/Task.css'
import addButton from '../assets/add.svg'
function TaskAdd({ onAddTask }) {

        const handleTaskAdd = () => {
            // Create a new task object
            const newTask = {
                title: 'New Task',
                description: 'Description of the new task',
            };

            // Call the method passed as prop to add the new task
            onAddTask(newTask);
        };
    return (
        <div className={'task-container'}>
            <button className={'add-button'} onClick={handleTaskAdd}>
                <img src={addButton} alt={'add-button'}/>
            </button>
            <h3>Add task</h3>
        </div>
    )
}

export default TaskAdd
