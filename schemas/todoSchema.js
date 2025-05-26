// import mongoose from 'mongoose';
// const { Schema } = mongoose;

// const todoSchema = new Schema({
//   title: {type:String, require:true}, 
//   status: {type:String,enum:["active", 'inactive']},
//   description:{type: String, require:true},
//   data:{type: date, default: Date.now}
// });

// module.exports = todoSchema






import mongoose from 'mongoose';
const { Schema } = mongoose;

const todoSchema = new Schema({
  title: {type:String, require:true}, 
  status: {type:String,enum:["active", 'inactive']},
  description:{type: String, require:true},
  data:{type: Schema.Types.Date, default: Date.now}
});

export default todoSchema;