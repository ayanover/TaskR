const Task = require('./models/Task');

app.post('/taskupdate', async(req, res)=>{
    try{
        const {taskId, title, description} = req.body;
        const updatedTask = await Task.findOneAndUpdate(
            { taskId: taskId }, // Filter for finding the document
            { $set: { title: title, description: description } }, // Update operation
        );

        if (!updatedTask) {
            return res.status(404).json({ error: 'Task not found' });
        }

        res.status(201).json({ message: 'Task removed successfully' });
    }
    catch(error){
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }

}

);