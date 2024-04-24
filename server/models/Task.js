import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
    taskId: { type: String, required: true, unique: true, index: true },
    title: {type: String, required: true},
    description: {type: String, required: false},
})