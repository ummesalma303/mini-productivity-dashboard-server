import express from 'express';
import mongoose from 'mongoose';
import taskSchema from '../schemas/goalsSchema.js';

const router = express.Router();
const Goals = mongoose.model('Goals', taskSchema);


// POST A Task
router.post('/goals', async (req, res) => {
  try {
    const newGoals = new Goals(req.body)
    const data = await newGoals.save();
    // res.send(data)
    res.status(201).json(data);
  } catch (error) {
    console.log(error)
    res.status(400).json({ error: 'server site error' });
  }
});

export default router;
