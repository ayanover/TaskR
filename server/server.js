const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const loginRoute = require('./routes/login.js')
const app = express();
const port = 3001;
const { v4: uuidv4 } = require('uuid');

app.use(cors({
    origin: 'http://localhost:5173',  // Adjust the port as per your React app
})); // Enable CORS
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect('mongodb://127.0.0.1:27017/TaskR', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// Define MongoDB Schema and Model (User)
const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    tasks: [
        {
            taskName: { type: String, required: true },
            description: { type: String },
            status: { type: String, enum: ['Pending', 'Completed'], default: 'Pending' },
            // Add other task-related fields as needed
        }
    ],
});
const taskSchema = new mongoose.Schema({
    taskId: { type: String, required: true, unique: true, index: true },
    title: {type: String, required: true},
    description: {type: String, required: false},
})


const User = mongoose.model('User', userSchema);
const Task = mongoose.model('Task', taskSchema)

// Routes for user registration and login
app.post('/register', async (req, res) => {
    try {
        const { username, password, email } = req.body;

        const existingUser = await User.findOne({ $or: [{ username }, { email }] });

        if (existingUser) {
            console.log('User already exists')
            // If a user with the same username or email exists, return an error response
            return res.status(400).json({ error: 'User with this username or email already exists' });
        }
        // Hash the password before saving it to the database
        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new User({
            username,
            password: hashedPassword,
            email,
        });

        await newUser.save();
        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
});


app.post('/login', async (req, res) => {
    try {
        console.log('Received login request');
        const { username, password } = req.body;

        const user = await User.findOne({ username });

        if (!user) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }

        const passwordMatch = await bcrypt.compare(password, user.password);

        if (!passwordMatch) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }

        // Generate a JWT token for authentication
        const token = jwt.sign({ username: user.username }, 'your-secret-key', {
            expiresIn: '1h',
        });

        res.status(200).json({ token });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
});
app.get('/tasks', async (req, res) => {
    try {
        const tasks = await Task.find({});
        res.json(tasks); // Return tasks as JSON response
        res.status(1);
    } catch (error) {
        console.error('Error fetching tasks:', error);
        res.status(500).json({ error: 'Internal server error' }); // Return error response if there's an error
    }
});


app.get('/taskget', async (req, res) => {
    try {
        const tasks = await Task.find();
        res.json(tasks); // Return tasks as JSON response
        res.status(1);
    } catch (error) {
        console.error('Error fetching tasks:', error);
        res.status(500).json({ error: 'Internal server error' }); // Return error response if there's an error
    }
});

app.post('/addtask', async (req, res) => {
    try{
    const { taskId, title, description } = req.body;

        const newTask = new Task({
            taskId,
            title,
            description,
        });

    await newTask.save();
    res.status(201).json({ message: 'Task added successfully!' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.post('/deltask', async(req, res)=>{
    try{
        const {taskId} = req.body;
        const task = await Task.findOne({taskId});

        await task.deleteOne();
        res.status(201).json({ message: 'Task removed successfully' });
    }
    catch(error){
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }

});

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

});
function authenticateToken(req, res, nex){
    
}
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
