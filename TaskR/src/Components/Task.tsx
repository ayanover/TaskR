import './CompStyles/Task.css'
import {useState} from "react";
import axios from "axios";
import flag from '../assets/Icons/redflag.svg'

interface TaskProps {
    task: {
        taskId: string;
        title: string;
        description: string;
        // Define other properties of the task object here
    };
}
const Task: React.FC<TaskProps> = ({ task }) => {
    const [title, setTitle] = useState(task.title);
    const [content, setContent] = useState(task.description);
    const [isDeleted, setIsDeleted] = useState(false);

    const handleTaskDelete = async () => {
        setIsDeleted(false); // Reset isDeleted to ensure animation triggers on subsequent deletes
        await new Promise(resolve => setTimeout(resolve, 10)); // Wait for a short delay
        setIsDeleted(true);
        setTimeout(() => TaskDelete(task.taskId), 450);
    }
    const TaskDelete = async (taskId: string) => {
        try {
            await axios.post('http://127.0.0.1:3001/deltask', { taskId }, { timeout: 5000 });
        } catch (error) {
            console.error('Error deleting task:', error);
        }
    };
    return (
        <div className={`task-container ${isDeleted ? 'fadeout' : ''}`}>
            <form>
                <div className={'task-title-container'}>
                    <div className={'title-separator'}>

                    </div>
                    <input className={'task-text-field'}
                           type="text"
                           id="title"
                           value={title}
                           onChange={(e) => {
                               setTitle(e.target.value);
                           }}
                           placeholder="Task title"
                    />
                </div>
                <div className={'urgency-flag'}>
                    <img src={flag}></img>
                    <h3>Urgent</h3>
                </div>
                <div className={'task-content-container'}>
                    <textarea className={'task-text-field'}
                              id="content"
                              placeholder="Task description"
                              value={content}
                              onChange={(e) => {
                                  setContent(e.target.value);
                              }}
                    />
                </div>
                <div className={'delete-button '} onClick={handleTaskDelete}>
                    <h3>Delete</h3>
                </div>
            </form>
        </div>
    )
}

export default Task
