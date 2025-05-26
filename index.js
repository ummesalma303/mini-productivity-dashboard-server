const express = require("express");
const mongoose = require('mongoose');
const cors = require("cors");
const todoHandler = require('./routeHandler/todoHandler.js');
const app = express();
const port = process.env.PORT || 5000;
//middleware
app.use(express.json());
app.use(cors());

/* ------------------------------------ connect to mongodb ----------------------------------- */
const uri = "mongodb+srv://to-do-manager:U48lj5765Il6CCem@cluster0.ot76b.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

mongoose.connect(uri)
.then(res=>console.log('successfully connect with mongodb'))
.catch(err=>console.log(err))

/* ------------------------------------ Application Routes ----------------------------------- */
app.use('/todo', todoHandler);

app.get("/", (req, res) => {
    res.send("Hello i am your Mini productivity tool Server..");
  });
  
  app.listen(port, () => {
    console.log(`Mini productivity tool is running on port ${port}`);
  });
