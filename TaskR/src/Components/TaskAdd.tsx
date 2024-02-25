import './CompStyles/Task.css'
import addButton from '../assets/add.svg'
function TaskAdd() {
    return (
        <div className={'task-container'}>
            <button className={'add-button'}>
                <img src={addButton} alt={'add-button'}/>
            </button>
            <h3>Add task</h3>
        </div>
    )
}

export default TaskAdd
