import mongoose from 'mongoose';
const { Schema } = mongoose;

const taskSchema = new Schema({
  title: {type:String, require:true}, 
   
  description:{type: String, require:true},
  date:{type: Date}
});

export default taskSchema;