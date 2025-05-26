import express from 'express';
import mongoose from 'mongoose';
import todoSchema from '../schemas/todoSchema.js';

const router = express.Router();
const Todo = mongoose.model('Todo', todoSchema);

// GET ALL TODO'S
router.get('/todo', async (req, res) => {
 try {
  const result = await Todo.find()
    res.status(201).json(result);
 } catch (error) {
  console.log(error)
    res.status(400).json({ error: 'server site error' });
 }
});

// POST A TODO
router.post('/', async (req, res) => {
  try {
    const newTodo = new Todo(req.body)
    const data = await newTodo.save();
    // res.send(data)
    res.status(201).json(data);
  } catch (error) {
    console.log(error)
    res.status(400).json({ error: 'server site error' });
  }
});

export default router;