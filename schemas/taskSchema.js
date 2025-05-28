import mongoose from 'mongoose';
const { Schema } = mongoose;

const taskSchema = new Schema({
  title: {type:String, require:true}, 
  priority: {type:String,enum:["high", 'medium', 'low']},
  completed:{type: Boolean},
  description:{type: String, require:true},
  date:{type: Date}
});

export default taskSchema;