import mongoose from 'mongoose';
const { Schema } = mongoose;

const taskSchema = new Schema({
  goal_title: {type:String, require:true}, 
   
  goals_description:{type: String, require:true},
  date:{type: Date}
});

export default taskSchema;