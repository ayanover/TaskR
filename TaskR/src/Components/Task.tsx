import './CompStyles/Task.css'
import addButton from '../assets/add.svg'
import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
function Task() {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [date, setDate] = useState('')

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
