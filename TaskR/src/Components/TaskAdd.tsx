import './CompStyles/Task.css'
import addButton from '../assets/add.svg'
import axios from "axios";
import {useState} from "react";

function TaskAdd() {
    const [title] = useState('task');
    const [description] = useState('description');
        const handleTaskAdd = async () => {
            try {
                await axios.post('http://localhost:3001/addtask', { title, description });
            } catch (error) {
                console.error('Error adding task:', error);
            }

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

export default TaskAdd;
