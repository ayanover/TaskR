import './CompStyles/Task.css'
import {useState} from "react";

interface TaskProps {
    task: {
        title: string;
        description: string;
        // Define other properties of the task object here
    };
}
const Task: React.FC<TaskProps> = ({ task }) => {
    const [title, setTitle] = useState(task.title);
    const [content, setContent] = useState(task.description);

    return (
        <div className={'task-container'}>
            <form>
                <div className={'task-title-container'}>
                    <input
                        type="text"
                        id="title"
                        value={title}
                        onChange={(e) => {setTitle(e.target.value);}}
                        placeholder="Task title"
                    />
                </div>
                <div className={'task-content-container'}>
                    <input
                        type="test"
                        id="content"
                        placeholder="Task description"
                        value={content}
                        onChange={(e) => {setContent(e.target.value);}}
                    />
                </div>
            </form>
        </div>
    )
}

export default Task
