const express = require('express');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv');
const dbservice=require('./dbService');
dotenv.config();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//create
app.post('/insert', (req, res) => {
    const { name } = req.body;
    const db = dbservice.getDbServiceInstance();
    
    const result = db.insertNewName(name);

    result
    .then(data => res.json({ data: data}))
    .catch(err => console.log(err));
});

//read
app.get( '/all', ( req, res )=>{
// console.log('test');
    const db = dbservice.getDbServiceInstance();

    const result = db.getAllData();
    
    result
    .then(data => res.json({data : data}))
    .catch(err => console.log(err));
});

//update
app.patch('/update/:id', (req,res)=>{

});

//delete
app.delete("/delete/:id", (req,res)=> {

});

app.listen(process.env.PORT, ()=> console.log("Server is running on port 3001"));