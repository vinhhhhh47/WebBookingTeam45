const express = require('express');
const morgan = require('morgan');
const mysql = require('mysql');
const path = require('path');
const app = express();
const port = process.env.port || 3333;

app.use(morgan('tiny'));
app.use(express.json());
let db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'web_booking'
});

app.get("/login",(req,res)=>{
    let q = "SELECT * from personal_user";
    db.query(q,(err, data)=>{
        if(err) return res.json(err);
        return res.json(data);
    });
});

app.post("/login",(req,res)=>{
    let q = "INSERT INTO personal_user (`username`,`password`,`role`) VALUES (?)";
    let value = [req.body.username, req.body.password, req.role];

    db.query(q,[value],(err,data)=>{
        if(err) return res.json(err);
        return res.json(data);
    })
})

app.listen(port,() => console.log(`Example app listening on port ${port}!`));