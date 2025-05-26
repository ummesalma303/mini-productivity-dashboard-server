import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import todoHandler from './routeHandler/todoHandler.js';
dotenv.config();


const app = express();
const port = process.env.PORT || 5000;
//middleware
app.use(express.json());
app.use(cors());

/* ------------------------------------ connect to mongodb ----------------------------------- */
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.ot76b.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

mongoose.connect(uri)
.then(res=>console.log('successfully connect with mongodb'))
.catch(err=>console.log(err))

/* ------------------------------------ Application Routes ----------------------------------- */
app.use("/", todoHandler);

app.get("/", (req, res) => {
    res.send("Hello i am your Mini productivity tool Server..");
  });
  
  app.listen(port, () => {
    console.log(`Mini productivity tool is running on port ${port}`);
  });
