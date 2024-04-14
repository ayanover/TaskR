import './CompStyles/Task.css'
import {useState} from "react";
function Task() {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

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
