const express = require('express')
const app = express();
require('dotenv').config()
const port = process.env.PORT;
const mongoose = require('mongoose');
const tasksRouter = require('./routes/tasks.route')
const bodyParser = require('body-parser');

app.use(express.static('./public'))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use('/api/v1/tasks',tasksRouter)

app.get("/",(req,res)=>{
    res.render()
});


// DB Connection
mongoose.connect(process.env.MONGODB_URI).then(()=>{
    console.log("Database Connected")
    app.listen(port,()=>{
        console.log(`App started on port ${port}`);
    });
}).catch((error)=>{
    console.log("Database connection error")
})
