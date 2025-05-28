import express from 'express';
import mongoose from 'mongoose';
import taskSchema from '../schemas/taskSchema.js';

const router = express.Router();
const Task = mongoose.model('Task', taskSchema);

// GET ALL Task
router.get('/task', async (req, res) => {
 try {
  const result = await Task.find()
    res.status(201).json(result);
 } catch (error) {
  console.log(error)
    res.status(400).json({ error: 'server site error' });
 }
});

// POST A Task
router.post('/', async (req, res) => {
  try {
    const newTask = new Task(req.body)
    const data = await newTask.save();
    // res.send(data)
    res.status(201).json(data);
  } catch (error) {
    console.log(error)
    res.status(400).json({ error: 'server site error' });
  }
});



// update a task
router.patch('/:id', async (req, res) => {
  console.log(req.body)
 try {
  const result = await Task.findByIdAndUpdate( {_id: req.params.id}, { $set:{ completed: req.body?.completedTask } }, { new: true })
    res.status(201).json(result);
 } catch (error) {
  console.log(error)
    res.status(400).json({ error: 'server site error' });
 }
});
export default router;